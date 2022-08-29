const rlSync             = require('readline-sync');
const NUM_MONTHS_IN_YEAR = 12;
let repeatCalc           = true;

function prompt(message) {
  console.log(`=> ${message}`);
}

function getLoanAmountFromUser() {
  prompt('What is your loan amount?');
  let loanAmount = rlSync.question('   $').replaceAll(',', '');

  while (invalidNumericInput('amount', loanAmount)) {
    prompt(`That doesn't seem to be a valid loan amount. Please enter an amount larger than $0.`);
    loanAmount = rlSync.question('   $').replaceAll(',', '');
  }

  return Number(loanAmount);
}

function getAPRFromUser() {
  prompt(
    'What is the annual percentage rate (APR) of your loan?\n' +
    '   * For a zero-interest loan (0% APR), enter 0.\n' +
    '   * For all other loans, enter the rate in percentage. (e.g. 5 for 5%, 2.5 for 2.5%, 0.68 for 0.68%)'
  );
  let annualPercentageRate = rlSync.question('   ');

  while (invalidNumericInput('apr', annualPercentageRate)) {
    prompt(`That doesn't seem to be a valid rate. Please enter, in percentage, a rate larger than 0. (e.g. 5 for 5%, 2.5 for 2.5%, 0.68 for 0.68%)`);
    annualPercentageRate = rlSync.question('   ');
  }

  return Number(annualPercentageRate);
}

function getLoanDurationFromUser() {
  prompt(`How many years is your loan's term for?`);
  let loanDurationInYears = rlSync.question('   ');

  while (invalidNumericInput('duration', loanDurationInYears)) {
    prompt(`That doesn't seem to be a valid loan term length. Please enter a duration, in whole years only, larger than 0 years.`);
    loanDurationInYears = rlSync.question('   ');
  }

  return Number(loanDurationInYears);
}

function getRepeatFromUser() {
  prompt(
    'Would you like to calculate the monthly payment for another loan?\n' +
    '   (1) Yes (2) No');
  let repeat = rlSync.question('   ');

  while (!['1', '2'].includes(repeat)) {
    prompt(`That doesn't seem to be a valid response. Please enter 1 to calculate again, or 2 to quit.`);
    repeat = rlSync.question('   ');
  }

  return repeat === '1';
}

function invalidNumericInput(inputType, numInput) {
  if (inputType === 'apr' && numInput === '0') return false;
  if (inputType === 'duration' && (numInput % 1 !== 0)) return true;

  return numInput.trimStart() === '' ||
         Number.isNaN(Number(numInput)) ||
         !(Number(numInput) > 0);
}

function calculateMonthlyPayment(loanAmt, monthlyIntRate, loanDurationMonths) {
  if (monthlyIntRate === 0) return (loanAmt / loanDurationMonths);

  let monthlyPayment;
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
  let monthlyInterestRate = (annualPercentageRate / 100) / NUM_MONTHS_IN_YEAR;
  let loanDurationMonths = loanDurationYears * NUM_MONTHS_IN_YEAR;
  let monthlyPayment =
    calculateMonthlyPayment(
      loanAmount,
      monthlyInterestRate,
      loanDurationMonths
    );

  prompt(
    `Your monthly payment for a loan of $${loanAmount} with an APR of ${annualPercentageRate}% for ${loanDurationYears} years (or ${loanDurationMonths} months) is:\n` +
    `   $${monthlyPayment.toFixed(2)}`
  );

  repeatCalc = getRepeatFromUser();
} while (repeatCalc);

prompt('Goodbye - calculator closing...');