const readlineSync = require('readline-sync');

const distance = (x1, y1, x2, y2) => {
    var distanceX = x2 - x1;
    var distanceY = y2 - y1;
    if(distanceX < 0){
        distanceX = -distanceX;
    }
    if(distanceY < 0){
        distanceY = -distanceY;
    }
    return distanceX, distanceY
}

// logging the return of temperature converter function after requesting input:

console.log(distance(readlineSync.question('X1: '), readlineSync.question('Y1: '), readlineSync.question('X2: '), readlineSync.question('Y2: ')));