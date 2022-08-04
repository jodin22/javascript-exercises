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
console.log(`The parenthesis part ${parenthesisPart}`);
const fractionPart = (5 / 9);
console.log(`The fraction part ${fractionPart}`);
// C = parenthesisPart * fractionPart. then round the C to 1 decimal place.

celsius = parenthesisPart * fractionPart;
console.log(`${celsius} is celsius before rounding.`);

let roundedToDecimal = Math.round(celsius * 10) / 10;
let roundedToInteger = Math.round(celsius);
console.log(`${roundedToInteger} celsius rounded to the integer.`);
console.log(`Celsius integer is ${typeof roundedToInteger}`);
console.log(`${roundedToDecimal} celsius rounded to 1 decimal.`);
console.log(`Celsius rounded is ${typeof roundedToDecimal}`);

let testNumber = 100.455;
let testNumber2 = 100.466;
let testNumber3 = 100.477;
let testNumber4 = 100.444;
let testNumber5 = 100.433;
let testNumber6 = 100.422;

let roundTestNumber = Math.round(testNumber * 100) / 100;
console.log(`${testNumber} before rounding.`);
console.log(`${roundTestNumber} rounds up.`);
let roundTestNumber2 = Math.round(testNumber2 * 100) / 100;
console.log(`${testNumber2} before rounding.`);
console.log(`${roundTestNumber2} rounds up.`);
let roundTestNumber3 = Math.round(testNumber3 * 100) / 100;
console.log(`${testNumber3} before rounding.`);
console.log(`${roundTestNumber3} rounds up.`);
let roundTestNumber4 = Math.round(testNumber4 * 100) / 100;
console.log(`${testNumber4} before rounding.`);
console.log(`${roundTestNumber4} rounds down.`);
let roundTestNumber5 = Math.round(testNumber5 * 100) / 100;
console.log(`${testNumber5} before rounding.`);
console.log(`${roundTestNumber5} rounds down.`);
let roundTestNumber6 = Math.round(testNumber6 * 100) / 100;
console.log(`${testNumber6} before rounding.`);
console.log(`${roundTestNumber6} rounds down.`);

/*  

*/






