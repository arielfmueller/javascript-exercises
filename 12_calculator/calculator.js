const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((acc, cur) => acc + cur, 0)};

const multiply = function(arr) {
  return arr.reduce((acc, cur) => acc * cur)};

const power = function(a, b) { 
  return a ** b
};

const factorial = function(n) {
	let fact = 1
  for (let i = 1; i <= n; i++) {
      fact *= i
    }
  return fact
};

console.log(factorial(1))
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
