/* 
const reverseString = function() {

};

// Do not edit below this line
module.exports = reverseString;

*/

// DO NOT TOUCH ABOVE THIS LINE. ABOVE IS THE ORIGINAL HW

/* hint  
reverseString('hello there') // returns 'ereht olleh'

Strings in JavaScript cannot be reversed directly so you're going to have to split it into 
something else first.. do the reversal and then join it back together into a string.

*/

let originalString = 'hello there';
console.log(originalString);

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods

// review the useful string methods for this hw

let count = originalString.length;  // this finds the number of characters.
console.log(count); // this shows 11. remember it counts from 0 to 10 and includes the space. 

// use the [] for each character to get each char's index. then use a loop to get all chars and 
// display them backwards

console.log(originalString[0]); // first letter
console.log(originalString[count-1]); // last letter
let newString = ''; // blank for now. it will hold each new letter concatenated to the previous letter

for(let i = 0; i <= originalString.length - 1; i++){  // this prints each letter on a separate line going forwards
    console.log(originalString);
    let individualLetter = originalString[i];
    console.log(individualLetter);
    newString += individualLetter;
    console.log(newString);
}

function reverseString(originalString) {
    let newStringBackwards = ''; // blank for now. it will hold each new letter concatenated to the 
// previous letter
    for(let i = originalString.length - 1; i >= 0; i--){ // this prints each letter on a separate line going backwards
        console.log(originalString);
        let individualLetter = originalString[i];
        console.log(individualLetter);
        newStringBackwards += individualLetter;
        console.log(newStringBackwards);
    }
}

reverseString('awesome possum'); // here you are passing a string instead of the value of the 
// variable from line 21 which is 'hello there'. if you were to remove the string and use the 
// variable name of originalString, then it will use 'hello there'

reverseString(originalString);


