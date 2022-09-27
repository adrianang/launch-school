const rlSync = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const SHORTENED_VALID_CHOICES = ['r', 'p', 'sc', 'sp', 'l'];
const MATCH_SCORE = {
  user: 0,
  computer: 0,
  grandWinner: null
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

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
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

function determineGrandWinner() {
  if (MATCH_SCORE.user === 3) {
    MATCH_SCORE.grandWinner = 'You';
  } else if (MATCH_SCORE.computer === 3) {
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

function parseShortenedChoice(shortChoice, mainChoicesArr) {
  let intendedChoice;

  mainChoicesArr.forEach(mainChoice => {
    if (mainChoice.indexOf(shortChoice) === 0) intendedChoice = mainChoice;
  });

  return intendedChoice;
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = rlSync.question();

  while (![...VALID_CHOICES, ...SHORTENED_VALID_CHOICES].includes(choice)) {
    prompt("That's not a valid choice");
    choice = rlSync.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  if (choice.length < 3) choice = parseShortenedChoice(choice, VALID_CHOICES);
  displayWinner(choice, computerChoice);
  displayScore(MATCH_SCORE);
  determineGrandWinner();
  if (MATCH_SCORE.grandWinner) {
    prompt(`The grand winner is: ${MATCH_SCORE.grandWinner}!`);
    resetScore();
  }

  prompt('Do you want to play again (y/n)?');
  let answer = rlSync.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = rlSync.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}