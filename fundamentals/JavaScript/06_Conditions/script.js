// Day 6: Conditions

// Voting check
let age = 20;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}

// Marks system
let marks = 85;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else {
  console.log("Fail");
}

// Driving eligibility
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}

// Switch example
let day = 3;

switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid");
}