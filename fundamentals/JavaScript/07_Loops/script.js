// Day 7: Loops

// 1. for loop
for (let i = 1; i <= 5; i++) {
  console.log("For Loop:", i);
}

// 2. while loop
let i = 1;
while (i <= 5) {
  console.log("While Loop:", i);
  i++;
}

// 3. do...while
let j = 1;
do {
  console.log("Do While:", j);
  j++;
} while (j <= 5);

// 4. for...of (array)
let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}

// 5. for...in (object)
let user = {
  name: "Sandeep",
  age: 22
};

for (let key in user) {
  console.log(key + ": " + user[key]);
}