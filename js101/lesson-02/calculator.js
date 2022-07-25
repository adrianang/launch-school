// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
// Ask they user if they want to perform another calculation.
// Start a new calculation if the user says yes (repeat flowchart).

const rlSync   = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGCODE = 'en';

function messages(message, langCode = 'en') {
  return MESSAGES[langCode][message];
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function getNumberFromUser() {
  let number = rlSync.question();

  while (invalidNumber(number)) {
    prompt(messages("invalidNumberWarning", LANGCODE));
    number = rlSync.question();
  }

  return number;
}

function getOperationFromUser() {
  let operation = rlSync.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages("invalidOperationWarning", LANGCODE));
    operation = rlSync.question();
  }

  return operation;
}

function getRepeatFromUser() {
  let repeat = rlSync.question();

  while (!['1', '2'].includes(repeat)) {
    prompt(messages("invalidRepeatWarning", LANGCODE));
    repeat = rlSync.question();
  }

  return repeat === '1';
}

while (true) {
  console.clear();
  prompt(messages("welcome", LANGCODE));
  prompt(messages("getFirstNumber", LANGCODE));
  let number1 = getNumberFromUser();

  prompt(messages("getSecondNumber", LANGCODE));
  let number2 = getNumberFromUser();

  prompt(messages("getOperation", LANGCODE));
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

  prompt(`${messages("resultPrefix", LANGCODE)} ${output}`);
  prompt(messages("getCalculationRepeat", LANGCODE));
  let repeatCalc = getRepeatFromUser();

  if (!repeatCalc) break;
}

prompt(messages("goodbye", LANGCODE));