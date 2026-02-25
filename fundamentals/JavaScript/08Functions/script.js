// Day 8: Functions

// 1. Normal function
function greet() {
  console.log("Hello, Welcome!");
}
greet();

// 2. Function with parameter
function greetUser(name) {
  console.log("Hello " + name);
}
greetUser("Sandeep");

// 3. Function with return
function add(a, b) {
  return a + b;
}
let sum = add(10, 5);
console.log("Sum:", sum);

// 4. Arrow function
const multiply = (a, b) => {
  return a * b;
};
console.log("Multiply:", multiply(4, 5));

// 5. Short arrow function
const square = (n) => n * n;
console.log("Square:", square(6));