/*
const getTheTitles = function() {

};
*/

// look at ~/repos/JavaScript30/'04 - Array cardio day 1 and '07 - Array cardio day 2.
// these 2 hw's have ex's of an array where each element is an object.
// also look at ~/repos/javascript-exercises/09-palindromes at lines 46 and 108. these sections have good ex's of map where
// you pass both element and index. most of the ex's that they show in the reading and hw usually only pass the element.

/* 
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },

];

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
];

*/

const getTheTitles = function() {

};

const books = [ //this array has 3 elements. each element is an object. before Fundamentals part 5, the arrays you used had each 
// element as a string or a number.
  { title: "Book",  // the first object would be the equivalent of the first element at index 0
    author: "Name",
  },
  { 
    title: "Book2", //  the second object would be the equivalent of the second element at index 1
    author: "Name2",
  },
  {
    title: "Book3", // the third object would be the equivalent of the third element at index 3
    author: "Name3",
  },
];

const getTheBookTitle = books.map(element =>{ // this ex is using dot notation
  console.log(`dot notation: ${element.title} is written by ${element.author}`);
});

const getTheBookTitle2 = books.map((element) =>{ // this ex is using bracket notation
  console.log(`bracket notation: ${element["title"]} is written by ${element["author"]}`);
});


const getTheBookTitle3 = books.map((element, index) => { // this ex is passing both element and index number
  console.log(`bracket notation: ${element} is at index[${index}] ${element["title"]}`); // shows the right item
  console.log(`bracket notation: ${element} is at index[${index}] ${element["author"]} `); // shows the right item
  console.log(`dot notation: ${element} is at index[${index}] ${element.title}`); // shows the right item
  console.log(`dot notation: ${element} is at index[${index}] ${element.author}`); // shows the right item
  console.log(`${element} is at index[${index}]`); // shows [object Object] is at index [0]
  console.log(`index[${index}] points to the element position and shows ${books[index].title}?`); //shows the right item
  console.log(`index[${index}] points to the element position and shows ${[index].title}?`); // shows undefined
});

// i misunderstood how index numbers work with objects in an array. i thought like an array with non-objects, that
// when you reference the index number, that's all was needed to get the element's value. with objects, it seems it is a little 
// different. notice line 67 vs 68. 67 shows books[index].title. this is similar to an array of non-objects. books is the array 
// then [index] is the index number you use to reference the element or item. but what is different is .title. since you are 
// dealing with objects instead of non-objects, you need more info than just the index. for non-objects in an array, as long 
// as you have the index number, you can then get the value of that item/element. with objects in an array, the index is not 
// enough. you have to provide which property you want inside that object.  
// line 68 shows just having the index is not enough and will show undefined. KEEP THIS IN MIND. VERY IMPORTANT.

const getTheBookTitle4 = books.map((element, index, array) => { // ex is passing element, index and the whole array
  console.log(`dot notation: ${element} at index[${index}] is ${array[index].title}`); // shows the right items in each line
  console.log(`dot notation: ${element} at index[${index}] is ${array[index].author}`);
  console.log(`bracket notation: ${element} at index[${index}] is ${array[index]["title"]}`);
  console.log(`bracket notation: ${element} at index[${index}] is ${array[index]["author"]}`);
});

// compare line 61's block vs line 80's block. in line 61's block, array is not a parameter that is passed. so to get 
// array[index]value, you need to reference the array name which is books (see line 67). but when you use all parameters
// of element, index, array, you can just write it like line 80's block. array[index]value and you can use the value 
// in either dot or bracket notation.

const getTheBookTitleExperiment = books.map((element, index) => {
  console.log(`bracket notation: index[${index}] which points to ${element} is ${books[index]["title"]}`);
  console.log(`bracket notation: index[${index}] which points to ${element} is ${books[index]["author"]}`);
});

// the above is another ex of only using element and index. and if you want to find the value by just the index number, then you
// need to write it like this books[index]value. 

// can use the below to do a loop instead of map to get values by index. before using the solution at line 80, when i tried 
// map with index by doing something like element.index or element[index], i kept getting undefined for index (see line 68).
// however when i tried element.title[index], it would get the title but show index0 of the title's string and then the next
// iteration went to the next element and got the title's string but instead of index 0, it got index 1. and each of those 
// index numbers actually was the letter of the string.

const getTheBookTitle5 = books.at(0).title;
const getTheBookTitle6 = books.at(0).author;
const getTheBookTitle7 = books.at(1).title;
const getTheBookTitle8 = books.at(1).author;
const getTheBookTitle9 = books.at(2).author;
const getTheBookTitle10 = books.at(2).author;
console.log(`using .at(indexNum) ${getTheBookTitle5} is written by ${getTheBookTitle6}`);
console.log(`using .at(indexNum) ${getTheBookTitle7} is written by ${getTheBookTitle8}`);
console.log(`using .at(indexNum) ${getTheBookTitle9} is written by ${getTheBookTitle10}`);

// the above block could be used with a loop but it is better to use map and pass element, index AND array. see line 80's block
// for a better way to do this so you can always find any element and even use index to find the first, second, third etc element
// just as you do for non-object arrays.


// Do not edit below this line
// module.exports = getTheTitles; uncomment this when you do the jest tests
