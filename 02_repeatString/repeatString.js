/* const repeatString = function() {  this is from the hw. insert your modifications here.

}

// Do not edit below this line
module.exports = repeatString;

*/

/*   repeatString('hey', 3)

use a loop
a var holds the string to return. the return will look like this heyheyhey
use the loop to repeat based on the number of times
add the string to the result of each loop
var to hold word (prompt the user)?
var to hold number (prompt the user)?
call the function and it passes the word from a var above the function

*/

const word = 'hey';
let number = 3;
let result = '';

for(let i = 1; i <= number; i++) {
    result += `${word}`; // result = result + word
    alert(result);
    // console.log(result); console works. shows heyheyhey
}
