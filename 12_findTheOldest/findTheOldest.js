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
    console.log(`${nameOfPerson} is ${ageOfPerson}`); // shows person's age in a sentence
    const results = `${nameOfPerson} is ${ageOfPerson}`;
    console.log(results);
    return results;
});

console.log(findEachPersonAgeTest1);


console.log(`original array: ${JSON.stringify(peopleTest1)}`); // shows the original order of the objects

const comparePersonAgeTest1 = peopleTest1.sort((initialPerson, nextPerson) => { // each param is the individual object in the array.
    // it needs to be listed twice when you want to do a sort bc it has to compare two things
    let ageOfInitialPerson = 0;
    let ageOfNextPerson = 0;
    ageOfInitialPerson = initialPerson.yearOfDeath - initialPerson.yearOfBirth; // this is the age of the initial object
    ageOfNextPerson = nextPerson.yearOfDeath - nextPerson.yearOfBirth; // this is the age of the next object
        
    if (ageOfInitialPerson > ageOfNextPerson) { // this is where the comparision happens. when the initial object is greater than
        return -1; // the next object, then it gets pushed to the left of the sorted results. 
    } else {
        return 1; // if it is not greater than, it gets pushed to the right. 
    };  
}); // think of it as each object spread out in a horizontal line and the sort compares one with the next. the greater one gets 
// sent to the left. then it keeps the greater one and compares with the next one and whichever is greater is kept and pushed
// to the left which means the lesser ones get pushed further down the horizontal list.
// this goes through all the objects in the array and keeps "bubbling" up and down the list to show greatest to smallest.

// the default for sort is it sorts it inside the original array. so if you were to console.log the array again, it will show
// the objects have changed positions aka index numbers. whereas map will give you a new copy aka shallow copy of the array.

console.log(`sorted array by oldest: ${JSON.stringify(comparePersonAgeTest1)}`); // this is actually the original array presented in 
// a new order

// to show the highest number, you need to reference just the index number of 0 bc after the sort, the new 0 is the highest 
// number instead of the original index 0 which was carly

console.log(`the oldest person: ${JSON.stringify(comparePersonAgeTest1[0])}`);

// this next part is adding a test to find the oldest person if someone is still living. this is where you will use the date 
// function to see if they are still alive as of today's date?






// Do not edit below this line
// module.exports = findTheOldest; // uncomment this line when you run the jest test
