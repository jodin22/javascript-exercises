/* 
const findTheOldest = function() {

};
*/

// refer to /home/jodin22sams/repos/JavaScript30/04 - Array Cardio Day 1/index-START.html and 07 - Array Cardio Day 2.
// these have similar ex's of using the date function and reduce

// SEE BELOW AT THE BLOCK STARTING AT LINE 305. THIS IS WHERE THE HW STARTS TO COME TOGETHER. BEFORE 305, HW WAS WORKING ON ONE
// PIECE AT A TIME. LINE 387 TO 469 IS THE HW ANSWER WHICH PUTS IT ALL IN A FUNCTION.



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
        //yearOfDeath: 2023,
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
        yearOfDeath: 2023,
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
    console.log('test: carly is still alive');
} else {
    console.log('test: carly has passed')
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
        //yearOfDeath: 2023,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        //yearOfDeath: 1941,
    },
    {
        name: "Sam",
        yearOfBirth: 1932,
        //yearOfDeath: 1981,
    },
    {
        name: "Beth",
        yearOfBirth: 1991,
        yearOfDeath: 2023,
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

const peopleTest3 = [ // 'finds the oldest person if someone is still living' 
// expect(findTheOldest(people).name).toBe('Ray'); the jest tests are using the same array named people but each test has different
// values. the 2nd and 3rd jest test are phrased in a confusing way but what it really means is to find the oldest.
// in the 2nd test, carly is born in 2018 and no year of death so she is only 5 years old whereas all the dead people are much 
// older than 5 so carly would not be the oldest. in the 3rd test, carly is born in 1066 and no date of death so she will always
// be older than the others.
    {
        name: "Carly",  // notice carly doesn't have a yearOfDeath property/value
        yearOfBirth: 2018,
        // yearOfDeath: 2023,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 1991,
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

  console.log(peopleTest3);

// (DON'T DO THIS: refer to 07 - Array Cardio Day 2/index-START.html bc it has ex's of the .some method. first step is to use .some 
// and see if any of these have undefined for yearOfDeath. this will show true if anybody is alive. then do the math on 
// each person to get their age regardless of living or dead.)

// the below block is using map and if test for undefined on yearOfDeath. (DON'T DO THIS: instead use .some to see if any undefined 
// exist and then do the math on the age.) Continue using map below to get the oldest no matter who is alive or dead.
const findOldestIfStillLiving = peopleTest3.map((element, index, array) => {
    // if there is an undefined for yearOfDeath, then use the date() and get the the current year. then do math of current year 
    // minus birth. this will give each person's age regardless of alive or dead.
    // then sort for the oldest
    if (element.yearOfDeath === undefined) {
        const personAliveYear = (new Date()).getFullYear();
        console.log(`alive in ${personAliveYear}`);
        console.log(`index[${[index]}]: ${element.name} is alive and year is ${personAliveYear}`);
        const personAliveAge = personAliveYear - element.yearOfBirth;
        const results = `${array[index].name} is alive and is ${personAliveAge}`;
        console.log(results);
        return results;
    } else {
        console.log(`died in ${element.yearOfDeath}`);
        console.log(`index[${index}]: ${element.name} passed away in ${element.yearOfDeath}`);
        const personDeathAge = element.yearOfDeath - element.yearOfBirth;
        const results = `${array[index].name} has passed and was ${personDeathAge}`;
        console.log(results);
        return results;
    };
});

console.log(findOldestIfStillLiving); // this array is showing each person in a sentence. it shows their alive/death status and
// age.

// THIS IS WHERE THE HW ANSWER COMES TOGETHER. ABOVE THIS BLOCK WAS DOING SMALL PARTS AT A TIME TO WORK THROUGH THE PROBLEM.
// the block below is using peopleTest3 as the original array. then the map creates new objects in a new array that uses all 
// the same info from the original array but adds an age member/value.  so the finished map will have {name, yearOfBirth,
// yearOfDeath, age}. some of the elements will not have yearOfDeath since some of them are still alive.

console.log(`the original array: ${JSON.stringify(peopleTest3)}`); // shows the array before the map

// the map will put the results into an array called findOldestRegardless. this new array will hold objects that are the same 
// as the original array but will have a new member called age. so each object will look something like this:
// {name, yearOfBirth, yearOfDeath, age}. some objects will not have yearOfDeath since that is undefined for those still living.

// the last step is to sort the findOldestRegardless array.

const findOldestRegardless = peopleTest3.map((element, index, array) => { 
    if (element.yearOfDeath === undefined) { // if there is no year of death which means they are still alive
        const personAliveYear = (new Date()).getFullYear(); // create a var that will hold the current year
        console.log(personAliveYear);  // show the current year
        const personAliveAge = personAliveYear - element.yearOfBirth;  // the current year minus year of birth
        console.log(`${element.name} is ${personAliveAge}`); // show that person and their age as of current year
        const personAlive = { // each element that has yearOfDeath undefined in the original array, map will create a new
            // object with the below member and values
            name: element.name,  // the same member name and get the values from the original array using element.whatever
            yearOfBirth: element.yearOfBirth, // the same member name and get the values from the original array using element.whatever
            //yearOfDeath: element.yearOfDeath, LEAVE OUT BC THERE ARE NO DEATHS FOR SOME PEOPLE
            age: personAliveAge, // originally, i had age: element[personAliveAge]. thinking that personAliveAge is in a 
            // const or var, then to reference it, i needed brackets. but removing element and brackets, it works? 

            // i think it is bc map is referencing each element in the original array. there is no age in the original array
            // so when you had element[personAliveAge] it showed undefined.

            // also, name and yearOfBirth are keeping the same member names and values from the original array. age is a new
            // member and the new values for age are taken from the personAliveAge calculation. 
        };
        return personAlive;
    } else { // for those that have a year of death which means they are no longer alive
        const personDeadAge = element.yearOfDeath - element.yearOfBirth; // the age of that person
        console.log(`${element.name} was ${personDeadAge}`); // person's name and age
        const personDead = { // each element that does have yearOfDeath defined in the original array, map will create a 
            // new object with the below members and values
            name: element.name, // the same member name and get the values from the original array using element.whatever
            yearOfBirth: element.yearOfBirth, // the same member name and get the values from the original array using element.whatever
            yearOfDeath: element.yearOfDeath, // the same member name and get the values from the original array using element.whatever
            age: personDeadAge,  // new member and value. see lines 326 to 336 for the explanation on the new member/value.
        };
        return personDead; 
        // see above lines at 326 to 336 on how each new object is created.
    };
});

console.log(`after the map: ${JSON.stringify(findOldestRegardless)}`); // shows the array with each object now having an age in 
// addition to the previous member/values.
console.log(findOldestRegardless); // shows the array again.

// the peopleTest3 has name, yearOfBirth, yearOfDeath. findOldestRegardless has name, yearOfBirth, yearOfDeath and age. 
// the map took each of the objects in the original array and created new objects that included the same members and values 
// as before, but now added an age.

// now that you have an age on everybody regardless of yearOfDeath being undefined or not, you can sort on the new array, 
// findOldestRegardless and find the oldest person that way.

// the above block of lines 305 to 356 show that the peopleTest3 array of objects are now ready to be sorted to find the oldest
// regardless of whether a person is alive or dead. the peopleTest3 array started with each object only having name, birth and 
// sometimes death. now it has the same property/values but with a new one for age. now that there is an age, we can use the 
// sort method and compare initial to next and whichever is older will bubble up the rank.

// START THE SORT METHOD BELOW.

// line 305 to 356 is using the original array of peopleTest3. the new array that shows everybody's ages is now held in 
// findOldestRegardless. i want to keep the order of that array the same so i will sort using spread sytnax. 
// otherwise, the sort mutates the findOldestRegardless array.

const sortByOldest = [...findOldestRegardless].sort((initialPerson, nextPerson) => { // ...spread syntax allows me to 
    // keep the original array in the original order. that way i can compare the before and after.
    if (initialPerson.age > nextPerson.age) {
        return -1; // bubbles up the rank
    } else {
        return 1; // bubbles down the rank
    };
});

console.log(`original order: ${JSON.stringify(findOldestRegardless)}`); // original array order
console.log(`sorted by age: ${JSON.stringify(sortByOldest)}`); // sorted by oldest person regardless of alive or dead


// the below block is putting it altogether in a function. re-using lines 303 to 384 with some editing so it doesn't look
// as messy.

const peopleTest4 = [
    {
        name: "Carly",  // notice carly doesn't have a yearOfDeath property/value
        yearOfBirth: 2018,
        // yearOfDeath: 2023,  // when there is no yearOfDeath, it shows as undefined
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 1991,
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
        //yearOfDeath: 2020,
    },

];

console.log(`original array: ${JSON.stringify(peopleTest4)}`); // need stringify or else everything appears as [object Object]

const findTheOldestTest = function(listOfPeople) {

    const newObjectWithAge = listOfPeople.map((element, index, array) => {
        if (element.yearOfDeath === undefined) { // those still alive have no year of death in the object
            const personAliveYear = (new Date()).getFullYear(); // the current year
            const personAliveAge = personAliveYear - element.yearOfBirth; // current year minus birth year
            const objectForPersonAlive = { // create an object for each person that is alive
                name: element.name, // use the same property and value from the array that was sent to the map function
                yearOfBirth: element.yearOfBirth,//use the same property and value from the array that was sent to the map function
                // no yearOfDeath since alive
                age: personAliveAge, // this is a new property that was not in the array from the map function. the value is from
                // the const holding the age
            };
            return objectForPersonAlive; // new object sent to newObjectWithAge
        } else { // those that have died
            const personDeadAge = element.yearOfDeath - element.yearOfBirth; // death year minus birth year
            const objectForPersonDead = { // create an object for each person that is dead
                name: element.name, // use the same property and value from the array that was sent to the map function
                yearOfBirth: element.yearOfBirth,//use the same property and value from the array that was sent to the map function
                yearOfDeath: element.yearOfDeath,//use the same property and value from the array that was sent to the map function
                age: personDeadAge, // this is a new property that was not in the array from the map function. the value is from
                // the const holding the age
            };
            return objectForPersonDead; // new object sent to newObjectWithAge
        };
    });

    //return newObjectWithAge; // if it was to only display the new objects with ages, then this would end right here but 
    // we need to sort the ages. below is the sort part.

    const sortByAge = [...newObjectWithAge].sort((initialPerson, nextPerson) => { // newObjectWithAge holds the array of new
        // objects that have the age property/value. used ...spread syntax so the unsorted array is not mutated. this way 
        // i can check the before and after the sort to make sure it looks ok. if ...spread syntax is not used, then the
        // sort happens on the original array and it will be difficult to compare the before and after.
        if (initialPerson.age > nextPerson.age) {
            return -1; // bubbles up the rank
        } else {
            return 1; // bubbles down the rank
        };
    });

    console.log(`original array with ages: ${JSON.stringify(newObjectWithAge)}`); // shows the original order with ages
    return sortByAge;
    
};

const returnedByFindTheOldest = findTheOldestTest(peopleTest4);

console.log(`array ordered by age: ${JSON.stringify(returnedByFindTheOldest)}`);


// Do not edit below this line
// module.exports = findTheOldest; // uncomment this line when you run the jest test
