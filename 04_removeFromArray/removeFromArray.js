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
console.log(numbers); // displays the entire array
let length = numbers.length;
console.log(`array has ${length} items`);
let itemToRemove = 3; // this is what you want to know the index of
console.log(`item ${itemToRemove} will be removed`);
let index = numbers.indexOf(itemToRemove); // use the index number to remove it from the array 
// using a splice or slice or a similar method
console.log(`index number ${index} will be removed`);

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
    console.log(`array item ${number}`); 
} /* for the last argument which is the one to be removed, do a test on each item to see if it 
matches the one to be removed and use the pop() method? maybe pop is not good b/c it only removes
the last item?
// removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]

*/

function toMatch(number){ 
    return number === 3
}
const match = numbers.filter(toMatch); // using filter() method while looping to only do an action on 
// the item that matches. the filter method calls the toMatch function and returns the item that 
// has a value of 3
console.log(match);

// if the item equals the thing to remove from removeFromArray(array name, thing to remove), then 
// show a new array with all the items minus that one that was removed
// the first parameter in removeFromArray will be the const numbers. this way it gets the entire array
// the second parameter you will store in a variable that way the user can try different things 
// to remove. see below for an example.


