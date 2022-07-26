const rlSync     = require('readline-sync');
const MESSAGES   = require('./calculator_messages.json');
let userLangCode = 'en';
let repeatCalc   = true;

function messages(message, langCode = 'en') {
  return MESSAGES[langCode][message];
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function getLangCodeFromUser() {
  prompt("Please pick a language to display Calculator in.\n   1) English 2) Mandarin Chinese 3) Hindi");
  userLangCode = rlSync.question();

  while (!['1', '2', '3'].includes(userLangCode)) {
    prompt("We don't provide that language yet - please pick from our available languages.\n   (Must pick 1, 2, or 3)");
    userLangCode = rlSync.question();
  }

  switch (userLangCode) {
    case '1':
      userLangCode = 'en';
      break;
    case '2':
      userLangCode = 'zh';
      break;
    case '3':
      userLangCode = 'hi';
      break;
  }

  return userLangCode;
}

function getNumberFromUser(numToGet) {
  let numberMessageToGet;
  if (numToGet === 'First' || numToGet === 'Second') {
    numberMessageToGet = `get${numToGet}Number`;
  }

  prompt(messages(numberMessageToGet, userLangCode));
  let number = rlSync.question();

  while (invalidNumber(number)) {
    prompt(messages("invalidNumberWarning", userLangCode));
    number = rlSync.question();
  }

  return number;
}

function getOperationFromUser() {
  prompt(messages("getOperation", userLangCode));
  let operation = rlSync.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages("invalidOperationWarning", userLangCode));
    operation = rlSync.question();
  }

  return operation;
}

function getRepeatFromUser() {
  prompt(messages("getCalculationRepeat", userLangCode));
  let repeat = rlSync.question();

  while (!['1', '2'].includes(repeat)) {
    prompt(messages("invalidRepeatWarning", userLangCode));
    repeat = rlSync.question();
  }

  return repeat === '1';
}

function handleDivideByZero() {
  prompt(messages("dividingByZero", userLangCode));
  let divideByZeroResponse = rlSync.question();

  while (!['1', '2'].includes(divideByZeroResponse)) {
    prompt(messages("invalidDivideByZeroWarning"), userLangCode);
    divideByZeroResponse = rlSync.question();
  }

  return divideByZeroResponse;
}

function calculate(number1, number2, operation) {
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

  return output;
}

console.clear();
userLangCode = getLangCodeFromUser();

do {
  console.clear();
  prompt(messages("welcome", userLangCode));
  let number1 = getNumberFromUser('First');
  let number2 = getNumberFromUser('Second');
  let operation = getOperationFromUser();

  while (number2 === '0' && operation === '4') {
    let divideByZeroResponse = handleDivideByZero();

    if (divideByZeroResponse === '1') {
      number2 = getNumberFromUser('Second');
    } else {
      operation = getOperationFromUser();
    }
  }

  let output = calculate(number1, number2, operation);
  if (output % 1 !== 0) output = parseFloat(output.toFixed(3));
  prompt(`${messages("resultPrefix", userLangCode)} ${output}`);

  repeatCalc = getRepeatFromUser();
} while (repeatCalc);

prompt(messages("goodbye", userLangCode));