/*
const fibonacci = function() {

};
*/


// create a series of numbers like this ex 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144..... 
// each number ( Fibonacci number ) is the sum of the two preceding numbers. 

// fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6) // returns 8

/* 
are 1st and 2nd always the same number?
3rd = 1st + 2nd 
4th = 2nd + 3rd
5th = 3rd + 4th
6th = 4th + 5th
7th = 5th + 6th
8th = 6th + 7th
9th = 7th + 8th
10th = 8th + 9th
11th = 9th + 10th
and so on...

*/


// add the 0 and 1 index to get a new number. this new number becomes index 2 and put it in the array using push.
// now you have [1, 1, 2]
// now add index 1 and 2 to get index 3. it will look like this after the push. [1, 1, 2, 3]
// now add index 2 and index 3 to get index 4. it will look like this after the push [1, 1, 2, 3, 5]
// keep going until you stop at a much later iteration, say 50?


const fibonacci = function() {

};

const startFibArray = [1, 1];
const growFibArray = []; // put the 1, 1, here. then the results of each addition will be pushed to here as well. so it will 
// then become 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597 etc

let initialIndexValue = 1;
let nextIndexValue = 1;
let newIndexValue = 0; 
const fillFibArray = [];
/*  
// after the 0 part, the below is for any other integer
  const integerFillArray = [];  // an empty array which will be filled in by the loop
  console.log(`starting array: ${integerFillArray}`);
    for(let i = 1; i <= number; i++) {  // the counter will go from 1 to n. where n is the actual number so it counts up by 1
      console.log(`iteration ${i}: adds ${i} to the array`); // shows each integer count
      integerFillArray.push(i);  // at each integer, it pushes that value into the array so for 5, it will push in 1, 2, 3, 4, 5
    };
  console.log(`ending array: ${integerFillArray}`);  // shows the array with the integers. now that it is in an array, you can
  // use reduce to multiply them all together (see line 153 for the previous multiply function). this may work for most cases, but
  // you will need a separate part of 0 bc 0 factorial is 1.

*/
for (let i = 1; i <= 10; i++) { // keeps track of rounds. need some var declarations before the loop and inside the loop increase
    // each inital, next and new by i or in reference to the previous
   /* round 1
let initialIndex = 1;
let nextIndex = 1; this becomes initialIndex for next round 
let newIndex = 2; // this becomes nextIndex for next round
*/
    console.log(`round ${i}: pushes ${initialIndexValue} and ${nextIndexValue} to the array`);
    fillFibArray.push(initialIndexValue, nextIndexValue); // look at line 30 for more hints

    // right now this is adding the same 1 over and over. need to adjust it so it increases each time instead of a constant 1.
    // look at your palindromes loop for ex how each one increased by 1 and the other side decreased by 1. then it increased by 
    // 2 and then decreased by 2. then increased by 3 and also decreased by 3 and so on. also look above at line 30. that seems
    // like a good idea to use for pushing new values into the array
};
console.log({fillFibArray});
/* round 2 
initialIndex = 1
nextIndex = 2; this becomes initialIndex for next round
newIndex = 3; this becomes nextIndex for next round
*/

/* round 3
initialIndex = 2;
nextIndex = 3; this becomes initialIndex for next round 
newIndex = 5; this becomes nextIndex for next round 

*/

/*  
initialIndex = 3
nextIndex = 5; this becomes initialIndex for next round 
newIndex = 8; this becomes nextIndex for next round  

*/


// Do not edit below this line. uncomment the module line when you run the jest test
// module.exports = fibonacci;
