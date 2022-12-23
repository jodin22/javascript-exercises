/*
const fibonacci = function() {

};
*/

// create a series of numbers like this ex 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765,
// 10946, 17711, 28657 
// each number ( Fibonacci number ) is the sum of the two preceding numbers. 

// fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6) // returns 8

/* 
are 1st and 2nd always the same number? you don't need it to be the same. the loop at line 55 will take any 2 numbers and
create a fibonacci sequence. ex, it can be 0, 1 or 1, 11 or 3, 8. it doesn't matter. the loop will calculate the sequence, but 
you must provide the first two numbers for the const startFibArray.
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

const startFibArray = [1, 1]; // this will hold the first two numbers. use split to put into the array that will hold the 
// fibonacci numbers. split will not work bc that is for strings. use pop instead so the 0 index and 1 index will be put into 
// the new array fillFibArray. pop will not work bc that only takes out the last element. use slice instead.

const fillFibArray = startFibArray.slice(); // since no beginning and no end params are given, it starts at index 0 and goes 
// to the end.
console.log({fillFibArray}); // fillFibArray will be used to hold the results of the adding of the numbers to calculate the 
// fibonacci sequence. use a loop using the approach at line 46

// i = 0. i is index 0. then add i + 1 to get index 0 + 1 which becomes index 1. so the end of round 1 you added index 0 + 
// index 1 which is a new value and that will be put into index 2. and the i++ happens so the next round is 

// i = 1. now i is index 1. then add i + 1 to get index 1 + 1 which becomes index 2. so the end of round 2 you added index 1 + 
// index 2 which is a new value and that will be put into index 3. and the i++ happens so the next round is

// i = 2. now i is index 2. then add i + 1 to get index 2 + 1 which become index 3. so the end of round 3 you added index 2 + 
// index 3 which is a new value and that will be put into index 4. and the i++ happens so the next round is...

for (let i = 0; i <= 20; i++) { // the i is not only the counter but also used to get each index number.
  const nextIndexValue = fillFibArray[i] + fillFibArray[i+1] // 0 is i. 1 is i+1. since this ex is only looking at the current
  // index number and the next one up, the i and i+1 will work. and after each round, the i gets increased by 1 so then it 
  // will be 1 and 1+1. then after the increase of 1, then it will be 2 and 2+1 and so on. this identifies each index you 
  // want to add together and then push the result to the last place in the fillFibArray. this array will keep filling in with 
  // the rest of the fibonacci sequence.
  console.log(`index ${i}: ${fillFibArray[i]} plus index ${i+1}: ${fillFibArray[i+1]} = ${nextIndexValue}`);
  fillFibArray.push(nextIndexValue);
  console.log(`${nextIndexValue} is pushed to the new array`);
  console.log({fillFibArray});
};

// startFibArray will hold the first two numbers. you can enter any numbers and it will calculate the rest of the fibonacci 
// sequence and put it into fillFibArray. bc fillFibArray starts at index 0, you need to make sure the fibonacci(4) starts
// looking at index 0 as 1 instead of 0.

// ex 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657 
// fibonacci(4) will find 3. and fibonacci(6) will find 8. so start index 0 as 1 and count up from there.

// use at(index) instead of findIndex of indexOf bc at(index) only needs the index number. the other two need the element that will
// then give you the index. we are asking for the index first, then return the element. also bc our index count starts at 0, be 
// sure to decrease the count by 1 so it will start as 1, 2, 3, 4, 5 etc instead of 0, 1, 2, 3, 4, 5 etc

let indexToFind = 11;
let indexToFindMinus1 = indexToFind - 1;
let itFound = "";
itFound = fillFibArray.at(indexToFindMinus1);
console.log(`${indexToFind} decreases by 1 to find ${indexToFindMinus1}. it found: ${itFound}`);

const fibonacci = function() {

};

// Do not edit below this line. uncomment the module line when you run the jest test
// module.exports = fibonacci;
