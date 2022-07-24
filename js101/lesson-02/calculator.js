// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
// Ask they user if they want to perform another calculation.
// Start a new calculation if the user says yes (repeat flowchart).

const rlSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function getNumberFromUser() {
  let number = rlSync.question();

  while (invalidNumber(number)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number = rlSync.question();
  }

  return number;
}

function getOperationFromUser() {
  let operation = rlSync.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3, or 4');
    operation = rlSync.question();
  }

  return operation;
}

function getRepeatFromUser() {
  let repeat = rlSync.question();

  while (!['1', '2'].includes(repeat)) {
    prompt('Must choose 1 or 2');
    repeat = rlSync.question();
  }

  return repeat === '1';
}

while (true) {
  console.clear();
  prompt('Welcome to Calculator!');
  prompt("What's the first number?");
  let number1 = getNumberFromUser();

  prompt("What's the second number?");
  let number2 = getNumberFromUser();

  prompt('What operation would you like to perform?\n' +
        '   1) Add 2) Subtract 3) Multiply 4) Divide');
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

  prompt(`The result is: ${output}`);
  prompt('Would you like to perform another calculation?\n' +
         '   1) Yes 2) No');
  let repeatCalc = getRepeatFromUser();

  if (!repeatCalc) break;
}

prompt('Goodbye - calculator closing!');