// import get ramdom numner function  from utils 
const {getRandomNumber} = require('./../utils/MathHelper')
console.log('\n--------TASK-1--------\n');
for (let i = 1; i <= 100; i++) { 
    if (i % 7 === 0) console.log(i) 
};
console.log('\n--------TASK-2--------\n');

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0 && i % 3 === 0) console.log(i)
};
console.log('\n--------TASK-3--------\n');
for (let i = 100; i >= 50; i--) {
    if (i % 5 === 0) console.log(i)
};
console.log('\n--------TASK-4--------\n');
for (let i = 0; i <= 7; i++){
    console.log(`The square of ${i} is = `, i**2)
};
console.log('\n--------TASK-5--------\n');
let sum = 0;
for (let i = 0; i <= 10; i++){
    sum += i
};
console.log(sum);
console.log('\n--------TASK-6--------\n');
let randomNum = getRandomNumber(1,10);
console.log(randomNum);
let factorial = 1;
for (let i = 1; i <= randomNum; i++){
    factorial *= i
};
console.log(factorial);
console.log('\n--------TASK-7--------\n');
let attempts = 0;
let randomNum1;
while (randomNum1 % 5 !== 0){
    randomNum1 = getRandomNumber(1,100);
    attempts++;
};
console.log(`The random number is ${randomNum1} and it took ${attempts} attempt/s to generate it.`);


console.log('\n--------TASK-8--------\n');
const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania'];
console.log(countries);
console.log(countries.slice().sort()) // i used slice to avoid changing the original array.
console.log(countries);


console.log('\n--------TASK-9--------\n');

const cartoonDogs = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];
console.log(cartoonDogs);
console.log(cartoonDogs.includes('Pluto'));

console.log('\n--------TASK-10--------\n');

const cartoonCats = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];
console.log(cartoonCats);
console.log(cartoonCats.includes('Garfield') && cartoonCats.includes('Felix'));

console.log('\n--------TASK-11--------\n');

const Nums =[10.5, 20.75, 70, 80, 15.75];
console.log(Nums);
for (let i = 0; i < Nums.length; i++){
    console.log(Nums[i]);
};

console.log('\n--------TASK-12--------\n');
const objects = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
console.log(objects);
let elementsStartWithPorB = 0;
for (let i = 0; i < objects.length; i++){
    if (objects[i].toUpperCase().startsWith('P') || objects[i].toUpperCase().startsWith('B')){
        elementsStartWithPorB++;
    }
};
console.log(elementsStartWithPorB);
let elementsWithBookOrPen = 0;
for (let i = 0; i < objects.length; i++){
    if (objects[i].toLowerCase().includes('book') || objects[i].toLowerCase().includes('pen')){
        elementsWithBookOrPen++;
    }
};
console.log(elementsWithBookOrPen);

console.log('\n--------TASK-13--------\n');

const numbers1 = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
console.log(numbers1);
let moreThanTen = 0;
let lessThanTen = 0;
let equalToTen = 0;
for (let i = 0; i < numbers1.length; i++){
    if (numbers1[i] > 10){
        moreThanTen++;
    } else if (numbers1[i] < 10){
        lessThanTen++;
    } else {
        equalToTen++;
    }
};
console.log(`Elements more than 10 = ${moreThanTen}`);
console.log(`Elements less than 10 = ${lessThanTen}`);
console.log(`Elements equal to 10 = ${equalToTen}`);

console.log('\n--------TASK-14--------\n');

const firstArray = [ 5, 8, 13, 1, 2 ];
const secondArray = [ 9, 3, 67, 1, 0 ];
console.log(`1st array is =` , firstArray);
console.log(`2nd array is =` , secondArray);
const maxArray = [];
for (let i = 0; i < firstArray.length; i++){
    maxArray.push(Math.max(firstArray[i], secondArray[i]));
};
console.log(`3d array is = `,maxArray);

console.log('\n--------TASK-15--------\n');
/*
write function named as firstDuplicate() which takes an 
array argument and returns the first duplicated number in the 
array when invoked.
NOTE: Make your code dynamic that works for any array and 
return -1 if there are no duplicates in the array. For two 
elements to be considered as duplicated, value and data types 
of the elements must be same.
*/
// to be honset i used  AI to solve this task i had problem  with the logic  i need watch the way you solve it in the class
const firstDuplicate = (arr) => {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++){
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
            duplicates.push(arr[i]);
        }
    }
    return duplicates.length === 0 ? -1 : duplicates[0];
};
console.log(firstDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]));

console.log('\n--------TASK-16--------\n');


function getDuplicates(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++){
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
            duplicates.push(arr[i]);
        }
    }
    return duplicates;
};
console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]));

console.log('\n--------TASK-17--------\n');

function reverseStringWords(str) {
    let words = str.split(' ');
    let reversedWords = [];
    for (let i =0 ; i < words.length; i++){
        reversedWords.push(words[i].split('').reverse().join(''));
    }
    return reversedWords.join(' ');
};
console.log(reverseStringWords("Hello World") );

console.log('\n--------TASK-18--------\n');


function getEvens(num1, num2){
    let evens = [];
    for (let i = Math.min(num1,num2); i <= Math.max(num1,num2); i++){
        if (i % 2 === 0){
            evens.push(i);
        }
    }
    return evens;

};
console.log(getEvens(17,5));

console.log('\n--------TASK-19--------\n');

function getMultipleOf5(n1, n2){
    let numDivisibleBy5 = [];
    for (let i = Math.min(n1,n2); i <= Math.max(n1,n2); i++){
        if (i % 5 === 0){
            numDivisibleBy5.push(i);
        }
    }
    return numDivisibleBy5;

};
console.log(getMultipleOf5(3,17));

console.log('\n--------TASK-20--------\n');


function fizzBuzz(number1, number2){
    let result = '';
    for (let i = Math.min(number1,number2); i <= Math.max(number1,number2); i++){
        if (i % 3 === 0 && i % 5 === 0){
            result += 'FizzBuzz | ';
        } else if (i % 3 === 0){
            result += 'Fizz | ';
        } else if (i % 5 === 0){
            result += 'Buzz | ';
        } else {
            result += i + ' | ';
        }
    }
    return result;
};
console.log(fizzBuzz(13,18));
