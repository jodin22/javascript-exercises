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

// const getTheTitles = function() { // line 80's block has the main concept for the solution

//};

const booksTest = [ //this array has 3 elements. each element is an object. before Fundamentals part 5, the arrays you used had each 
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

const getTheBookTitle = booksTest.map(element =>{ // this ex is using dot notation
  console.log(`dot notation: ${element.title} is written by ${element.author}`);
});

const getTheBookTitle2 = booksTest.map((element) =>{ // this ex is using bracket notation
  console.log(`bracket notation: ${element["title"]} is written by ${element["author"]}`);
});


const getTheBookTitle3 = booksTest.map((element, index) => { // this ex is passing both element and index number
  console.log(`bracket notation: ${element} is at index[${index}] ${element["title"]}`); // shows the right item
  console.log(`bracket notation: ${element} is at index[${index}] ${element["author"]} `); // shows the right item
  console.log(`dot notation: ${element} is at index[${index}] ${element.title}`); // shows the right item
  console.log(`dot notation: ${element} is at index[${index}] ${element.author}`); // shows the right item
  console.log(`${element} is at index[${index}]`); // shows [object Object] is at index [0]
  console.log(`index[${index}] points to the element position and shows ${booksTest[index].title}?`); //shows the right item
  console.log(`index[${index}] points to the element position and shows ${[index].title}?`); // shows undefined
});

// i misunderstood how index numbers work with objects in an array. i thought like an array with non-objects, that
// when you reference the index number, that's all was needed to get the element's value. with objects, it seems it is a little 
// different. notice line 67 vs 68. 67 shows booksTest[index].title. this is similar to an array of non-objects. booksTest is the array 
// then [index] is the index number you use to reference the element or item. but what is different is .title. since you are 
// dealing with objects instead of non-objects, you need more info than just the index. for non-objects in an array, as long 
// as you have the index number, you can then get the value of that item/element. with objects in an array, the index is not 
// enough. you have to provide which property you want inside that object.  
// line 68 shows just having the index is not enough and will show undefined. KEEP THIS IN MIND. VERY IMPORTANT.

const getTheBookTitle4 = booksTest.map((element, index, array) => { // ex is passing element, index and the whole array
  console.log(`dot notation: ${element} at index[${index}] is ${array[index].title}`); // shows the right items in each line
  console.log(`dot notation: ${element} at index[${index}] is ${array[index].author}`);
  console.log(`bracket notation: ${element} at index[${index}] is ${array[index]["title"]}`);
  console.log(`bracket notation: ${element} at index[${index}] is ${array[index]["author"]}`);
});

// compare line 61's block vs line 80's block. in line 61's block, array is not a parameter that is passed. so to get 
// array[index]value, you need to reference the array name which is booksTest (see line 67). but when you use all parameters
// of element, index, array, you can just write it like line 80's block. array[index]value and you can use the value 
// in either dot or bracket notation.

const getTheBookTitleExperiment = booksTest.map((element, index) => {
  console.log(`bracket notation: index[${index}] which points to ${element} is ${booksTest[index]["title"]}`);
  console.log(`bracket notation: index[${index}] which points to ${element} is ${booksTest[index]["author"]}`);
});

// the above is another ex of only using element and index. and if you want to find the value by just the index number, then you
// need to write it like this booksTest[index]value. 

// can use the below to do a loop instead of map to get values by index. before using the solution at line 80, when i tried 
// map with index by doing something like element.index or element[index], i kept getting undefined for index (see line 68).
// however when i tried element.title[index], it would get the title but show index0 of the title's string and then the next
// iteration went to the next element and got the title's string but instead of index 0, it got index 1. and each of those 
// index numbers actually was the letter of the string.

const getTheBookTitle5 = booksTest.at(0).title;
const getTheBookTitle6 = booksTest.at(0).author;
const getTheBookTitle7 = booksTest.at(1).title;
const getTheBookTitle8 = booksTest.at(1).author;
const getTheBookTitle9 = booksTest.at(2).title;
const getTheBookTitle10 = booksTest.at(2).author;
console.log(`using .at(indexNum) ${getTheBookTitle5} is written by ${getTheBookTitle6}`);
console.log(`using .at(indexNum) ${getTheBookTitle7} is written by ${getTheBookTitle8}`);
console.log(`using .at(indexNum) ${getTheBookTitle9} is written by ${getTheBookTitle10}`);

// the above block could be used with a loop but it is better to use map and pass element, index AND array. see line 80's block
// for a better way to do this so you can always find any element and even use index to find the first, second, third etc element
// just as you do for non-object arrays.

// the above lines from 33 to here show in the console for element as [object Object]. to show what the contents of this object
// is, you can use stringify. Use console.log(JSON.stringify(result)) to get the JSON in a string format.

const getTheBookTitleExperiment2 = booksTest.map((element, index, array) => {
  console.log(`no stringify: ${element} shows ${array[index]["title"]} is written by ${array[index].author}`); // shows [object Object]
  console.log(`${JSON.stringify (element)} is the [object Object]`); // shows the contents of [object Object]
});

// above this line is the trial and error hw to get this to work. below this line is your finished hw
const books = [ // this is an array. but notice each item is an object instead of a string or number. this means when you
// iterate using map, you must be careful using the params for element, index and array. 
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
];

const getTheTitles = function(books) { // line 80's block has the main concept for the solution
  const sendToTheCaller = books.map((element, index, array) => { // using element, index and array as your params.
    console.log(`the array's index[${index}] is ${JSON.stringify(element)}`); //stringify will show the object's content instead of
    // [object Object]
    console.log(`the title from index[${index}] is ${array[index].title}`); // using dot notation
    console.log(`the author from index[${index}] is ${array[index].author}`); // using dot notation
    console.log(`index[${index}] is ${array[index]["title"]} written by ${array[index]["author"]}`); // using bracket notation
    const titles = element.title; // using dot notation
    return titles; // returns the results of the map to const sendToTheCaller
  });
  return sendToTheCaller; // this now holds the array of titles which is sent to the line that called the function
};

const returnFromGetTheTitles = getTheTitles(books); // calls the function and passes books. books is the variable but it is a 
// constant that holds an array of objects. the const will receive the function's results which will be the list of titles
console.log(books);
console.log(returnFromGetTheTitles);

// the below is almost identical to the above block. it is working on the list of authors instead of titles
const getTheAuthors = function(books) { // line 80's block has the main concept for the solution
  const sendToTheCaller = books.map((element, index, array) => {
    console.log(`the array's index[${index}] is ${JSON.stringify(element)}`);
    console.log(`the title from index[${index}] is ${array[index].title}`);
    console.log(`the author from index[${index}] is ${array[index].author}`);
    console.log(`index[${index}] is ${array[index]["title"]} written by ${array[index]["author"]}`);
    const authors = array[index]["author"];
    return authors;
  });
  return sendToTheCaller;
};

const returnFromGetTheAuthors = getTheAuthors(books);
console.log(books);
console.log(returnFromGetTheAuthors);

// the main idea about this is when you use map, you don't need to use all element, index and array parameters. but the reason
// i did use all 3 was bc i wanted to reference each array's item by the index number. when objects are the array items you 
// don't need the index number to get each item. you can just use dot notation or bracket notation to get each item from the 
// array. but what happens when you want to reference the nth item? for ex, you want the 3rd or 7th item? that means you 
// would need to know the index number so you can count to the position within the array. that is why i wanted to see if 
// using index numbers would work. and it does. map is useful since you don't really need to know the order of an item. map 
// will iterate through all items one at a time.

// also i wanted to verify that an array of objects compared to an array of non-objects behaves similarly. meaning with the
// line 80's block, i wanted to verify that all you need is an index number and you can find the values. this works for arrays
// that have objects. but keep in mind there is an extra step. in the map ex at line 80's block, you can't just go by 
// index.element and expect the value. since each element that is an object has multiple things inside of that element, you need 
// to use array[index].title for ex. the format is looking at the entire array, then it goes to the index which will get 
// you to the right element. this is similar to how a non-object array works. but you need that .title bc even if you get the right 
// element, that element you get is an object. and an object has multiple key/values inside of it. that is why you need 3 parts. 
// array[index].title.  

/*  

the below are the notes from /home/jodin22sams/repos/objects/Fundamentals-Part-5/javascript.js. this is a good ex of 
iterating through an object's key/value pairs. you haven't used this yet in the hw but it will be useful in the future

THE "FOR... IN" LOOP

A special form of loop exists to walk over all the keys/properties of an object. for... in.
for (key in object) {
    // executes the body for each key among object properties
}

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    alert(key); // shows all the keys, but not the values: name, age, isAdmin
    alert(user[key]); // shows the values of the keys: John, 30, true
}

notice that all "for" constructs allow us to declare the looping var inside the loop, like "let key" in the ex above. 
you can use any var name instead of key. 

for (let prop in user) {
    alert(prop); // shows all the properties/keys, but not the values: name, age, isAdmin
    alert(user[prop]); // shows the values of the properties/keys: John, 30, true
}

*/


// Do not edit below this line
// module.exports = getTheTitles; // uncomment this when you do the jest tests
