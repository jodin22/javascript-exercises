/*
const removeFromArray = function() {

};

// Do not edit below this line
module.exports = removeFromArray;
*/

// DO NOT EDIT ABOVE THIS LINE. ABOVE IS THE ORIGINAL HW BEGINNING. SHOW YOUR WORK BELOW.

/*  
Implement a function that takes an array and some other arguments then removes the other 
arguments from that array:

removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]

hints: 
The first test on this one is fairly easy, but there are a few things to think about (or google) 
here for the later tests:

how to remove a single element from an array
how to deal with multiple optional arguments in a javascript function
Check this link: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
Scroll down to the bit about Array.from or the spread operator. 
Or this link:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

*/

// removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
const numbers = [1, 2, 3, 4];
let length = numbers.length;
console.log(`array has ${length} items`);

// use numbers[0] numbers[1] etc to access each item in the array. also .length-1 is how you get
// the last item
let someItem = numbers[0];
console.log(`first item is ${someItem}`); // shows first item
someItem = numbers[2];
console.log(`third item is ${someItem}`); // shows third item
someItem = numbers[length-1]; // for the last item
console.log(`last item is ${someItem}`);

/* line 32 has a function to receive all the array items as the first argument. the last argument is
a 3 which is the item to be removed. the result will be 1, 2, 4.

*/

for(const number of numbers) { // next step is to use a loop in combo with an array method
    console.log(number); 
} /* for the last argument which is the one to be removed, do a test on each item to see if it 
matches the one to be removed and use the pop() method? maybe pop is not good b/c it only removes
the last item?
*/
