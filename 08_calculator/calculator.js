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
    return initialVal + nextVal; // this return is only inside the arrow function so won't interfere with the return at line 41
  }, 0); // this is the initial value of 0. you need this or else it will use the first index as the initial val and start adding 
  // from the 2nd index instead of the first index? unsure exactly, re-read the mozillla docs?
  return total; // need to return something so the html can display it
};

const showNumbers = add(12, 11, 78, 0, -59, -2, 100, -34); // for now, you're sending numbers this way, but later see if you can use 
// a prompt

const numbers = document.createElement("p");
const total = document.createElement("p");
const div = document.createElement("div");
const addDiv = div.classList.add("add"); 

numbers.textContent = `Numbers: ${showNumbers}`; // for now both show the total, need to show one line as the group of numbers
total.textContent = `Total: ${showNumbers}`; // and the next line to be the total

document.body.appendChild(div);
div.appendChild(numbers);
div.appendChild(total);

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
