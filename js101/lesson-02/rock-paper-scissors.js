const rlSync = require('readline-sync');
const GAME = {
  validChoices: {
    full:  ['rock', 'paper', 'scissors', 'spock', 'lizard'],
    short: ['r', 'p', 'sc', 'sp', 'l']
  },
  rules: {
    rock: {
      winsAgainst:  ['scissors', 'lizard'],
      losesAgainst: ['paper', 'spock'],
    },
    paper: {
      winsAgainst:  ['rock', 'spock'],
      losesAgainst: ['scissors', 'lizard']
    },
    scissors: {
      winsAgainst:  ['paper', 'lizard'],
      losesAgainst: ['rock', 'spock']
    },
    lizard: {
      winsAgainst:  ['spock', 'paper'],
      losesAgainst: ['rock', 'scissors']
    },
    spock: {
      winsAgainst:  ['scissors', 'rock'],
      losesAgainst: ['lizard', 'paper']
    }
  },
  score: {
    user: 0,
    computer: 0
  },
  grandWinner: null
};
const SCORE_TO_WIN = 3;
const MAX_LENGTH_OF_SHORT_CHOICE =
  GAME.validChoices.short.map(choice => choice.length).sort((a, b) => b - a)[0];
let rematchGame = true;

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayIntroduction() {
  console.log(`=== Welcome to Rock, Paper, Scissors (& Spock & Lizard)! ====

    RULES: SCISSORS cuts PAPER covers ROCK crushes
           LIZARD poisons SPOCK smashes SCISSORS
           decapitates LIZARD eats PAPER disproves
           SPOCK vaporizes ROCK crushes SCISSORS.

         - First player to score ${SCORE_TO_WIN} is the 👑 GRAND WINNER 👑!

         - Instead of typing your entire move, you can type:
           'r'  for ROCK
           'p'  for PAPER
           'sc' for SCISSORS
           'sp' for SPOCK
           'l'  for LIZARD

    ========================================================\n`);
}

function getMoveFromUser() {
  prompt(`Choose one: ${GAME.validChoices.full.join(', ')}`);
  let choice = rlSync.question('   ').toLowerCase();

  while (!Object.values(GAME.validChoices).flat().includes(choice)) {
    prompt("That's not a valid choice!");
    choice = rlSync.question('   ').toLowerCase();
  }

  if (choice.length <= MAX_LENGTH_OF_SHORT_CHOICE) {
    choice = parseShortenedChoice(choice);
  }

  return choice;
}

function getMoveFromComputer() {
  let randomIndex = Math.floor(Math.random() * GAME.validChoices.full.length);
  return GAME.validChoices.full[randomIndex];
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);
  let winner = determineWinner(choice, computerChoice);

  if (winner === 'user') {
    prompt('You win!');
  } else if (winner === 'computer') {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

function determineWinner(choice, computerChoice) {
  let winner;

  if (GAME.rules[choice].winsAgainst.includes(computerChoice)) {
    winner = 'user';
    GAME.score.user += 1;
  } else if (GAME.rules[choice].losesAgainst.includes(computerChoice)) {
    winner = 'computer';
    GAME.score.computer += 1;
  }

  return winner;
}

function displayGrandWinner() {
  if (GAME.grandWinner) {
    prompt(`The grand winner is: ${GAME.grandWinner}! 👑`);
    resetScore();
  }
}

function determineGrandWinner() {
  if (GAME.score.user === SCORE_TO_WIN) {
    GAME.grandWinner = 'You';
  } else if (GAME.score.computer === SCORE_TO_WIN) {
    GAME.grandWinner = 'Computer';
  }
}

function displayScore() {
  prompt(`Current Score:\n   You: ${GAME.score.user} | Computer: ${GAME.score.computer}`);
}

function resetScore() {
  GAME.grandWinner = null;
  GAME.score = {
    user: 0,
    computer: 0
  };
}

function parseShortenedChoice(shortChoice) {
  let intendedChoice;

  GAME.validChoices.full.forEach(validChoice => {
    if (validChoice.indexOf(shortChoice) === 0) intendedChoice = validChoice;
  });

  return intendedChoice;
}

function askRematchFromUser() {
  prompt('Do you want to play again (y/n)?');
  let answer = rlSync.question('   ').toLowerCase();

  while (!['y', 'n'].includes(answer)) {
    prompt('Please enter "y" or "n".');
    answer = rlSync.question('   ').toLowerCase();
  }

  return answer === 'y';
}

console.clear();
displayIntroduction();

do {
  let choice = getMoveFromUser();
  let computerChoice = getMoveFromComputer();

  displayWinner(choice, computerChoice);
  displayScore();
  determineGrandWinner();
  displayGrandWinner();

  rematchGame = askRematchFromUser();
  console.clear();
} while (rematchGame);

prompt('Thanks for playing Rock, Paper, Scissors (& Spock & Lizard)!');