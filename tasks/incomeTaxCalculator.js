const readlineSync = require('readline-sync');

const incomeTaxCalculator = (greens) => {
    return greens * 0.15 + '$';
}

// logging the return of IncomeTaxCalculator function after requesting input:

console.log(incomeTaxCalculator(readlineSync.question('Income(in $):')));