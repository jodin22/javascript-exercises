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

// take the string, then compress it so all spaces and punctuation are gone.

const palindromes = function(strings) {
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
      // but forEach returns undefined. console.log still works using forEach, but since it doesn't return anything like map does; 
      // that is why map is better in this situation
      // console.log(`index[${index}] is ${element}`);
      const theInfoToReturn = `index[${index}] is ${element}`;
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

const returnedFromPalindromes = palindromes('A car, a man, a maraca.');
console.log({returnedFromPalindromes});



/* uncomment this when you do the jest part
// Do not edit below this line
module.exports = palindromes;

*/
