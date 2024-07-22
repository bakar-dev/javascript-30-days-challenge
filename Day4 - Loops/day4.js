// Activity 1 - For Loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log("5 * " + i + " = ", 5 * i);
}

// Activity 2 - While Loop
let j = 1;
let sum = 0;
while (j <= 10) {
  sum += j;
  j++;
}

console.log("Sum of 1 to 10: ", sum);

// Activity 3 - Do While Loop
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

// factorial
let num = 5;
let result = 1;
do {
  result *= num;
  num--;
} while (num >= 1);
console.log("Factorial is: " + result);

// Activity 4 - Nested stars using for loop
for (let n = 0; n < 5; n++) {
  let pattern = "";
  for (let m = 0; m <= n; m++) {
    pattern += "*";
  }
  console.log(pattern);
}

// Activity 5 - Loop control statemnets
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}
