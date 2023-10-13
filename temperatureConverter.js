const readlineSync = require('readline-sync');

const temperatureConverter = (cels) => {
    return (cels * 9/5) + 32;
}

// logging the return of temperature converter function after requesting input:

console.log(temperatureConverter(readlineSync.question('Temperature(in Celsius):')));