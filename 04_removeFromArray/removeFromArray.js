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
const numbers = [1, 2, 3, 4, 'hello', 'bye', 'later', 5, 6];
console.log(numbers); // displays the entire array
let length = numbers.length;
console.log(`array has ${length} items`);
// parseInt works for removing integers but not strings 
// with no parseInt, it works for removing strings but not integers
let userEntryInt = prompt('Enter the item to remove', 3); // this is what you want to know the index of
// console.log(`item ${userEntryInt} will be removed`); // when string, it shows NaN if you put parseInt
// at the prompt


// let index = numbers.indexOf(userEntryInt); // use the index number to remove it from the array 
// let indexString = numbers.indexOf(userEntryString); 
// using a splice or slice or a similar method. see below on how the splice works
// console.log(`index number ${index} will be removed`); // when no parseInt is used a number shows index 
//of -1. while a string shows the correct index. when parseInt is used, a number shows the correct index
// but a string shows -1 
// console.log(`index number ${indexString} will be removed`); // if -1 shows, then they entered an item 
// not in the array and it will remove the -1 index which is the last item.

/*
if (index >= 0) { // for NaN, it is -1 and won't remove anything
    numbers.splice(index, 1); // you need the >=0 or else the -1 index is used to remove the last 
    // item and you don't want that. 
    console.log(`resulting array ${numbers}`);
}
   /* else if (indexString >= 0) {
    numbers.splice(indexString, 1);
    console.log(`resulting array ${numbers}`);
} */ /*
    else {
    console.log(`${userEntryInt} doesn't exist`);
    console.log(`resulting array unchanged: ${numbers}`);
    } */

/* numbers.splice(index, 1);  // line 39 is the index number which is the start. 1 is 1 item from 
// the start. it will only remove the specified index number. 
console.log(`resulting array ${numbers}`); // remaining items */

/*
// use numbers[0] numbers[1] etc to access each item in the array. also .length-1 is how you get
// the last item
let someItem = numbers[0];
console.log(`first item is ${someItem}`); // shows first item
someItem = numbers[2];
console.log(`third item is ${someItem}`); // shows third item
someItem = numbers[length-1]; // for the last item
console.log(`last item is ${someItem}`);
*/

/* line 32 has a function to receive all the array items as the first argument. the last argument is
a 3 which is the item to be removed. the result will be 1, 2, 4.

*/

let index;
for(const number of numbers) { // next step is to use a loop in combo with an array method
    index = numbers.indexOf(number);
    console.log(`array index ${index}`);
    console.log(`array item ${number}`);
} /* for the last argument which is the one to be removed, do a test on each item to see if it 
matches the one to be removed and use the pop() method? maybe pop is not good b/c it only removes
the last item?
// removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]

*/

/*
function toMatch(number){ 
    // return number === 3 // similar to saying if number === 3 then return that number
    // if (number === 'hello') {
    return number == userEntryInt;
    // }
}
const match = numbers.filter(toMatch); // using filter() method while looping to only do an action on 
// the item that matches. the filter method calls the toMatch function and returns the item that 
// has a value of 3
console.log(`array loop filter item ${match}`);
*/

// if the item equals the thing to remove from removeFromArray(array name, thing to remove), then 
// show a new array with all the items minus that one that was removed
// the first parameter in removeFromArray will be the const numbers. this way it gets the entire array
// the second parameter you will store in a variable that way the user can try different things 
// to remove. see below for an example.

const months = ['Jan', 'Mar', 'Apr', 'Jun'];
console.log(`orginal array ${months}`);
months.splice(1, 0, 'Feb'); // starts at index 1 which is Mar. the 0 is remove no items.
// Feb is added from the start of index 1.
console.log(`first splice result is add: ${months}`); // Jan, Feb, Mar, Apr, Jun
months.splice(4, 1, 'May'); // starts at index 4 which is Jun. 1 is to remove 1 item from the start
// index 4. May is added from the start of index 4
console.log(`second splice result is replace: ${months}`); // Jan, Feb, Mar, Apr, May
months.splice(2, 1); 
console.log(`third splice result is remove: ${months}`); // Jan, Feb, Apr, May

/*  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
The splice() method changes the contents of an array by removing or replacing existing elements
and/or adding new elements in place. 

splice(start, deleteCount, item1, item2, etc). deleteCount and item1, item2 etc are optional

start is the index number to start at. if start is a negative number then it starts from the end 
of the array length. ex if splice(-1, 1) for an array of Jan, Feb, Mar, Apr, May. then it will 
start at the end which is May and remove 1 item from the start which is May. the result will be 
an array of Jan, Feb, Mar, Apr.

deleteCount is an integer indicating the number of items 
to remove from start. item1, item2, etc are items to add to the array beginning from start.

*/

