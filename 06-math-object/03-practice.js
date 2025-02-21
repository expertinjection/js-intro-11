/*
Calculate the absolute difference between max and min of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the greatest and the smallest numbers and print their absolute difference.

Examples:
3,5,2 ->3 
7,3,1 ->6 
5,5,5 ->0 
1,10,9 ->9 
10,1,2 ->9


PSEUDO CODE
1. Generate 3 random numbers
2. Find max and min numbers among the random numbers
3. Calculate and output max - min
*/
let num1;
let num2;
let num3;
 num1 = Math.floor(Math.random() * 10) + 1;
 num2 = Math.floor(Math.random() * 10) + 1;
 num3 = Math.floor(Math.random() * 10) + 1;
let max = Math.max(num1, num2, num3);
let min = Math.min(num1, num2, num3);
let absDifference = max - min;
console.log(`the random numbers is:  ${num1}, ${num2}, ${num3} , and the absolute difference  is: ${absDifference}`)


/* 
Akin explanation

Calculate the absolute difference between max and min of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the greatest and the smallest numbers and print their absolute difference.

Examples:
3,5,2 ->3 
7,3,1 ->6 
5,5,5 ->0 
1,10,9 ->9 
10,1,2 ->9


PSEUDO CODE
1. Generate 3 random numbers bt 1 and 10 (both inclusive)
2. Find max and min numbers among the random numbers
3. Calculate and output max - min
*/
/*
let r1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let r2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let r3 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

console.log(`Random numbers are  = ${r1}, ${r2}, ${r3}`);

let max = Math.max(r1, r2, r3); 
let min = Math.min(r1, r2, r3);

console.log(`Max number is ${max} and min number is ${min}`);

let result = max - min;

console.log(`The result = ${result}`);
*/