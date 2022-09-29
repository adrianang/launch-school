const rlSync = require('readline-sync');
const VALID_CHOICES = {
  full:  ['rock', 'paper', 'scissors', 'spock', 'lizard'],
  short: ['r', 'p', 'sc', 'sp', 'l']
};
const SCORE_TO_WIN = 3;
const MAX_LENGTH_OF_SHORT_CHOICE =
  VALID_CHOICES.short.map(choice => choice.length).sort((a, b) => b - a)[0];
const MATCH_SCORE = {
  user: 0,
  computer: 0,
  grandWinner: null,
};
const GAME_RULES = {
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
};
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
  prompt(`Choose one: ${VALID_CHOICES.full.join(', ')}`);
  let choice = rlSync.question('   ').toLowerCase();

  while (![...VALID_CHOICES.full, ...VALID_CHOICES.short].includes(choice)) {
    prompt("That's not a valid choice!");
    choice = rlSync.question('   ');
  }

  if (choice.length <= MAX_LENGTH_OF_SHORT_CHOICE) {
    choice = parseShortenedChoice(choice);
  }

  return choice;
}

function getMoveFromComputer() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.full.length);
  return VALID_CHOICES.full[randomIndex];
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

  if (GAME_RULES[choice].winsAgainst.includes(computerChoice)) {
    winner = 'user';
    MATCH_SCORE.user += 1;
  } else if (GAME_RULES[choice].losesAgainst.includes(computerChoice)) {
    winner = 'computer';
    MATCH_SCORE.computer += 1;
  }

  return winner;
}

function displayGrandWinner() {
  if (MATCH_SCORE.grandWinner) {
    prompt(`The grand winner is: ${MATCH_SCORE.grandWinner}! 👑`);
    resetScore();
  }
}

function determineGrandWinner() {
  if (MATCH_SCORE.user === SCORE_TO_WIN) {
    MATCH_SCORE.grandWinner = 'You';
  } else if (MATCH_SCORE.computer === SCORE_TO_WIN) {
    MATCH_SCORE.grandWinner = 'Computer';
  }
}

function displayScore() {
  prompt(`Current Score:\n   You: ${MATCH_SCORE.user} | Computer: ${MATCH_SCORE.computer}`);
}

function resetScore() {
  MATCH_SCORE.user = 0;
  MATCH_SCORE.computer = 0;
  MATCH_SCORE.grandWinner = null;
}

function parseShortenedChoice(shortChoice) {
  let intendedChoice;

  VALID_CHOICES.full.forEach(validChoice => {
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