console.log("\n--------TASK-1--------\n");

const countPos = (array) => {
  let posNums = 0;
  array.filter((num) => {
    if (num > 0) posNums++;
  });
  return posNums;
};
console.log(countPos([1, 2, 3, -1, -2, -3, 0])); // 3

console.log("\n--------TASK-2--------\n");

const countA = (str) => {
  let count = 0;
  for (const letter of str) {
    if (letter === "a" || letter === "A") count++;
  }
  return count;
};
console.log(countA("techGlobal is a QA bootcamp"));

console.log("\n--------TASK-3--------\n");

const countVowels = (str) => {
  let count = 0;
  let vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) count++;
  }
  return count;
};

console.log(countVowels("Hello"));

console.log("\n--------TASK-4--------\n");
const countConsonants = (word) => {
  let count = 0;
  let vowels = "aeiou";
  for (let i = 0; i < word.length; i++) {
    if (!vowels.includes(word[i].toLowerCase())) count++;
  }
  return count;
};
console.log(countConsonants(" "));

console.log("\n--------TASK-5--------\n");

const countWords = (word) => word.trim().split(" ").length;
console.log(countWords("           Hello World                  "));
console.log(countWords("Hello World"));
console.log(countWords("1 2 3 4"));

console.log("\n--------TASK-6--------\n");

const factorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};
console.log(factorial(5));

console.log("\n--------TASK-7--------\n");

const isPalindrome = (word) => {
  let PalindWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    PalindWord += word[i];
  }
  return PalindWord === word;
};
console.log(isPalindrome("madam"));

console.log("\n--------TASK-8--------\n");

const countMultipleWords = (array) => {
  let wordCount = 0;
  array.filter((word) => {
    if (word.includes(" ")) wordCount++;
  });
  return wordCount;
};
console.log(
  countMultipleWords(["Hello", "World", "Hello World", "Hello World Hello"])
);

console.log("\n--------TASK-9--------\n");

const count3OrLess = (word) => {
  let count = 0;
  word.split(" ").filter((word) => {
    if (word.length <= 3) count++;
  });
  return count;
};
console.log(count3OrLess("777 hey Hello ace"));

console.log("\n--------TASK-10--------\n");

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
console.log(isPrime(0));
console.log(isPrime(-1));

console.log("\n--------TASK-11--------\n");

const add = (array1, array2) => {
  let sum = 0;
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i] + array2[i]);
  }
  return result;
};
console.log(add([1, 2, 3], [4, 5, 6]));

console.log("\n--------TASK-12--------\n");

const removeExtraSoace = (word) => word.replace(/\s+/g, " ").trim();

console.log(removeExtraSoace("    hello    word        "));

console.log("\n--------TASK-13--------\n");

function findClosestTo10(array){
  let closestNumber = 0;
  let smallestDiff = Infinity;
  for(const number of array){
    if(number === 10) continue;
    let diffrence = Math.abs(number - 10);
    if (diffrence < smallestDiff|| (diffrence === smallestDiff && number <closestNumber)){
      closestNumber = number
      smallestDiff = diffrence
    }
  }
  return closestNumber;
}
console.log(findClosestTo10([3, 7, 15, 10]));

console.log("\n--------TASK-14--------\n");

function isEmailValid(email){
  if(email.includes(' ')){
    return true;
  }
  let splited = email.split('@');
  if (splited.length !== 2 || splited[0].length < 2){
    return false;
  }
  let dotLoc = splited[1].split('.');
  if (dotLoc.length !==2 || dotLoc[0].length < 2 || dotLoc[1].length < 2){
    return false
  }
  return true;
}
console.log(isEmailValid('haitham@TechGlobal.com'))
console.log("\n--------TASK-15--------\n");

function isPasswordValid(password){
  if(password.length < 8 || password.length > 16){
    return false;
  }
  const hasDigit = /[0-9]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasSpace = /\s/.test(password);

  return hasDigit && hasUppercase && hasLowercase && hasSpecialChar && !hasSpace;

};
console.log(isPasswordValid('Haitham95$'));
console.log(isPasswordValid('Haitham 95$'));
console.log(isPasswordValid('Haitham$'));
console.log(isPasswordValid('Haitham95'))
console.log(isPasswordValid('H95$'));
console.log(isPasswordValid('Haithamlaithalbayatitahir95$'))



