const rlSync = require('readline-sync');

let monthlyPayment;
let loanAmount;
let annualPercentageRate;
let loanDurationInYears;

console.log('Welcome to Loan Calculator!');
console.log('What is your loan amount?');
loanAmount = Number(rlSync.question());
console.log(`What is the annual percentage rate (APR) of your loan? (Enter in %)`);
annualPercentageRate = Number(rlSync.question()) / 100;
console.log('How many years is your loan\'s term for?');
loanDurationInYears = Number(rlSync.question());
let monthlyInterestRate = annualPercentageRate / 12;
let loanDurationInMonths = loanDurationInYears * 12;

monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths))));

console.log(`Your monthly payment for a loan of $${loanAmount} with an APR of ${annualPercentageRate * 100}% for ${loanDurationInYears} years is:`);
console.log(`$${monthlyPayment.toFixed(2)}`);

// PSEUDOCODE
// Ask user for loan amount.
// Ask user for Annual Percentage Rate (APR) (in percent).
// Ask user for loan duration (in years).
// Calculate for monthly payment.
// Print monthly payment to console.