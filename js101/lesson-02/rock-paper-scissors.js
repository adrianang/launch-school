const rlSync = require('readline-sync');
const VALID_CHOICES = {
  rock:     ['rock', 'r'],
  paper:    ['paper', 'p'],
  scissors: ['scissors', 'sc'],
  spock:    ['spock', 'sp'],
  lizard:   ['lizard', 'l']
};
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard:   ['spock', 'paper'],
  spock:    ['scissors', 'rock']
};
const SCOREBOARD = { user: 0, computer: 0 };
const SCORE_TO_WIN = 3;
const MAX_LENGTH_OF_SHORT_CHOICE =
  Object.values(VALID_CHOICES)
    .map(choice => choice[1].length)
    .sort((a, b) => b - a)[0];
let grandWinner = null;
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
  prompt(`Choose one: ${Object.keys(VALID_CHOICES).join(', ')}`);
  let choice = rlSync.question('   ').toLowerCase();

  while (!Object.values(VALID_CHOICES).flat().includes(choice)) {
    prompt("That's not a valid choice!");
    choice = rlSync.question('   ').toLowerCase();
  }

  if (choice.length <= MAX_LENGTH_OF_SHORT_CHOICE) {
    choice = parseShortenedChoice(choice);
  }

  return choice;
}

function getMoveFromComputer() {
  let randomIndex =
    Math.floor(Math.random() * Object.keys(VALID_CHOICES).length);
  return Object.keys(VALID_CHOICES)[randomIndex];
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

  if (WINNING_COMBOS[choice].includes(computerChoice)) {
    winner = 'user';
    SCOREBOARD.user += 1;
  } else if (choice === computerChoice) {
    winner = null;
  } else {
    winner = 'computer';
    SCOREBOARD.computer += 1;
  }

  return winner;
}

function displayGrandWinner() {
  if (grandWinner) {
    prompt(`The grand winner is: ${grandWinner}! 👑`);
    resetScore();
  }
}

function determineGrandWinner() {
  if (SCOREBOARD.user === SCORE_TO_WIN) {
    grandWinner = 'You';
  } else if (SCOREBOARD.computer === SCORE_TO_WIN) {
    grandWinner = 'Computer';
  }
}

function displayScore() {
  prompt(`Current Score:\n   You: ${SCOREBOARD.user} | Computer: ${SCOREBOARD.computer}`);
}

function resetScore() {
  grandWinner = null;
  SCOREBOARD.user = 0;
  SCOREBOARD.computer = 0;
}

function parseShortenedChoice(shortChoice) {
  let intendedChoice;

  for (let validChoice in VALID_CHOICES) {
    if (VALID_CHOICES[validChoice].includes(shortChoice)) {
      intendedChoice = validChoice;
    }
  }

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