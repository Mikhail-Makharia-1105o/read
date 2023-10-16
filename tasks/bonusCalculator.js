const readlineSync = require('readline-sync');

const calculateEmployeeBonus = (salary, performanceRating) => {
    if(performanceRating > 8) {
        return salary * 0.2;
    };
    return salary * 0.1;
}

// logging the return of CEB function after requesting input:

console.log(calculateEmployeeBonus(readlineSync.question('salary: '), readlineSync.question('performance rating: ')));