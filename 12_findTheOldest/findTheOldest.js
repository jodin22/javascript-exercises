/* 
const findTheOldest = function() {

};
*/

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

let ageOfCarly = 0;
let nameOfPerson = "";
nameOfPerson = peopleTest1[0].name; // the array has multiple objects and each object is using the same key names but the 
// values are different. since it is an array, you can access each object by the index number
console.log(nameOfPerson); // shows Carly
ageOfCarly = peopleTest1[0].yearOfDeath - peopleTest1[0].yearOfBirth; 
console.log(ageOfCarly); // shows 28

// the 50's block above was to do it on one person only, the index 0 person. map is to do it on all the people.
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


console.log(`the original order: ${JSON.stringify(findEachPersonAgeTest1)}`); // shows the original order of the objects

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
// to the left which means the lesser ones get pushed further down the horizontal list to the right.
// this goes through all the objects in the array and keeps "bubbling" up and down the list to show greatest to smallest.

// the default for sort is it sorts it inside the original array. so if you were to console.log the array again, it will show
// the objects have changed positions aka index numbers. whereas map will give you a new copy aka shallow copy of the array.

console.log(`sorted array by oldest: ${JSON.stringify(comparePersonAgeTest1)}`); // this is actually the original array presented in 
// a new order

// to show the highest number, you need to reference just the index number of 0 bc after the sort, the new 0 is the highest 
// number instead of the original index 0 which was carly

console.log(`the oldest person: ${JSON.stringify(comparePersonAgeTest1[0])}`);
console.log(comparePersonAgeTest1[0]); // same as above line but not in a string
console.log(comparePersonAgeTest1); // the array in the new sorted format.

// when you console log the object in a string, it will show [object Object]. using JSON.stringify will show the contents of 
// the object.

// at lines 67 and 69. nameOfPerson = element.name; ageOfPerson = element.yearOfDeath - element.yearOfBirth; when you 
// console log these two var's, you won't get [object Object] even when you use them in a string. that is bc element.name 
// and element.yearOfBirth etc are the property values within the object so it will show the value you are looking for.
// but if you just reference the object without any further details, then you will get [object Object]. and that is why
// sometimes you need the JSON.stringify

// this next part is adding a test to find the oldest person if someone is still living. this is where you will use the date 
// function to see if they are still alive as of today's date?

const peopleTest2 = [ // commment and uncomment different yearOfDeath's to see how the results differ
    {
        name: "Carly",  // notice carly doesn't have a yearOfDeath property/value
        yearOfBirth: 2018,
        yearOfDeath: 2022,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        //yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
    {
        name: "Sam",
        yearOfBirth: 1932,
        //yearOfDeath: 1981,
    },
    {
        name: "Beth",
        yearOfBirth: 1991,
        yearOfDeath: 2020,
    },
];

const dateTest = new Date(); // new is a constructor which creates an object. Date is an object provided by javascript. since 
// it comes with javascript, you don't need to add property names and values and other things you would have to do when creating
// an object from scratch.

// the format is like this Fri Dec 30 2022 03:33:36 GMT-0800 (Pacific Standard Time)
const yearTest = dateTest.getFullYear(); // since Date() is a fully formed object, it comes with various methods. here, you are 
// using the getFullYear() method and it will return the year.
console.log(dateTest); // shows as a long string Fri Dec 30 2022 03:33:36 GMT-0800 (Pacific Standard Time)
console.log(yearTest); // shows the year

// first step is to find if a person is still living. check if the person's yearOfDeath has a value. if it exists, then you can 
// skip that person. for those that don't have a death value, then do the math on that person using the current year minus birth.
// then do the sort.

console.log(peopleTest2); // shows the original array

if (peopleTest2[0].yearOfDeath === undefined) { // see if it shows carly correctly
    console.log('carly is still alive');
} else {
    console.log('carly has passed')
};

// map will check if yearOfDeath exists for each person
const findEachPersonDeath = peopleTest2.map((element, index, array) => {
    console.log(element.yearOfDeath); // shows each person's death, but for Carly it is undefined bc there is no property/value
    // for her. which means she is still alive.
    if (element.yearOfDeath === undefined) { // for those who don't have a yearOfDeath, it will print still alive
        console.log(`${element.name} is still alive`);
        const results = `${element.name} is alive`; 
        return results; // put their name in a string and return the string to the array findEachPersonDeath
    } else {
        console.log(`${element.name} has passed`); // for those that do have a yearOfDeath, it will print has passed
        const results = `${element.name} has passed`; 
        return results; // put their name in a string and return the string to the array findEachPersonDeath
    };
}); // the array findEachPersonDeath will be filled up with each iteration of the map to show a result of each person and their
// status

console.log(findEachPersonDeath); // show the results of map

const peopleTest2Sort = [ // commment and uncomment different yearOfDeath's to see how the results differ
    {
        name: "Carly",  // notice carly doesn't have a yearOfDeath property/value
        yearOfBirth: 2018,
        //yearOfDeath: 2022,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        //yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        //yearOfDeath: 1941,
    },
    {
        name: "Sam",
        yearOfBirth: 1932,
        yearOfDeath: 1981,
    },
    {
        name: "Beth",
        yearOfBirth: 1991,
        //yearOfDeath: 2020,
    },
];


// the array in the sort is shown as [...peopleTest2Sort].sort((initialPerson, nextPerson) => {...}. this is done bc after
// a sort is finished, it does it on the array instead of creating a shallow copy the way map does. by using [...spread syntax]
// you can still compare the before and after the sort to see how the results compare to the original

//[...peopleTest2Sort] - this takes the peopleTest2Sort values and with the spread syntax, it puts those values into an array. this
// way you don't mutate the original peopleTest2Sort
const comparePersonAgeTestAlive = [...peopleTest2Sort].sort((initialPerson, nextPerson) =>{
    // let ageOfInitialPerson = 0;
    // let ageOfNextPerson = 0;
    // ageOfInitialPerson = initialPerson.yearOfDeath - initialPerson.yearOfBirth;
    // ageOfNextPerson = nextPerson.yearOfDeath - nextPerson.yearOfBirth;
    if ((initialPerson.yearOfDeath === undefined) && (nextPerson.yearOfDeath)) { // it compares if yearOfDeath is undefined
        // with the next person. if the intial person is undefined, then it gets bumped up to an earlier position.
        return -1;
    } else { // otherwise it gets bumped down
        return 1;
    }

});
// unsure if this will sort correctly when you have consecutive undefined's. after the undefined's are bubbled up to the top, 
//then you have to check who the oldest is of those undefined's. 

// seems when you have consecutive undefined, it still works. i thought with the && logic that if it is consecutive undefined, 
// then it failed the if test and it would go to the else and it wouldn't sort properly, but it seems to work. seems the main
// idea is always make sure to clearly show how the initial vs the next is compared. then always have a 1 or -1 bc if you don't
// have 1 or -1, then it will violate the anti-symmetry

console.log(`before the sort: ${JSON.stringify(peopleTest2Sort)}`);
console.log(`after the sort: ${JSON.stringify(comparePersonAgeTestAlive)}`);

// review lines 120 to 189. this block uses the date object and map to find each person that hasn't died. meaning the 
// yearOfDeath is undefined. see if you can take the date part and combine it with the map to get everybody's age regardless of
// yearOfDeath is defined or undefined. then see if you can sort on those results using the sort block starting at line 191 to 248.




// Do not edit below this line
// module.exports = findTheOldest; // uncomment this line when you run the jest test
