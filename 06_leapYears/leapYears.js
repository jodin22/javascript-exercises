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

function leapYears(year) {
// let year = 700; this was for testing. you had to manually test b/c jest doesn't work with the 
// version of node you are using.
    console.log(`The year is: ${year}`);
    let remainder = 0;
// Number.isInteger(year). this is not necessary since years will be always an integer. 

    if ((year % 4 == 0) && (year % 100 == 0) && (year % 400 == 0)) {  
        console.log(`${year} is divisble by 4 and 100 and 400.`);
        console.log(`${year} is a century leap year.`);
    } else if ((year > 400) && (year % 4 == 0) && (year % 100 !== 0) && (year % 400 !== 0)) { 
        console.log(`${year} is a regular leap year because it is divisible by 4.`);
        remainder = year % 4;
        console.log(`When divided by 4, the remainder is ${remainder}.`);
/* 
the first if tests for century leap years. the second if (else if) tests for regular leap years. 
the year has to be greater than 400 b/c those before 400 are never going to be divisble by 400. 
the last else is when all the above fails and those are not leap years. but the current console is 
showing they are not divisible by 4 but some are divisible by 4 so you need to edit this part to 
show a more accurate message. any year divisible by 4 is not sufficient to be a leap year. that's why
you have the if and else if to find the years that are leap years of century years and non century 
years. 

*/
    } else {
        console.log(`${year} is not a leap year.`); 
        console.log(`${year} may be divisible by 4, but it must also meet the 100 and 400 rule.`);
        remainder = year % 4;
        console.log(`When divided by 4, the remainder is ${remainder}.`)
    }

}

leapYears(700);