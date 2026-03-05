// CALLBACK EXAMPLE
function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  let username = "Sandeep";
  callback(username);
}

processUser(greet);


// HIGHER-ORDER FUNCTION (argument)
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log("Addition:", calculate(5, 3, add));


// HIGHER-ORDER FUNCTION (return function)
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

let double = multiplier(2);

console.log("Double:", double(5));