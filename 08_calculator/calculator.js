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

const numbers = document.createElement("p");
const total = document.createElement("p");
const div = document.createElement("div");
const addDiv = div.classList.add("add"); 

numbers.textContent = `Numbers to add: ${showEnteredNumbersAdd}`; // one line as the group of numbers
total.textContent = `Total: ${showTotalAdd}`; // and the next line to be the total

document.body.appendChild(div);
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

const numbersSubtract = document.createElement("p");
const totalSubtract = document.createElement("p");
const divSubtract = document.createElement("div");
const classDivSubtract = divSubtract.classList.add("subtract");

numbersSubtract.textContent = `Numbers to subtract: ${showEnteredNumbersSubtract}`;
totalSubtract.textContent = `Total: ${showTotalSubtract}`;

// append divSubtract as the second child of body so it is not under the first div of addition
// then append the other parts of the subtraction to the divSubtract so add and subtract will be separate from each 
// other. or else subtract will become a child of add. you want them to be children of body and not of each other.
// in other words, add and subtract will be siblings

document.body.appendChild(divSubtract);
divSubtract.appendChild(numbersSubtract);
divSubtract.appendChild(totalSubtract);

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
