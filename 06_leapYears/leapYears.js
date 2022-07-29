/* 
const leapYears = function() {

};

// Do not edit below this line
module.exports = leapYears;
*/

// LEAVE THE ABOVE ALONE. YOUR VERSION OF JEST WILL NOT WORK SO YOU CAN'T DO ANY TEST DRIVEN DEVELOPMENT.
// WHEN YOU GET A NEW COMPUTER, THEN MAKE SURE THE VM, VISUAL STUDIO, NODE, JEST ETC IS THE ONE YOU 
// ARE SUPPOSED TO BE USING. RIGHT NOW, YOUR 32 BIT MACHINE CAN'T USE THE LATER VERSIONS.

/*  
Create a function that determines whether or not a given year is a leap year. Leap years are 
determined by the following rules:

Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100
are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, 
which were in fact leap years). (Yes, it's all pretty confusing)

leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false

Hints
use an if statement and && to make sure all the conditions are met properly

*/

/*
first, check if the number is divisible by 4 with no remainder. i think this is using the modulus 
which is the %.   

*/

let year = 2504;
console.log(`The year is: ${year}`);
let remainder = 0;
// let possibleLeapYear;
if (Number.isInteger(year) && (year >= 0) && (year % 4 == 0)) { 
    console.log(`${year} is divisble by 4 with no remainders. It is a possible leap year.`);
    /* 
    possibleLeapYear = year;
    if ((possibleLeapYear % 100 == 0) && (possibleLeapYear % 400 == 0)) {
        console.log(`${possibleLeapYear} is indeed a leap year.`);
    } else {
        console.log(`${possibleLeapYear} is not a leap year.`);
    }
    */

/* 
next, check if the number is divisible by 100. those are not leap years but if they are also 
divisible by 400, then it is indeed a leap year. the ex is 1600 and 2000.
*/
    if (year % 100 == 0) {
        console.log(`${year} is a century year and might not be a possible leap year.`);
    } if (year % 400 == 0) {
        console.log(`${year} is a century year and indeed a leap year.`);
    } else {
        console.log(`${year} is a century year and is not a leap year. It is not divisble by 400???`);
    }
} else {
    console.log(`${year} is not divisible by 4 and is not a possible leap year.`);
    remainder = year % 4; // this divides by 4. any remainder will be assigned to the var remainder.
    console.log(`Because the remainder is ${remainder}.`);
}

