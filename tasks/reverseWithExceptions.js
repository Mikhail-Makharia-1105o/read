const readlineSync = require('readline-sync');
function arrayMatch(arr1, arr2) {
    var arr = [];  // Array to contain match elements
    for(var i=0 ; i<arr1.length ; ++i) {
      for(var j=0 ; j<arr2.length ; ++j) {
        if(arr1[i] == arr2[j]) {    // If element is in both the arrays
          arr.push(arr1[i]);      // Push to arr array
        }
      }
    }
    
    return arr;  // Return the arr elements
  }
const reverseStringWithExceptions = (string, exceptions) => {
    var strArray = string.split(' ');
    var excArray = exceptions.split(' ');
    var endArray = [];
    for(let i = 0; i < strArray.length; i++) {
        
        if(arrayMatch(strArray, excArray).includes(strArray[i])) {
            endArray.push(strArray[i]);
        } else {
            let splitString = strArray[i].split('')
            let reverseArray = splitString.reverse();
            endArray.push(reverseArray.join(''));
        }
    }
    return endArray.join(' ')
}
// logging the return of RWE function after requesting input:

console.log(reverseStringWithExceptions(readlineSync.question("String:"), readlineSync.question("Exceptions:")));