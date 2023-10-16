const readlineSync = require('readline-sync');

const incomeCalculator = (income, losses) => {
    const incomeAr = income.split(" ");
    const lossesAr = losses.split(" ");
    var incomSum = 0;
    var lossesSum = 0;
    for (let i = 0; i < incomeAr.length; i++) {
        incomSum += parseInt(incomeAr[i]);
    };

    for (let i = 0; i < lossesAr.length; i++) {
        lossesSum += parseInt(lossesAr[i]);
    };

    return incomSum - lossesSum
}

// logging the return of incomeCalculator function after requesting input:

console.log(incomeCalculator(readlineSync.question('Income(Input numbers separated by " ", ex. "10 100 23 450 20045")'), readlineSync.question('Expenses(Input numbers separated by " ", ex. "10 100 23 450 20045")')));