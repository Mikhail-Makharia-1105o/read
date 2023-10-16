const readlineSync = require('readline-sync');

const incomeTaxCalculator = (price, discount) => {
    return price - (price * discount);
}

// logging the return of discountCalculator function after requesting input:

console.log(incomeTaxCalculator(readlineSync.question('Price(in $):'), readlineSync.question('Discount(in decimals; for example, 10% becomes 0.1):')));