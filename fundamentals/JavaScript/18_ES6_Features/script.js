// LET and CONST
let age = 20;
age = 25;

const country = "India";

console.log(age);
console.log(country);


// ARROW FUNCTION
const add = (a, b) => a + b;
console.log("Addition:", add(5,3));


// TEMPLATE LITERALS
let name = "Sandeep";
console.log(`Hello ${name}`);


// DESTRUCTURING ARRAY
const numbers = [10,20,30];
const [a,b,c] = numbers;

console.log(a,b,c);


// DESTRUCTURING OBJECT
const user = {
  username: "Sandeep",
  userAge: 22
};

const {username, userAge} = user;

console.log(username, userAge);


// SPREAD OPERATOR
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const merged = [...arr1, ...arr2];

console.log(merged);


// REST PARAMETERS
function sum(...nums){
  let total = 0;

  for(let n of nums){
    total += n;
  }

  return total;
}

console.log(sum(1,2,3,4));


// DEFAULT PARAMETERS
function greet(user="Guest"){
  console.log(`Hello ${user}`);
}

greet();
greet("John");