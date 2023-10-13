const readlineSync = require('readline-sync');

const calculateRectangleProperties = (width, height) => {
    return `S:${width * height}, P:${2 * (parseInt(width) + parseInt(height))}`;
}

// logging the return of CRP function after requesting input:

console.log(calculateRectangleProperties(readlineSync.question('side A:'), readlineSync.question('side B:')));