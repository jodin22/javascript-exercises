/* 
const sumAll = function() {

};

// Do not edit below this line
module.exports = sumAll;
*/

/* DO NOT DELETE THE ABOVE. RIGHT NOW YOU CAN'T USE JEST TO TEST YOUR CODE. SKIP THE JEST 
PART AND TEST THINGS MANUALLY.  */

/* 
Implement a function that takes 2 integers and returns the sum of every number 
between(and including) them:

sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10

Hints
Think about how you would do this on pen and paper and then how you might translate that process
into code:

make sure you pay attention to the function parameters
create a variable to hold the final sum
loop through the given numbers (link)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
on each iteration add the number to the sum
return the sum after finishing the loop

*/

/* *checked* the two loops for summing run for any two numbers regardless of the first number > second
number. (1, 8) or (8,1) works. 

now i need to make sure they only run for positive integers and not for negatives, strings and arrays.
then you need to put this in a function that will receive 2 numbers to calculate. 
ex sumAll(number1, number2)

so far seems to work. now need to put it in a function and pass it two numbers
*/

// let firstNum = 8; before adding the function, the firstNum and secondNum were at the top of each
// of their respective blocks around lines 48 and 60
// let secondNum = 88; // array [90, 1] that isn't in const, it shows as 90, 1. we don't
// want arrays, we only want positive integers

function sumAll(firstNum, secondNum) {    
let toSendFirstNum;
if(Number.isInteger(firstNum) && (firstNum >= 0) && (typeof firstNum !== 'string' )) {
    console.log(`First integer: ${firstNum}`);
    console.log(typeof firstNum);
    toSendFirstNum = firstNum;
    // pass the firstNum value to the loops below
} else {
    console.log(`First number ${firstNum} is not a positive integer`);
    console.log(typeof firstNum);
    // don't pass the firstNum string to the loops below
}

let toSendSecondNum;
if(Number.isInteger(secondNum) && (secondNum >= 0) && (typeof secondNum !== 'string' )) {
    console.log(`Second integer: ${secondNum}`); 
    console.log(typeof secondNum);
    toSendSecondNum = secondNum;
    // pass the secondNum value to the loops below
     
} else {
    console.log(`Second number ${secondNum} is not a positive integer`);
    console.log(typeof secondNum); 
    // don't pass the secondNum string to the loops below
}
let sum = 0;

/* 
sumAll(1, 4) works. it should also work when you do sumAll(4, 1). which means you can't use the
first number as the first count in your loop. you have to use the lower number as the initial count.

if firstNum > secondNum then make new var's and switch places of the firstNum and secondNum and put
the new vars as the starting and ending count in your loop

*/


if (toSendFirstNum > toSendSecondNum) { // when the firstNum > secondNum, it will make new vars for the first and
    // second Num and then do a loop with the new var
    console.log(`First number: ${toSendFirstNum}`);
    console.log(`Second number: ${toSendSecondNum}`);
    let newFirstNum = toSendSecondNum;
    let newSecondNum = toSendFirstNum;
    console.log(`New first number: ${newFirstNum}`);
    console.log(`New second number: ${newSecondNum}`);

    for(let i = newFirstNum; i <= newSecondNum; i++) { 
        console.log(`The count is: ${i}`);
        sum += i;
        console.log(`The sum is: ${sum}`);
    /*
    0 = 0+1 ...1
    1 = 1+2 ...2
    3 = 3+3 ...3
    6 = 6+4 ...4
    10
        
    */
    }
} else if (toSendFirstNum <= toSendSecondNum) {
    console.log(`First number: ${toSendFirstNum}`);
    console.log(`Second number: ${toSendSecondNum}`);

    for(let i = toSendFirstNum; i <= toSendSecondNum; i++) {  // this loop runs when the firstNum < secondNum. need 
        // another way to loop when firstNum > secondNum
        console.log(`The count is: ${i}`);
        sum += i;
        console.log(`The sum is: ${sum}`);
    /*
    0 = 0+1 ...1
    1 = 1+2 ...2
    3 = 3+3 ...3
    6 = 6+4 ...4
    10
    
    */
    }
} else {
    console.log(`ERROR. Both numbers must be positive integers for the sum to work.`);
}

}

sumAll(88, 8);




