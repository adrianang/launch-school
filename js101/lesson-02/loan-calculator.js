const rlSync = require('readline-sync');
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
  prompt(`What is the annual percentage rate (APR) of your loan? (Enter in %)`);
  let annualPercentageRate = rlSync.question();

  while (invalidNumericInput(annualPercentageRate)) {
    prompt(`That doesn't seem to be a valid rate. Please enter a rate larger than 0. (Enter in %)`);
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

function invalidNumericInput(numInput) {
  return numInput.trimStart() === '' || Number.isNaN(Number(numInput)) || !(Number(numInput) > 0);
}

function calculateMonthlyPayment(loanAmt, monthlyIntRate, loanDurationInMo) {
  monthlyPayment = loanAmt *
                   (monthlyIntRate /
                   (1 - Math.pow((1 + monthlyIntRate), (-loanDurationInMo))));

  return monthlyPayment;
}

console.clear();
prompt('Welcome to Loan Calculator!');
let loanAmount = getLoanAmountFromUser();
let annualPercentageRate = getAPRFromUser();
let loanDurationInYears = getLoanDurationFromUser();
let monthlyInterestRate = annualPercentageRate / 12;
let loanDurationInMonths = loanDurationInYears * 12;
calculateMonthlyPayment(loanAmount, monthlyInterestRate, loanDurationInMonths);
prompt(`Your monthly payment for a loan of $${loanAmount} with an APR of ${annualPercentageRate * 100}% for ${loanDurationInYears} years is:`);
prompt(`$${monthlyPayment.toFixed(2)}`);