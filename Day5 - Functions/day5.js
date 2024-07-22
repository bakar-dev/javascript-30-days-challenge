// Activity 1 - function declaration

function evenOrOdd(num) {
  console.log("Number is ", num % 2 === 0 ? "Even" : "Odd");
}

function square(num) {
  console.log(num * num);
}

evenOrOdd(8);
square(6);

// Activity 2 - function expression

const maxofTwo = function (a, b) {
  console.log(a > b ? "First is greater" : "Second is greater");
};

const concatStrings = function (a, b) {
  return a + b;
};

maxofTwo(5, 6);
console.log(concatStrings("Hello", "World!"));

// Activity 3 - arrow function
const sum = (a, b) => a + b;
const isCharacterExistInString = (str, character) => str.includes(character);

// Activity 4 - function default paramter

function evenOrOdd(num1, num2 = 6) {
  return num1 * num2;
}

function personInfo(name, age = 18) {
  console.log("Hello ", name, age);
}

// Activity 5 - Higher order function

function repeatFunction(fn, n = 6) {
  for (let index = 0; index < n; index++) {
    fn();
  }
}
repeatFunction(() => console.log("Hello"), 5);

function applyFunc(fn1, fn2, value) {
  return fn2(fn1(value));
}

const double = (num) => num + num;
const product = (num) => num * num;
console.log(applyFunc(double, product, 2));
