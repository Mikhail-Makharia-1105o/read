const readlineSync = require('readline-sync');

const calculateTIme = (speed, distance) => {
    return `${(distance/speed)}ч ${Math.round((distance/speed)/60)}м`;
}

// logging the return of calculateTime function after requesting input:

console.log(calculateTIme(readlineSync.question('Speed:'), readlineSync.question('Distance:')));