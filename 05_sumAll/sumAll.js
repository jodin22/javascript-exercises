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

/* the two loops for summing run for any two numbers regardless of the first number > second number.
(1, 10) or (10,1) works. *checked*

now i need to make sure they only run for positive integers and not for negatives and arrays. then
you need to put this in a function that will receive 2 numbers to calculate. 
ex sumAll(number1, number2)

1) when the first number is an integer and the second number is a string, the sum works. (1, '10') 
*checked*

2) ('10', 1) becomes (1, '10') and still works. this sees '10' as larger than 1 even though they are 
comparing strings vs numbers. the '10' becomes the new second number and the 1 is the new first number.
and the sum will still work. 

3) ('1', 10) this will not work. this keeps '1' as the first number and 10 as the second number. it 
sees '1' as less than 10 even though they are comparing strings vs numbers.  
the sum looks like this 012345678910. it is a concatenation. 

as long as the first number is an actual number and not a string, the sum will work.
*checked*

4) ('1', '10') doesn't work. it concatenates instead of sums. it looks like this 012345678910
*checked*

5) ('10', '1') becomes ('1', '10'). doesn't work.  although they are strings, it does a comparison 
as if they are numbers and puts them in the right order of smaller as the first number and bigger 
as the second number. but b/c the new first number is a string, it concatenates instead of sums
012345678910



*/

let firstNum = 10;
if(Number.isInteger(firstNum) && (firstNum >= 0) && (typeof firstNum !== 'string' )) {
    console.log(`First integer: ${firstNum}`);
    console.log(typeof firstNum);
    // pass the firstNum value to the loops below
} else {
    console.log(`First number ${firstNum} is not a positive integer`);
    console.log(typeof firstNum);
    // don't pass the firstNum string to the loops below
}
let secondNum = 1; // array [90, 1] that isn't in const, it shows as 90, 1. we don't
// want arrays, we only want positive integers
if(Number.isInteger(secondNum) && (secondNum >= 0) && (typeof secondNum !== 'string' )) {
    console.log(`Second integer: ${secondNum}`); 
    console.log(typeof secondNum);
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


if (firstNum > secondNum) { // when the firstNum > secondNum, it will make new vars for the first and
    // second Num and then do a loop with the new var
    console.log(`First number: ${firstNum}`);
    console.log(`Second number: ${secondNum}`);
    let newFirstNum = secondNum;
    let newSecondNum = firstNum;
    console.log(`New first number: ${newFirstNum}`);
    console.log(`New second number: ${newSecondNum}`);

    for(let i = newFirstNum; i <= newSecondNum; i++) {  //
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
    console.log(`First number: ${firstNum}`);
    console.log(`Second number: ${secondNum}`);

    for(let i = firstNum; i <= secondNum; i++) {  // this loop runs when the firstNum < secondNum. need 
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
}

/* 
for(let i = newFirstNum; i <= newSecondNum; i++) {  // this loop runs when the firstNum < secondNum.
// need another way to loop when firstNum > secondNum
    console.log(`The count is: ${i}`);
    sum += i;
    console.log(`The sum is: ${sum}`);

0 = 0+1 ...1
1 = 1+2 ...2
3 = 3+3 ...3
6 = 6+4 ...4
10


}
*/




