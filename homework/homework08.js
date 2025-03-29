console.log("\n--------TASK-1--------\n");

function hasLowerCase(string){
    for (let i = 0; i < string.length; i++){
        if (string[i] === string[i].toLowerCase()){
            return true;
        }
    }
    return false;
}
console.log(hasLowerCase('   g   '));

console.log("\n--------TASK-2--------\n");

const noZero = (array) => array.filter((nums) => nums !== 0);
console.log(noZero([1, 2, 0, 3, 4, 0, 5, 6]));

console.log("\n--------TASK-3--------\n");
const numberAndSquare =(array) => array.map((nums) => [nums, nums * nums]);
console.log(numberAndSquare([1, 2, 3]));

console.log("\n--------TASK-4--------\n");
const containsValue = (array, string) => array.includes(string);
console.log(containsValue(['hello', 'world'], 'Hello'));

console.log("\n--------TASK-5--------\n");
const reverseSentence = (string) => {
    const sentence =  string.trim().split(' ')
    if( sentence.length < 2){
        return 'There is not enough words!';
    }
    return sentence.reverse().join(' ');;
}
console.log(reverseSentence('Hello'));

console.log("\n--------TASK-6--------\n");

const removeStringSpecialsDigits = (string) => {
    let  result = '';
    for (let i = 0; i < string.length; i++){
        if (string[i] >= 'a' && string[i] <= 'z' || string[i] >= 'A' && string[i] <= 'Z'){
            result += string[i];
        }
    }
    return result;
}
console.log(removeStringSpecialsDigits('He23l!@lo'));

console.log("\n--------TASK-7--------\n");
const removeArraySpecialsDigits = (array) => {
    let result = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] >= 'a' && array[i] <= 'z' || array[i] >= 'A' && array[i] <= 'Z'){
            result.push(array[i]);
        }
    }
    return result;
}
console.log(removeArraySpecialsDigits([1, 'a', 2, 'b', 3, 'c', '!@#']));

console.log("\n--------TASK-8--------\n");

const getCommons = (array1, array2) => {
    let result = [];
    for (let i = 0; i < array1.length; i++){
        if (array2.includes(array1[i])){
            result.push(array1[i]);
        }
    }
    return result;
}
console.log(getCommons([1, 2, 3], [2, 3, 4]));

console.log("\n--------TASK-9--------\n");

function noXInVariables(arr) {
    return arr
      .filter(element => {
        for (let char of element) {
          if (char !== 'x' && char !== 'X') {
            return true;
          }
        }
        return false;
      })
      .map(element => {
        let result = '';
        for (let char of element) {
          if (char !== 'x' && char !== 'X') {
            result += char;
          }
        }
        return result;
      });
  }
console.log(noXInVariables(['x', 'a', 'X', 'b', 'cxhsfeXF']));

