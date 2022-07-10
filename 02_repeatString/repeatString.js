/*
const repeatString = function() {  // THIS IS FROM THE HW. LEAVE ALONE. 

}
*/

// Do not edit below this line
// module.exports = repeatString;

/* DO NOT TOUCH ANYTHING ABOVE THIS LINE */


/* below is your hw. they wanted the function to accept 2 parameters. 1 for the word and 1 for the 
number. but my work has the function not receive anything. the word hey is part of the function.
the user provides a number for the loop. when you call the function, it does work but i'm not 
passing anything to it. i wonder if that is ok or should i redo the function?

*/

/*   repeatString('hey', 3) // they want something like this

these were hints in the hw:
use a loop
a var holds the string to return. the return will look like this heyheyhey
use the loop to repeat based on the number of times
add the string to the result of each loop
take note of the above function call- how exactly is it being called?

*/

/* the lines below work. building the loop part
const word = 'hey';
let number = parseInt(prompt('Enter a number', '3'));
let result = '';

for(let i = 1; i <= number; i++) {
    result += `${word}`; // result = result + word
    alert(result);
    // console.log(result); console works. shows heyheyhey
}

*/

/* this works but you're not passing anything to the function and that's what the hw says to do.
to pass the word and number to the function. but keep the word as hey b/c the jest test only looks for 
hey

function repeatString() {
const word = 'hey';
    let number = parseInt(prompt('Enter a number', '3'));
    let result = '';

    for(let i = 1; i <= number; i++) {
        result += `${word}`; // result = result + word
        alert(result);
        // console.log(result); console works. shows heyheyhey
}
}

repeatString();

*/

// seems to work, test some more before moving on to the next hw
const word = 'hey';
let number = parseInt(prompt('Enter a number', '3'));
let result = '';

function repeatString(word, number) {
    for(let i = 1; i <= number; i++) {
        result += `${word}`; // result = result + word
        alert(result);
    }
}

repeatString(word, number);



