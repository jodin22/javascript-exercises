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

let firstNum = 1;  
let secondNum = 123; 
let sum = 0;

for(let i = firstNum; i <= secondNum; i++) {  
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






