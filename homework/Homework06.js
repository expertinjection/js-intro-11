
console.log("\n--------TASK-1--------\n");

const noSpace = (str) => str.replaceAll(" ", "");
console.log(noSpace(" Hello World   "));

console.log("\n--------TASK-2--------\n");

function replaceFirstLast(str) {
  let word = str.trim();
  if (word.length < 2) {
    return "";
  } else {
    return word[word.length - 1] + word.slice(1, -1) + word[0];
  }
};
console.log(replaceFirstLast("Tech Global"))
console.log("\n--------TASK-3--------\n");

function hasVowel(str) {
  let word = str.toLowerCase();
  const vowels = ["a", "e", "o", "u", "i"];
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) return true;
  }
  return false;
};
console.log(hasVowel("Tech Global"));

console.log("\n--------TASK-4--------\n");


 function checkAge(yearOfBirth) {
  const age = 2023 - yearOfBirth;
  if (age < 16) return "AGE IS NOT ALLOWED";
  if (age <= 120) return "AGE IS ALLOWED";
   return "AGE IS NOT VALID";
};

   console.log(checkAge(2015));
   console.log(checkAge(2007));
   console.log(checkAge(2050));
   console.log(checkAge(1920));
   console.log(checkAge(1800));


 console.log("\n--------TASK-5--------\n");
function averageOfEdges(...args) {
  max = Math.max(...args);
  min = Math.min(...args);
  avg = (min + max) / 2;
  return `The averge of ${args} is ${avg}`;
};
console.log(averageOfEdges(-2, -2, 10));

console.log("\n--------TASK-6--------\n");

 function noA(arr) {
  return arr.map((element) =>
    element.startsWith("A") || element.startsWith("a") ? "###" : element
  );
};
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));
console.log(noA(["javascript", "hello", "123", "xyz"]));
console.log(noA(["apple", "123", "ABC", "javascript"]));


console.log("\n--------TASK-7--------\n");

function no3and5(arr) {
  return arr.map((el) => {
    if (el % 15 === 0) return 101;
    if (el % 5 === 0) return 99;
    if (el % 3 === 0) return 100;
    return el;
  });
};
console.log(no3and5([3, 4, 5, 6]))

console.log("\n--------TASK-8--------\n");
function countPrimes(arr) {
  let count = 0;
  arr.map((num) => {
    if (num < 2) return false;
    let primes = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        primes = false;
      }
    };
    if (primes) count++;
  });
  return count;
};
console.log(countPrimes([-10, -3, 0, 1]));
console.log(countPrimes([7, 4, 11, 23, 17]));
console.log(countPrimes([41, 53, 19, 47, 67]));

console.log("\n--------TASK-9--------\n");


function removeDuplicates(arr){
    const newArr = [];
    arr.forEach(el =>{
        if (!newArr.includes(el)){
            newArr.push(el)
        }
    });
    return newArr
};
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));

console.log("\n--------TASK-9 Diffrent way--------\n");

function removeDuplicates(arr){
   return arr.reduce((acc, curr) =>  {
    if (!acc.includes(curr)){
      acc.push(curr);
    }
    return acc;
   }, []);
}
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));

console.log("\n--------TASK-10--------\n");

function isDateFormatValid(str){
  let parts = str.split('/');
  if (parts.length !== 3){
    return false;
  }
  if (parts[0].length !== 2 ||parts[0] > 12|| parts[1].length !== 2 ||parts[1] > 31 || parts[2].length !== 4) {
    return false;
}
  return true;
}

console.log(isDateFormatValid(''))
console.log(isDateFormatValid('15/30/2020'))
console.log(isDateFormatValid('10-30-2020 '))
console.log(isDateFormatValid('10/02/2020'))

console.log("\n--------TASK-11--------\n");

function secondMax(arr) {
  const max = Math.max(...arr);
  const filteredArr = arr.filter(num => num !== max);
  if (filteredArr.length === 0) {
    return arr[0];
  }
  return Math.max(...filteredArr);
}
console.log(secondMax([7, 4, 4, 4, 23, 23, 23]))
console.log(secondMax([10]))
console.log(secondMax([3, 4, 5, 6])) 

console.log("\n--------TASK-12--------\n");
function secondMin(arr) {
  const min = Math.min(...arr);
  const filteredArr = arr.filter(num => num !== min);
  if (filteredArr.length === 0) {
    return arr[0];
  }
  return Math.min(...filteredArr);
}
console.log(secondMin([7, 4, 4, 4, 23, 23, 23]))
console.log(secondMin([10]))
console.log(secondMin([3, 4, 5, 6])) 
console.log("\n--------TASK-13--------\n");
// i used AI for TASK 13 need to see how to solve it in the class
function mostRepeated(arr){
  const countEl = []
  arr.forEach(el => {
    countEl[el] = (countEl[el] || 0) + 1;
  });
  let mostRepeatedEl = arr[0];
  let maxCount = countEl[mostRepeatedEl];
  for(const element in countEl){
    if (countEl[element] > maxCount){
      mostRepeatedEl = element;
      maxCount = countEl[element];
    }
  }
  return mostRepeatedEl;

}
console.log(mostRepeated([9, 1, 1, 8, 1])) 