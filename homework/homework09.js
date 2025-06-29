console.log("\n--------TASK-1--------\n");
const fizzBuzz1 = (num) =>{
    if(num % 3 === 0 && num % 5 === 0){
        return 'FizzBuzz';
    }else if(num % 3 === 0){
        return 'Fizz';
    }else if(num % 5 === 0){
        return 'Buzz';
    }else{
        return num;
    }
}
console.log(fizzBuzz1(0));

console.log("\n--------TASK-2--------\n");
const fizzBuzz2 = (num) => {
    let result = [];
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        }
        else if (i % 3 === 0) {
            result.push('Fizz');
        }
        else if (i % 5 === 0) {
            result.push('Buzz');
        }
        else {
            result.push(i);
        }
    }
    return result;
}
console.log(fizzBuzz2(5));

console.log("\n--------TASK-3--------\n");
const findSumNumbers = (string) => {
    let nums = string.match(/\d+/g) || [];
    return nums.reduce((acc, curr) => acc + parseInt(curr), 0);
}
console.log(findSumNumbers('a1b4c 6#'));
console.log(findSumNumbers('525'));

console.log("\n--------TASK-4--------\n");

const findBiggestNumber = (string) => {
    let nums = string.match(/\d+/g) || [];
    return Math.max(...nums.map(num => parseInt(num)));
}
console.log(findBiggestNumber('a1b4c 6#'));

console.log("\n--------TASK-5--------\n");

const countOccurrencesOfCharacters = (string) => {
    let charCount = {};
    for (let char of string) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    let result = '';
    for (let char in charCount) {
        result += charCount[char] + char;
    }

    return result;
}
console.log(countOccurrencesOfCharacters('aAbbcc'));

console.log("\n--------TASK-6--------\n");

const fibonacciSeries1 = (n) => {
let fibonacci1 = [ 0, 1, 1, 2, 3, 5, 8, 13, 21]
if (n <= 0) {
    return [];
}
for (let i = 1; i < n; i++) {
    fibonacci1.push(fibonacci1[i - 1] + fibonacci1[i]);
}
return fibonacci1.slice(0, n);
}
console.log(fibonacciSeries1(9));

console.log("\n--------TASK-7--------\n");
const fibonacciSeries2 = (n) => {
    if (n === 1) {
        return 0;
    }
    if (n === 2) {
        return 1;
    }
    let a = 0;
    let b = 1;
    let result;
   for (let i = 3; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }
    return result;
}
console.log(fibonacciSeries2(9));
console.log("\n--------TASK-8--------\n");

const findUniques = (arr1, arr2) => {
    if (arr1.length === 0 && arr2.length === 0) {
        return [];
    };
    if (arr1.length === 0) {
        return arr2;
    };
    if (arr2.length === 0) {
        return arr1;
    };
    let result  = [];
    let combined = arr1.filter(num => arr2.includes(num));
    let unique1 = arr1.filter(num => !combined.includes(num));
    let unique2 = arr2.filter(num => !combined.includes(num));
    result = unique1.concat(unique2);
    return result;
}
console.log(findUniques([1, 2, 3], [1, 2, 3]));

console.log("\n--------TASK-9--------\n");

const isPowerOf3 = (number) => {
    if (number < 1) {
        return false;
    }
    while (number % 3 === 0) {
        number /= 3;
    }
    return number === 1;
}
console.log(isPowerOf3(3)); 