// import get ramdom numner function  from utils 
const {getRandomNumber} = require('./../utils/MathHelper.js')
console.log('\n--------TASK-1--------\n');
//gen 3 random numbers between 1 and 100 
let number1 = getRandomNumber(1,100)
let number2 = getRandomNumber(1,100)
let number3 = getRandomNumber(1,100)
//Test data
console.log(number1,number2,number3)
// get the average 
let avergeNum = Math.floor(((number1+number2+number3)/3))
// test data 
console.log(avergeNum)
// using if statment to check the if the averge is >= 50 or not  
if (avergeNum>=50) {
    console.log('true')
}
else{
    console.log('false')
}

console.log('\n--------TASK-2--------\n');
//gen 3 random numbers between 1 and 3 
let num1 = getRandomNumber(1,3)
let num2 = getRandomNumber(1,3)
let num3 = getRandomNumber(1,3)
// Test data
console.log(num1,num2,num3)
//using if statment to check the the result 
if(num1!== num2 && num1 !== num3 && num2 !== num3){
    console.log('NO MATCH')
}
else if(num1 === num2 && num2 === num3){
    console.log('TRIPLE MATCH')
}
else{
    console.log('DOUBLE MATCH')
}
console.log('\n--------TASK-3--------\n');
// greating the function
function hasA(word){
    // check the conditions  i can do it witout if statment but sice our topic is if statments 
     if (word.includes('a') || word.includes('A')){
     return true
    } 
    else{
     return false
    }
};
console.log(hasA('ETRAV'));


console.log('\n--------TASK-4--------\n');
// creating the function 
function doubleOrTripleWord(word){
    //check the condistion 
    if (word.length % 2 === 0) {
        return word + word + word 
    }
    else{
        return word + word 
    }
};
console.log(doubleOrTripleWord('22'))



console.log('\n--------TASK-5--------\n');
//creating the function and apply the reqwirements 
function firstWord(word){
    let array = word.split(' ')
    if(word === '' || word ==='  '){
        return ''
    }
    else{
        return array[0]

    }  
}
//Test
console.log(firstWord('I like JavaScript'))


console.log('\n--------TASK-6--------\n');
function lasttWord(word){
    let array = word.split(' ')
    if(word === '' || word ==='  '){
        return ''
    }
    else{
        return array[array.length-1]

    }  
}
//Test
console.log(lasttWord('Hello World'))

console.log('\n--------TASK-7--------\n');
function firstlastWord(word){
    let array = word.split(' ')
    let fword = array[0];
    let lword = array[array.length-1]
    if(word === '' || word === '  '){
        return ''

    }
    else {
        return fword + lword
    }

};
console.log(firstlastWord('haitham'));

console.log('\n--------TASK-8--------\n');
function startVowel(word){
    // take the first char using charAt not at or the index number so we can deal with undifiend 
    let firstChar = word.charAt(0).toLowerCase();
    if (firstChar === 'a' || firstChar === 'e' || firstChar === 'i' || firstChar === 'o' || firstChar === 'u') {
        return true
    } 
    else if(word === '' || '  '){
        return false
    }
    else{
    return false 
    }
};

console.log(startVowel('Ahmed'))
console.log('\n--------TASK-9--------\n');
// creat the function
function swap4(word){
    // get first and last four chars from the string  and middel chars also 
    let firstFourChars = word.slice(0,4);
    let lastFourChars = word.slice(word.length -4);
    let midChars = word.slice(4,word.length -4);
    //apply the givein conditions 
    if (word.length < 8)  return '';
    return lastFourChars + midChars +firstFourChars 
};
// test data 
console.log(swap4('JavaScript'))
console.log('\n--------TASK-10--------\n');
// creat the function 
function swapFirstLastWord(word){
    // i use tirm function so i can deal with whitespaces when string provided 
    word = word.trim();
    let fw = word.slice(0,word.indexOf(' '))
    let lw = word.slice(word.lastIndexOf(' ')+1) // +1 so we can get rid of the space
    let midw = word.slice(word.indexOf(' '),word.lastIndexOf(' ')+1)
    // here i use split function to get an arry and apply the reqwirment on it 
    let arry1 = word.split(/\s+/);
    if (arry1.length < 2) {
        return ''
    } else {
        return lw + midw + fw 
    }
}
//Test Data 
console.log(swapFirstLastWord('foo bar foo bar'))