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

const books = [ //this array has 2 elements. each element is an object. before Fundamentals part 5, the arrays you used had each 
// element as a string or a number.
  { title: "Book",
    author: "Name",
  },
  { 
    title: "Book2",
    author: "Name2",
  },
  {
    title: "Book3",
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
  console.log(`${element} is at index[${index}]`); // the result is [object Object] is at 0, then [object Object] is at 1, 
  // then [object Object] is at 2 etc. so it does show each index number for the element. but instead of showing the element's
  // value of title and author, it just shows [object Object]. is it bc each element is an object instead of a string or array?
  // maybe referencing by index is not very useful when using objects that are inside an array?
});

const getTheBookTitleIndexExperiment = books.map((element, index) => {
  console.log(`${element["title"][index]}`);
  console.log(`${element.author[index]}`);
  console.log(`${element}${index}`); // try putting this line in a const then refer to the const's title or author. look 
  // at the mousepad link and notes for showing object Object as a string or the properties of that object
});

// can use the below to do a loop instead of map to get values by index. when i tried map with index by doing 
// something like element.index or element[index], i kept getting undefined for index. however when i tried element.title[index],
// it would get the title but show index0 of the title's string and then the next iteration went to the next element and got 
// the title's string but instead of index 0, it got index 1. 

const getTheBookTitle4 = books.at(0).title;
const getTheBookTitle5 = books.at(0).author;
const getTheBookTitle6 = books.at(1).title;
const getTheBookTitle7 = books.at(1).author;
const getTheBookTitle8 = books.at(2).author;
const getTheBookTitle9 = books.at(2).author;
console.log(`using .at(indexNum) ${getTheBookTitle4} is written by ${getTheBookTitle5}`);
console.log(`using .at(indexNum) ${getTheBookTitle6} is written by ${getTheBookTitle7}`);
console.log(`using .at(indexNum) ${getTheBookTitle8} is written by ${getTheBookTitle9}`);


// Do not edit below this line
module.exports = getTheTitles;
