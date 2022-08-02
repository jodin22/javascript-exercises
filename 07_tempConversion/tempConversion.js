/* 
const ftoc = function() {

};

const ctof = function() {

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
*/

/* 
LEAVE THE ABOVE ALONE. YOU CAN'T DO THE JEST TESTS BECAUSE YOUR VERSION OF NODE IS TOO OLD. YOU HAVE 
TO USE OLDER VERSIONS OF THE REQUIRED SOFTWARE B/C YOUR MACHINE IS TOO OLD AND CAN'T SUPPORT THE 
LASTER VERSIONS.
*/

/*  
Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:

ftoc(32) // fahrenheit to celsius, should return 0

ctof(0) // celsius to fahrenheit, should return 32

Because we are human, we want the result temperature to be rounded to one decimal place:
i.e., ftoc(100) should return 37.8 and not 37.77777777777778.

This exercise asks you to create more than one function so the module.exports section of the spec 
file looks a little different this time. Nothing to worry about, we're just packaging both functions
into a single object to be exported.

Hints
You can find the relevant formulae on Wikipedia.

Try to find by yourself on the Internet how to round a number to 1 decimal place in JavaScript. 
If you struggle, have a look here. https://stackoverflow.com/q/7342957/5433628

https://stackoverflow.com/questions/7342957/how-do-you-round-to-1-decimal-place-in-javascript
*/

/* Fahrenheit to Celsius. (F - 32) x 5/9.
Celsius to Fahrenheit. C x 9/5 + 32.

*/

let fahrenheit = 64;
console.log(`${fahrenheit} is fahrenheit.`);
let celsius = 0;
let parenthesisPart = (fahrenheit - 32);
console.log(parenthesisPart);
const fractionPart = (5 / 9);
console.log(fractionPart);
// C = parenthesisPart * fractionPart. then round down the C to 1 decimal place.

celsius = parenthesisPart * fractionPart;
console.log(`${celsius} is celsius.`);

let rounded = Math.round(celsius * 10) / 10;
console.log(`${rounded} celsius is at 1 decimal point.`);
console.log(typeof rounded);




