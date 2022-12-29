/* 
const findTheOldest = function() {

};
*/

const peopleTest1 = [  // each array is holding multiple objects
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];

const peopleTest2 = [
    {
        name: "Carly",
        yearOfBirth: 2018,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];

const peopleTest3 = [
    {
        name: "Carly",
        yearOfBirth: 1066,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },

];

// refer to /home/jodin22sams/repos/JavaScript30/04 - Array Cardio Day 1/index-START.html and 07 - Array Cardio Day 2.
// these have similar ex's of using the date function and reduce

const findTheOldestTest = function() {  

};

// before putting your work in a function, do these steps. when it all works, then put it in the function.
// peopleTest1 array, trying to do the math on one person using yearOfDeath - yearOfBirth. after that works, use map to do it 
// on each person

let ageOfCarly = 0;
let nameOfPerson = "";
nameOfPerson = peopleTest1[0].name; // the array has multiple objects and each object is using the same key names but the 
// values are different. since it is an array, you can access each object by the index number
console.log(nameOfPerson); // shows Carly
ageOfCarly = peopleTest1[0].yearOfDeath - peopleTest1[0].yearOfBirth; 
console.log(ageOfCarly); // shows 28

const findEachPersonAgeTest1 = peopleTest1.map((element, index, array) => {
    let ageOfPerson = 0;
    let nameOfPerson = "";
    console.log(`${element.name} is person at index[${index}]`); // each iteration shows a person's name
    nameOfPerson = element.name; 
    console.log(nameOfPerson); 
    ageOfPerson = element.yearOfDeath - element.yearOfBirth; // each iteration shows the age of that person
    console.log(`${nameOfPerson} is ${ageOfPerson}`);
    
});




// Do not edit below this line
// module.exports = findTheOldest; // uncomment this line when you run the jest test
