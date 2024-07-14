// Activity 1   -   Variable declaration

var varNum = 1;
console.log("Var Num:", varNum);

let letString = "Hello";
console.log("Let String:", letString);

// Activity 2   -   Constant declaration

const constBool = true;
console.log("Const Bool:", constBool);

// Activity 3   -   Data types

const array = [1, 2, 3];
console.log("Type of array: ", typeof array);

const obj = { a: 1, b: 2, c: 3 };
console.log("Type of object: ", typeof obj);

// Activity 4   -   Reassigning variables

let num = 1;
console.log("Before Reassign: ", num);
num = 2;
console.log("After Reassign: ", num);

// Activity 5   -   Reassigning const

const num2 = 1;
console.log("Before Reassign to Const: ", num2);
num2 = 2;
console.log("After Reassign to Const : ", num2); // TypeError: Assignment to constant variable.
