// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
// Ask they user if they want to perform another calculation.
// Start a new calculation if the user says yes (repeat flowchart).

const rlSync   = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function getNumberFromUser() {
  let number = rlSync.question();

  while (invalidNumber(number)) {
    prompt(MESSAGES.invalidNumberWarning);
    number = rlSync.question();
  }

  return number;
}

function getOperationFromUser() {
  let operation = rlSync.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES.invalidOperationWarning);
    operation = rlSync.question();
  }

  return operation;
}

function getRepeatFromUser() {
  let repeat = rlSync.question();

  while (!['1', '2'].includes(repeat)) {
    prompt(MESSAGES.invalidRepeatWarning);
    repeat = rlSync.question();
  }

  return repeat === '1';
}

while (true) {
  console.clear();
  prompt(MESSAGES.welcome);
  prompt(MESSAGES.getFirstNumber);
  let number1 = getNumberFromUser();

  prompt(MESSAGES.getSecondNumber);
  let number2 = getNumberFromUser();

  prompt(MESSAGES.getOperation);
  let operation = getOperationFromUser();

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`${MESSAGES.resultPrefix} ${output}`);
  prompt(MESSAGES.getCalculationRepeat);
  let repeatCalc = getRepeatFromUser();

  if (!repeatCalc) break;
}

prompt(MESSAGES.goodbye);