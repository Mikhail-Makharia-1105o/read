const readlineSync = require('readline-sync');

const calculateAverageGrade = (grades) => {
    const gradesAr = grades.split(" ");
    var gradesSum = 0;

    for(let i = 0; i < gradesAr.length; i++) {
        gradesSum += parseInt(gradesAr[i]);
    };

    return gradesSum/gradesAr.length
}

// logging the return of CAG function after requesting input:

console.log(calculateAverageGrade(readlineSync.question('Grades(separated by " "):')));