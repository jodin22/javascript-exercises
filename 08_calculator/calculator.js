/*
const add = function() { 
	
};

const subtract = function() {
	
};

const sum = function() {
	
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

*/

// use rest parameters bc you don't know how many numbers the user will add. with rest parameters, it becomes an array and you can 
// then use reduce to sum up the numbers

const add = function(...futureNumbers) { 
	console.log(futureNumbers); // shows all your numbers
  console.log(typeof futureNumbers); // thought this would show array, but shows as object
  const toAdd = futureNumbers; // put the group of numbers into a const which is what you will use to refer to the array. otherwise 
  // you won't be able to use reduce
  console.log(toAdd); // verifies that it is the same group of numbers from console line 32
  const total = toAdd.reduce((initialVal, nextVal) => { // reduce is adding up all the numbers in your array
    return initialVal + nextVal; // this return is only inside the arrow function so won't interfere with the return at line 44
  }, 0); // the 0 is your initial val for the accumulator. if you don't have this, then it will use index 0 as the initial val 
  // for the accumulator and then add index 1 to it and then you get a new val for the accumulator. then it adds index 2 to it 
  // and you get a new val for the accumulator. then it adds index 3 to it and so on until the length of the array. for this,
  // you really don't need the 0 bc you're not dealing with objects in the array elements. when you have objects in the array
  // elements, then you need an initial val for the accumulator
  return total; // need to return something so the html can display it
};

const enteredNumbers = function(...futureNumbers) { // ok to use ...futureNumbers here; the same as the above function bc the
  // parameter names are only good inside the function. 
  console.log(futureNumbers); // shows all your numbers you entered
  const toShow = futureNumbers; // put into a const so you can return the results of the function to the line that was calling it
  return toShow;
};

const showEnteredNumbersAdd = enteredNumbers(2, -35, 5.1456, -896.147); // for now, you are copy pasting the numbers
// for both functions. later when you build the ui, see if you can use a prompt or form.  also might need to cast as Number or
// floating number to allow for many decimals? re-read the mdn docs for casting
const showTotalAdd = add(2, -35, 5.1456, -896.147); 
console.log(showTotalAdd);

const numbers = document.createElement("p");  // creating your elements
const total = document.createElement("p");
const div = document.createElement("div");
const addDiv = div.classList.add("add"); 

numbers.textContent = `Numbers to add: ${showEnteredNumbersAdd}`; // fill with content. one line as the group of numbers.
total.textContent = `Total: ${showTotalAdd}`; // and the next line to be the total

document.body.appendChild(div); // show your content
div.appendChild(numbers);
div.appendChild(total);

// use rest parameters bc you don't know how many numbers they want to subtract. will reduce work for subtract as well as
// accumulate aka addition/sum? 

// yes, reduce works for subtraction but you can't use an initial val for the accumulator as you did with 
// the addition. an initial val on an accumulator will make it so that val is that starting point and then it accumulates with 
// index 0, then 1, then 2 and so on. this works fine for addition. but for subtraction, you need to leave out the initial val 
// for an accumulator. so the result for subtraction is it takes index 0 as the intial val for the accumulator and then does a 
// minus with index 1, then the result is the new accumulated value. then it minuses index 2 and the result is the new accumulated 
// value and then it minuses index 3 and then you have a new accumulated value and it keeps going to the length of the array. 
// you need to do it this way for situations when the first number is negative. if the first number is never negative, then you 
// can have 0 as the val for the initial val

const subtract = function(...futureNumbers) {
  console.log(futureNumbers);
  const toSubtract = futureNumbers; // the list of numbers is in an array format but has no name yet. now give it a name so you 
  // can reference the array's name and use reduce or any other type of array method
  console.log(toSubtract); // verifies the same list of numbers from line 85
  const total = toSubtract.reduce((initialVal, nextVal) =>{
    return initialVal - nextVal;
  }); // unlike the addition, here we don't give a starting value for initialVal aka accumulator
  return total;
};

const showEnteredNumbersSubtract = enteredNumbers(78, -190, 34.8876, -800.144);
const showTotalSubtract = subtract(78, -190, 34.8876, -800.144);
console.log(showTotalSubtract);

const numbersSubtract = document.createElement("p"); // create your elements
const totalSubtract = document.createElement("p");
const divSubtract = document.createElement("div");
const classDivSubtract = divSubtract.classList.add("subtract");

numbersSubtract.textContent = `Numbers to subtract: ${showEnteredNumbersSubtract}`; // fill with content
totalSubtract.textContent = `Total: ${showTotalSubtract}`;

// append divSubtract as the second child of body so it is not under the first div of addition
// then append the other parts of the subtraction to the divSubtract so add and subtract will be separate from each 
// other. or else subtract will become a child of add. you want them to be children of body and not of each other.
// in other words, add and subtract will be siblings

document.body.appendChild(divSubtract); // show the content
divSubtract.appendChild(numbersSubtract);
divSubtract.appendChild(totalSubtract);

// the sum function seems to be very similar to the addition one? in the jest test file, the add function is only testing 2 
// numbers. but the sum function is testing more than 2.

// use rest parameters again so the function receives any quantity of numbers and will put them in an array so you can use 
// the reduce method or other array methods.

const sum = function(...futureNumbers) {  // use rest parameters bc you don't know how many numbers they want to add
  console.log(futureNumbers); // show the numbers that the function received
  const toAdd = futureNumbers; // need to give the list of numbers a name so you can use array methods
  console.log(toAdd); // verifies the same list is in the array that was received from the beginning of the function
  const totalAdd = toAdd.reduce((accumulator, nextVal) => {
    return accumulator + nextVal; // this return is only inside the arrow function. it won't interfere with the return at line 129
  });	
  return totalAdd; // sends the sum to whichever line/var called it
};

const showEnteredNumbersSum = enteredNumbers(-145, 76, 52.789, -1.41);
const showTotalSum = sum(-145, 76, 52.789, -1.41);
console.log(showTotalSum);

const numberSum = document.createElement("p"); // create the elements
const totalSum = document.createElement("p");
const divSum = document.createElement("div");
const classDivSum = divSum.classList.add("sum");

numberSum.textContent = `Numbers to add: ${showEnteredNumbersSum}`; // fill with content
totalSum.textContent = `Total: ${showTotalSum}`;

document.body.appendChild(divSum); // show the content
divSum.appendChild(numberSum);
divSum.appendChild(totalSum);

// the multiply will be similar to the previous functions. you can use reduce and edit the sign from + and - to *. the main idea 
// is the function will receive any quantity of integers or decimals and mulitply them. bc you don't know how many they will enter,
// it is best to use rest parameters. this way the received values are put into an array and you can iterate through them with 
// reduce.

const multiply = function(...futureNumbers) {
  console.log(futureNumbers); // to see what was received
  const toMultiply = futureNumbers; // need a name to refer to the array of numbers this function received so we can use the name
  // and then apply array methods
  console.log({toMultiply}); // verify that this set of numbers is the same as what was received. {} will show the name of the 
  // variable and the value. without {}, only shows the value
  const totalMultiply = toMultiply.reduce((accumulator, nextVal)=> { // since there is no starting value for the accumulator, 
    return accumulator * nextVal; // it will take index 0 as the first val. then accumulate index 1 to it. then this new val 
    // will be the accumulator and will go to index 2 and accumulate that. and then you have a new val and will accumulate with 
    // the next index until the length of the array. 
  }); // this line will show a value if you need to accumulate objects that are items in an array. for now, your items in the 
  // array are non-objects and just numbers
  return totalMultiply; // having 2 returns is ok bc the return accumulator line is within the arrow function so it doesn't 
  // interfere with the return totalMultiply that will send the final value to whichever line called this function
};

const showEnteredNumbersMultiply = enteredNumbers(50, -71, 5.1479, -123.41);
const showTotalMultiply = multiply(50, -71, 5.1479, -123.41);
console.log(showTotalMultiply);

const numberMultiply = document.createElement("p"); // create the elements
const totalMultiply = document.createElement("p");
const divMultiply = document.createElement("div");
const classDivMultiply = divMultiply.classList.add("multiply");

numberMultiply.textContent = `Numbers to multiply: ${showEnteredNumbersMultiply}`; // fill with content
totalMultiply.textContent = `Total: ${showTotalMultiply}`;

document.body.appendChild(divMultiply); // show the content
divMultiply.appendChild(numberMultiply);
divMultiply.appendChild(totalMultiply);

// an ex will be power(2,3) which will do 2 * 2 * 2. for power(2, -3), this will do 2 * 2 * 2 = 8 and then take the 8 and make it
// 1/8. a negative power still multiplies the base as many times as the number shows but bc of the negative sign, it makes it a 
// division to 1/something.

const power = function(base, exponent) {  // 2 to the power of 1 is 2. 2 to the power of 0 is 1. 2 to the power of any other number
  // is multiplying 2 over and over again
  console.log(`${base},${exponent}`); // shows what was received
  const exponentZero = 1; // keep as 1 bc a number to the power of 0 is always 1. for now, test with positive exponents. later
  // will need to test with negative exponents
  // let newResult = 0; maybe don't need this for now
  if (exponent === 0) {
    return exponentZero; // return 1 for any number to the power of 0
  } else if (exponent === 1) {
    return base; // return the base for any number to the power of 1
  } else if (exponent > 0) { // do a loop that will multiply the base times itself however many times that is shown in the exponent
    let result = 1; // initialize this before the loop
    for(let i = 1; i <= exponent; i++) { 
      result = result * base; // first iteration will take 1 * base and assign it to result which will just be the base.
      // the 2nd iteration now has base * base and this will put it to the result. the third iteration takes the new result which 
      // was base * base and will multiply another base to it. then it assigns to the result again. the 4th iteration will take 
      // this new result and multiply another base to it and assign it to the result. this keeps repeating until the counter var
      // equals the exponent. 
      console.log(`Iteration ${i}: ${result}`); // this is helpful to see each iteration print to the console with the result
    };
    return result; // this is what is returned to whichever line called the function. this function has several returns, but 
    // they don't interfere with each other because each return is inside of it's own area of { }
  } else if (exponent < 0) {
    // for the negative exponents, put the result in a var. then do 1/var to get the answer.
    let result = 1;
    for(let i = -1; i >= exponent; i--) {
      result = result * base;
      console.log(`Iteration ${i}: ${result}`);
    };
    let oneDivByResult = 1/result;
    console.log(`1 divided by ${result}`);
    return oneDivByResult; // this is what is returned to whichever line called the function. this function has several returns, but 
    // they don't interfere with each other because each return is inside of it's own area of { }
  };

};

const showEnteredNumberPower = enteredNumbers(-10.6, -5); 
const showTotalPower = power(-10.6, -5);
console.log(showEnteredNumberPower);
console.log(showTotalPower);

const numberPower = document.createElement("p"); // create the elements
const totalPower = document.createElement("p");
const divPower = document.createElement("div");
const classDivPower = divPower.classList.add("power");

numberPower.textContent = `Numbers to power: ${showEnteredNumberPower}`; // fill with content
totalPower.textContent = `Total: ${showTotalPower}`;

document.body.appendChild(divPower);  // show the content
divPower.appendChild(numberPower);
divPower.appendChild(totalPower);

/* uncomment later when doing the tests
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
*/
