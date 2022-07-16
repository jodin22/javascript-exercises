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
const numbers = [1, 2, 3, 4, 'hello', 'bye', '5', '6', 7];
console.log(numbers); // displays the entire array
let length = numbers.length;
console.log(`array has ${length} items`);
// parseInt works for removing integers but not strings 
// with no parseInt, it works for removing strings but not integers
// let userEntry = parseInt(prompt('Enter the item to remove', 3));
let userEntry = prompt('Enter the item to remove', 3); // this is what you want to know the index of
console.log(`array item ${userEntry} will be removed`); // when string, it shows NaN if you put parseInt
// at the prompt

/* line 32 has a function to receive all the array items as the first argument. the last argument is
a 3 which is the item to be removed. the result will be 1, 2, 4.

*/

let index;  // these lines loop through the array and print each index and item on a separate line.
for(const number of numbers) { // next step is to use a loop in combo with an array method
    index = numbers.indexOf(number);
    console.log(`array index ${index}`);
    console.log(`array item ${number}`)
}

// these lines loop through the array using the map method. the map method is calling a function which 
// receives each item of the array as misc and returns the index number of each misc into a new array
function getIndex(misc) {
    return numbers.indexOf(misc); // for the numbers.map(getIndex) the parameter misc can be named  
    // anything. notice lines 73 to 85 for the numbers.findIndex(userEntryIndex), there you used 
    // parameter element but it could be misc or number or anything
    
}
const indexNumbers = numbers.map(getIndex);
console.log(indexNumbers);

// these lines loop through the array using the findIndex method. the findIndex method is calling a 
// function which receives each item of the array as element and returns the item of the array aka 
// element. but it only returns that element's index number when it finds a match of the user's entry.
// when you had parseInt in the prompt, it only worked on numbers and not on strings. when you removed
// parseInt, then it only worked on strings and not numbers

function userEntryIndex(element) {
    return (element == userEntry); // use == instead of ===. the === is strict equality which 
    // means the value and type have to be the same. so '3' as a string is not the same as 3 as 
    // a number. but == will work for '3' as a string compared to 3 as the number.
    // a reminder on the findIndex array method, the parameter passed to the function is element
    // but it can be named anything. just like the map array method on line 58 to 64, there the 
    // parameter passed is called misc but you can name it anything. the main idea for array methods
    // like map or findIndex is when you put a function inside the method, then the function will
    // need to receive each array item. that array item can be named anything inside that particular
    // function.
}

const indexToRemove = numbers.findIndex(userEntryIndex);
console.log(`array index to remove ${indexToRemove}`);
console.log(`array item to remove ${userEntry}`);

// using a splice or slice or a similar method. see below on how the splice works

/* 
numbers.splice(index, 1);  // index is the start. 1 is 1 item from the start. it will only remove 
the specified index number
console.log(`resulting array ${numbers}`); // remaining items 

*/

// the lines below were practicing the splice method

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

