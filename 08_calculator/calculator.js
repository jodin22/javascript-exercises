/*
const add = function() { // use spread operator bc you don't know how many numbers they will add
	
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
  return futureNumbers; // send numbers to const so we can use in html
  // later need to use reduce and send the answer from reduce. so will need to move the return from futureNumbers to the 
  // answer of reduce

};

const showNumbers = add(10, 99, -2, -11, 21, 0); // for now, you're sending numbers this way, but later see if you can use 
// a prompt

const numbers = document.createElement("p");
const total = document.createElement("p");
const div = document.createElement("div");
const addDiv = div.classList.add("add"); 

numbers.textContent = `Numbers: ${showNumbers}`;
total.textContent = `Total: ${showNumbers}`;

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
