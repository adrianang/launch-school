const rlSync   = require('readline-sync');
let repeatCalc = true;
let monthlyPayment;

function prompt(message) {
  console.log(`=> ${message}`);
}

function getLoanAmountFromUser() {
  prompt('What is your loan amount?');
  let loanAmount = rlSync.question('$');
  loanAmount = loanAmount.replaceAll(',', '');

  while (invalidNumericInput(loanAmount)) {
    prompt(`That doesn't seem to be a valid loan amount. Please enter an amount larger than $0.`);
    loanAmount = rlSync.question('$');
    loanAmount = loanAmount.replaceAll(',', '');
  }

  return Number(loanAmount);
}

function getAPRFromUser() {
  prompt(`What is the annual percentage rate (APR) of your loan? (Enter in % - ex: 5 for 5%, 2 for 2.5%)`);
  let annualPercentageRate = rlSync.question();

  while (invalidNumericInput(annualPercentageRate)) {
    prompt(`That doesn't seem to be a valid rate. Please enter a rate larger than 0. (Enter in % - ex: 5 for 5%, 2 for 2.5%)`);
    annualPercentageRate = rlSync.question();
  }

  return (Number(annualPercentageRate) / 100);
}

function getLoanDurationFromUser() {
  prompt('How many years is your loan\'s term for?');
  let loanDurationInYears = rlSync.question();

  while (invalidNumericInput(loanDurationInYears)) {
    prompt(`That doesn't seem to be a valid loan length. Please enter a duration larger than 0 years.`);
    loanDurationInYears = rlSync.question();
  }

  return Number(loanDurationInYears);
}

function getRepeatFromUser() {
  prompt('Would you like to calculate the monthly payment for another loan?\n   (1) Yes (2) No');
  let repeat = rlSync.question();

  while (!['1', '2'].includes(repeat)) {
    prompt(`That doesn't seem to be a valid response. Please enter 1 to calculate again, or 2 to quit.`);
    repeat = rlSync.question();
  }

  return repeat === '1';
}

function invalidNumericInput(numInput) {
  return numInput.trimStart() === '' || Number.isNaN(Number(numInput)) || !(Number(numInput) > 0);
}

function calculateMonthlyPayment(loanAmt, monthlyIntRate, loanDurationMonths) {
  monthlyPayment = loanAmt *
                   (monthlyIntRate /
                   (1 - Math.pow((1 + monthlyIntRate), (-loanDurationMonths))));

  return monthlyPayment;
}

do {
  console.clear();
  prompt('Welcome to Loan Calculator!');
  let loanAmount = getLoanAmountFromUser();
  let annualPercentageRate = getAPRFromUser();
  let loanDurationYears = getLoanDurationFromUser();
  let monthlyInterestRate = annualPercentageRate / 12;
  let loanDurationMonths = loanDurationYears * 12;
  calculateMonthlyPayment(loanAmount, monthlyInterestRate, loanDurationMonths);

  prompt(`Your monthly payment for a loan of $${loanAmount} with an APR of ${annualPercentageRate * 100}% for ${loanDurationYears} years is:`);
  prompt(`$${monthlyPayment.toFixed(2)}`);

  repeatCalc = getRepeatFromUser();
} while (repeatCalc);

prompt('Goodbye - calculator closing...');