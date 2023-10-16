const readlineSync = require('readline-sync');

const wordCount = (sent) => {
    return sent.split(" ").length;
}

// logging the return of wordCount function after requesting input:

console.log(wordCount(readlineSync.question('Sentence:')));