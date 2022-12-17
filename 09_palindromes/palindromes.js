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
    const stringArray = strings;
    console.log(`string to break apart: ${strings}`);
    const countString = stringArray.length;
    console.log({countString});  // shows the count of letters and spaces and punctuation
    const lowerCase = stringArray.toLowerCase(); // need lower case to do a comparison on each letter
    const makeArray = Array.from(lowerCase);
    console.log({makeArray}); // takes the string and each char, space, punctuation is put into an array. now you can iterate 
    // through the indexes and do comparisons with the first and last letter. then the second to second last letter and so on to 
    // see if it is a palindrome. 

    const showEachThing = makeArray.map(theThing => {
        console.log(theThing); // shows each char, space, etc. need to figure out how to remove non letters.
    })

    return makeArray;
    
};

const someThing = palindromes('A car, a man, a maraca.');
console.log({someThing});


/* uncomment this when you do the jest part
// Do not edit below this line
module.exports = palindromes;

*/
