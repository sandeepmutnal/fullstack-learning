// Create Array
let fruits = ["apple", "banana", "mango"];
console.log("Original:", fruits);

// Access
console.log("First fruit:", fruits[0]);

// Modify
fruits[1] = "orange";
console.log("Modified:", fruits);

// push
fruits.push("grapes");
console.log("After push:", fruits);

// pop
fruits.pop();
console.log("After pop:", fruits);

// map
let numbers = [1, 2, 3];
let doubled = numbers.map(n => n * 2);
console.log("Map:", doubled);

// filter
let nums = [10, 20, 30, 40];
let filtered = nums.filter(n => n > 20);
console.log("Filter:", filtered);

// reduce
let total = numbers.reduce((sum, n) => sum + n, 0);
console.log("Reduce (sum):", total);