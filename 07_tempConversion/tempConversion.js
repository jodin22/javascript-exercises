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

// The below part is for Fahrenheit to Celsius.
// Fahrenheit to Celsius. (F - 32) x 5/9.

function ftoc(fahrenheitIn) {
// let fahrenheitIn = -100;
  console.log(`${fahrenheitIn} is fahrenheit.`);
  let celsiusOut = 0;
  let parenthesisPart = (fahrenheitIn - 32);
  console.log(`The parenthesis part ${parenthesisPart}`);
  const fractionPartFahrenheit = (5 / 9);
  console.log(`The fraction part ${fractionPartFahrenheit}`);
// C = parenthesisPart * fractionPart. then round the C to 1 decimal place.

  celsiusOut = parenthesisPart * fractionPartFahrenheit;
  console.log(`${celsiusOut} is celsius before rounding.`);

  let roundedToDecimal = Math.round(celsiusOut * 10) / 10;
  let roundedToInteger = Math.round(celsiusOut);
  console.log(`${roundedToInteger} celsius rounded to the integer.`);
  console.log(`Celsius integer is ${typeof roundedToInteger}`);
  console.log(`${roundedToDecimal} celsius rounded to 1 decimal.`);
  console.log(`Celsius rounded is ${typeof roundedToDecimal}`);
}

ftoc(-74.3);

// The below is for Celsius to Fahrenheit. 
// Celsius to Fahrenheit. C x 9/5 + 32.

function ctof(celsiusIn) {
// let celsiusIn = -10;
  console.log(`${celsiusIn} is celsius.`);
  let fahrenheitOut = 0;
  const fractionPartCelsius = (9 / 5);
  console.log(`The fraction part ${fractionPartCelsius}`);
  fahrenheitOut = celsiusIn * fractionPartCelsius + 32;
  console.log(`${fahrenheitOut} is fahrenheit before rounding.`);

  let roundFahrenheitToDecimal = Math.round(fahrenheitOut * 10) / 10;
  let roundFahrenheitToInteger = Math.round(fahrenheitOut);
  console.log(`${roundFahrenheitToInteger} fahrenheit rounded to integer.`);
  console.log(`${roundFahrenheitToDecimal} fahrenheit rounded to decimal.`);
}

ctof(82.9);

/*  
The below is an explanation of how rounding works.

Math.round will round any number to the nearest integer. It will not round to decimals. Ex's are below
with 100.5555, 100.6666, 100.4444, 100.3333 etc. When Math.round( ) is used, then the ex's 
below will change from 100.5555 to 101. 100.6666 to 101. And 100.4444 to 100. And 100.3333 to 100.
B/c it is only looking for integers, it will look at the next number over which is the first decimal 
and if that decimal is 5 or higher, then it rounds the integer up. If that decimal is 4 or lower, then
it will not round up but keep the same integer. 

To round to decimals, you first decide how many decimal places you want. The ex's below, you want 
to round to the thousandths place which is 3 decimals. B/c it is the thousandths, you would multiply 
the number by 1000. For ex, 100.5555 * 1000 is 100555.5. With Math.round, it will then see that the 
decimal is .5 which means it will round up the integer to become 100556. But since you want 3 decimals 
and not an integer, you then divide it by the thousandths. So the 100556 / 1000 is 100.556. 
The mulitplying by 1000 and then dividing by 1000 will work if you want to round to other decimals. 
For ex, if you want to round to 1 decimal, then you would multiply by 10, then divide by 10. Same for 
2 decimals, you mulitply by 100, then divide by 100. 

*/

let testNumber = 100.5555;
let testNumber2 = 100.6666;
let testNumber3 = 100.7777;
let testNumber4 = 100.4444;
let testNumber5 = 100.3333;
let testNumber6 = 100.2222;

let roundTestNumber = Math.round(testNumber * 1000) / 1000;
console.log(`${testNumber} before rounding.`);
console.log(`${roundTestNumber} rounds up to n decimals.`);
let roundTestNumber2 = Math.round(testNumber2 * 1000) / 1000;
console.log(`${testNumber2} before rounding.`);
console.log(`${roundTestNumber2} rounds up to n decimals.`);
let roundTestNumber3 = Math.round(testNumber3 * 1000) / 1000;
console.log(`${testNumber3} before rounding.`);
console.log(`${roundTestNumber3} rounds up to n decimals.`);
let roundTestNumber4 = Math.round(testNumber4 * 1000) / 1000;
console.log(`${testNumber4} before rounding.`);
console.log(`${roundTestNumber4} rounds down to n decimals.`);
let roundTestNumber5 = Math.round(testNumber5 * 1000) / 1000;
console.log(`${testNumber5} before rounding.`);
console.log(`${roundTestNumber5} rounds down to n decimals.`);
let roundTestNumber6 = Math.round(testNumber6 * 1000) / 1000;
console.log(`${testNumber6} before rounding.`);
console.log(`${roundTestNumber6} rounds down to n decimals.`);

let roundTestNumberInteger = Math.round(testNumber);
console.log(`${testNumber} before rounding.`);
console.log(`${roundTestNumberInteger} rounds to integer.`);
let roundTestNumberInteger2 = Math.round(testNumber2);
console.log(`${testNumber2} before rounding.`);
console.log(`${roundTestNumberInteger2} rounds to integer.`);
let roundTestNumberInteger3 = Math.round(testNumber3);
console.log(`${testNumber3} before rounding.`);
console.log(`${roundTestNumberInteger3} rounds to integer.`);
let roundTestNumberInteger4 = Math.round(testNumber4);
console.log(`${testNumber4} before rounding.`);
console.log(`${roundTestNumberInteger4} rounds to integer.`);
let roundTestNumberInteger5 = Math.round(testNumber5);
console.log(`${testNumber5} before rounding.`);
console.log(`${roundTestNumberInteger5} rounds to integer.`);
let roundTestNumberInteger6 = Math.round(testNumber6);
console.log(`${testNumber6} before rounding.`);
console.log(`${roundTestNumberInteger6} rounds to integer.`);










