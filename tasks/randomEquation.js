const readlineSync = require('readline-sync');

const generateRandomEquation = () => {
    var a = Math.round((Math.random() * 11));
    var b = Math.round((Math.random() * 11));
    var c = Math.round((Math.random() * 11));
    if(Math.random() >= 0.5 ){
        a = -a;
    };
    if(Math.random() >= 0.5 ){
        b = -b;
    };
    if(Math.random() >= 0.5 ){
        c = -c;
    };
    return `${a}x^2 + ${b}x = ${c}`
}

// logging the return of CAG function after requesting input:

console.log(generateRandomEquation());