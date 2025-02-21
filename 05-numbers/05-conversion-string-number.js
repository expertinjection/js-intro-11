// Convert string to a number - common

let price = '100.99';

//let newPrice = parseInt(price) + 10; // 110
let newPrice = parseFloat(price) + 10; 

console.log(newPrice);

// Convert number to a string - rare
let count = 10;

console.log(count + 5); // 15
console.log(count.toString() + 5); // '105'
console.log(typeof (String(count) + 5)); // '105'
console.log(typeof(count.toString()))
