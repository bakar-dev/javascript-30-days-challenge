// Activity 1 : If Else statement

const num = 1;
if (num > 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

const age = 18;
if (age > 18) {
  console.log("Eligible to Vote");
} else {
  console.log("Not eligible to vote");
}

// Activity 2 : Nested If Else statement
const n1 = 10;
const n2 = 20;
const n3 = 30;

if (n1 > n2 && n1 > n3) {
  console.log("Number 1 is greater.");
} else if (n2 > n1 && n2 > n3) {
  console.log("Number 2 is greater.");
} else {
  console.log("Number 3 is greater.");
}

// Activity 3 : Switch Case
const day = 5;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thrusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;

  default:
    console.log("Sunday");
    break;
}

// Activity 4 : Conditional Ternary operator
const odd = 1;
console.log(odd % 2 === 0 ? "Even" : "Odd");

// Activity 5 : Multiple Conditinal
const year = 2016;
console.log(
  "Is leap year: ",
  year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
);
