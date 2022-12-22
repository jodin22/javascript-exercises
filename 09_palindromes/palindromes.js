/*
const palindromes = function () {

};

### some palindromes:
  - A car, a man, a maraca.
  - Rats live on no evil star.
  - Lid off a daffodil.
  - Animal loots foliated detail of stool lamina.
  - A nut for a jar of tuna.

*/

// line 19 to 68 was the first attempt. Do not use. line 73 to 86 is the second attempt. This one is the preferred way. Finish the 
// hw continuing with line 73 to 86. copy that part and start on a new line. Line 96 to 130, also don't use. This was an 
// attempt to do the regex directly on the array.

const oldPalindromes = function(strings) {
    console.log(`function received: ${strings}`);
    console.log(`string to break apart: ${strings}`);
    const stringArray = strings; // giving the string a name so you can refer to it when you want to do more 
    // things in your code
    const countString = stringArray.length; 
    console.log({countString});  // shows the count of letters and spaces and punctuation
    const lowerCase = stringArray.toLowerCase(); // need lower case to do a comparison on each letter
    const makeArray = Array.from(lowerCase);  // turning your string into an array
    console.log({makeArray}); // takes the string and each char, space, punctuation is put into an array. now you can iterate 
    // through the indexes and do comparisons with the first and last letter. then the second to second last letter and so on to 
    // see if it is a palindrome.

    /*
    const showEachThing = makeArray.map(theThing => {
      console.log(theThing); // shows each char, space, etc. need to figure out how to remove non letters.
      const theThingIndex = makeArray.indexOf(theThing); // indexOf in this way is misleading bc it returns the first 
    // occurrence of the index number instead of each letter's index number. for ex, the letter A appears multiple times but only
    // index 0 is shown bc index 0 is the first occurrence of letter A. even though letter A appears at index 0, index 3, index 7
    // and index 10 and so on.
      console.log(`${theThing} is at index ${theThingIndex}`);
      return theThing;
    });
    
    return showEachThing;
    */

    const showIndex = makeArray.map((element, index) => {  // originally had makeArray.forEach((element, index) => {...} )
      // but forEach returns undefined. you will see undefined when you try to use what is returned with showIndex to the const 
      // returnedFromPalindromes. console.log still works using forEach, but since it doesn't return anything like map does; 
      // that is why map is better in this situation
      // console.log(`index[${index}] is ${element}`);
      const theInfoToReturn = `index[${index}]: ${element}`;
      console.log(theInfoToReturn);
      return theInfoToReturn;  // this return is actually putting in the results of your arrow function to the const showIndex
    });

    return showIndex; // this return is what is being sent to the line that called the palindromes(). will most likely be 
    // commented out when you get your function to work better

    // line 44 shows the index number for each element in your string. now we need to eliminate all the non-letters. after we 
    // only have letters remaining, then do comparison of 1st letter with last letter. if that is equal, then compare 2nd letter 
    // the 2nd to last letter. if that is equal, then keep going where you compare each end with the corresponding other end.
    // if they are all equal, then you know it is a palindrome. if not, then exit the function
 
};

const returnedFromPalindromes = oldPalindromes('A car, a man, a maraca.');
console.log({returnedFromPalindromes});
console.table(returnedFromPalindromes);

// below is testing a string and regex to find the matches of the alphabet. it starts as a string and after the .match of 
// the regex, it gets put into an array where only the letters remain and the spaces and punctuation are removed.

const findAlphabet = /[a-z]/g; // the g means to find all matches. without g, it will only find the first match. so for the 
// ex below, a car, a man, a maraca. it will start at index 0 and see if it is an alphabet. since it is the letter a, then 
// it stops. it won't go to the rest of the indexes. that is why you need to use g to check each index
const testString = 'A car, a man, a maraca.';
console.log(`string received: ${testString}`);
const lowerCaseTestString = testString.toLowerCase();
console.log(`change to lower case: ${lowerCaseTestString}`);
const testStringCount = testString.length;
console.log(`count of the string: ${testStringCount}`); // shows 23 bc it includes spaces, commas, periods etc
const testResult = lowerCaseTestString.match(findAlphabet); // here is where the results of the .match are put into an array
// the .match for the regex will only match the alphabet. it returns a new array and this new array takes out all non alphabets.
console.table(testResult); // the new array has length 15. before it was 23 bc it included non-letters. now with only letters
// it reduced to 15.
console.log({testResult});

// what started as a string with a length of 23, after the regex, it becomes an array with length of 15 bc the regex took out the 
// space, comma, periods etc. and all you have left are letters. this way is better than converting a string to an array and 
// iterating through it to match and take out things.

// before line 71, the regex didn't work bc it was directly on an array. regex is for strings, not arrays. but if you have an array 
// and each item in your array is a string, then you can use the map method and pass each item to map and use the regex that way.
// the below is taking a string, making it into an array so you can see each letter, space and punctuation has an index number

const newPalindrome = function(string) {
  console.log(`new function received: ${string}`);
  const newStringReceived = string;
  const newStringCount = newStringReceived.length;
  console.log(`new function received length: ${newStringCount}`);
  const allLowerCase = newStringReceived.toLowerCase();
  console.log(`change to lower case: ${allLowerCase}`);
  const makeToArray = Array.from(allLowerCase);
  console.log({makeToArray});  // shows each letter, space and punctuation in an index number

  const findAlphabet = /[a-z]/g; // this regex searches for the alphabet. the g means to search all indexes. without g, it will 
  // only find the first index that matches
  const regExpArrayTest = makeToArray.map((element, index) => { // without this map part, doing regex directly on an array won't work
    const foundIt = element.match(findAlphabet); // map works bc it is passing each element to the regex. and bc each element
    // is a string, that is why the regex will work
    // console.log(`index ${index} is ${foundIt}`);
    const foundItSentence = `index [${index}]: ${foundIt}`;
    // console.table(foundIt);
    return foundItSentence; 
  });

  return regExpArrayTest; 
  // a car, a man, a maraca.
  // a is index 0, space is index 1, c is index 2, index 3 and 4 are letters. index 5 is a comma. index 6 is a space. index 7 
  // is a letter and so on. each one that is not a letter shows as null. 
  // this is not the desired way bc then you have to do more steps to create a new array that has only letters. in situations
  // like this where the string is a sentence, it is best to not create an array first. it is best to use regex to find
  // the alphabet and then it will return a new array with only letters. all the spaces and punctuation will be gone. then 
  // use loop or some other logic to compare each letter to see if it is a palindrome.

};

const newReturnedFromPalindrome = newPalindrome('A car, a man, a maraca.');
console.log(newReturnedFromPalindrome);
console.table(newReturnedFromPalindrome);

// this part is copied from line 73 to 86. this part had the best results with the regex. now need to figure out how to compare
// first and last letter and then the second to second-to-last letter and then the third and the third-to-last letter and so on
// to see if it is a palindrome.

// below is testing a string and regex to find the matches of the alphabet. it starts as a string and after the .match of 
// the regex, it gets put into an array where only the letters remain and the spaces and punctuation are removed.

const palindromes = function (someString) {
  const findAlphabet = /[a-z]/g; // the g means to find all matches. without g, it will only find the first match. so for the 
  // ex below, a car, a man, a maraca. it will start at index 0 and see if it is an alphabet. since it is the letter a, then 
  // it stops. it won't go to the rest of the indexes. that is why you need to use g to check each index
  const testString = someString;
  console.log(`string received: ${testString}`);
  const lowerCaseTestString = testString.toLowerCase();
  console.log(`change to lower case: ${lowerCaseTestString}`);
  const testStringCount = testString.length;
  console.log(`count of the string: ${testStringCount}`); // shows 23 bc it includes spaces, commas, periods etc
  const testResult = lowerCaseTestString.match(findAlphabet); // here is where the results of the .match are put into an array
  // the .match for the regex will only match the alphabet. it returns a new array and this new array takes out all non alphabets.
  console.table(testResult); // the new array has length 15. before it was 23 bc it included non-letters. now with only letters
  // it reduced to 15.
  console.log({testResult});

  // now the testResult is an array of only the letters. the spaces and punctuation have been removed. try a loop where you 
  // compare the letters from the front to the end to see if the forward and reverse are the same.

  /*
  console.log(`index 0: ${testResult[0]}`); // these lines are the ex you want the loop to do
  console.log(`index 14: ${testResult[14]}`);
  console.log(`index 1: ${testResult[1]}`);
  console.log(`index 13: ${testResult[13]}`);
  console.log(`index 2: ${testResult[2]}`);
  console.log(`index 12: ${testResult[12]}`);
  console.log(`index 3: ${testResult[3]}`);
  console.log(`index 11: ${testResult[11]}`);
  */

  let answer = "";
  let comparingToEnding = 0;
  let comparingToBeginning = 0;
    for (let i = 1; i <= testResult.length; i++ ) {
      if ((testResult[i-1]) === (testResult[testResult.length-i])) {
        comparingToBeginning = i-1
        comparingToEnding = testResult.length-i;
        // console.log(comparingToEnding);
        console.log(`round ${i}: index ${comparingToBeginning}: ${testResult[i-1]} is same as index ${comparingToEnding}: ${testResult[testResult.length-i]}`);
        console.log('continue');
        answer = true;
      } else {
        comparingToBeginning = i-1
        comparingToEnding = testResult.length-i;
        // console.log(comparingToEnding);
        console.log('not a palindrome');
        console.log(`round ${i}: index ${comparingToBeginning}: ${testResult[i-1]} is not the same as index ${comparingToEnding}: ${testResult[testResult.length-i]}`);
        return answer = false; // need the return here or else the loop will still go through all iterations filling answer with
        // the values of true, then false, then true then false etc until the end of the array. when return answer = false is 
        // written as answer = false, then only if the last iteration changes the answer to false will it return false. this will 
        // still work and show false for non-palindromes but that isn't the behavior you want. you want it to exit the function 
        // immediately if it is not a palindrome. that is what the return does at this part of the loop.
      };
    };

  return answer;
};

const returnFromPalindromes = palindromes('ZZZZ car, a man, a maracaz.');
console.log(returnFromPalindromes);

/*
- A car, a man, a maraca.
  - Rats live on no evil star.
  - Lid off a daffodil.
  - Animal loots foliated detail of stool lamina.
  - A nut for a jar of tuna.
*/

// uncomment this when you do the jest part
// Do not edit below this line
// module.exports = palindromes;


