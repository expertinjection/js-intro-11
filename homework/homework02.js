console.log('\n--------TASK-1--------\n');
console.log('This is my solution for Task-1\n');
//convert given strings to number data type and find  their sum,product,divison,subtraction, remainder and **
// number given is 5 , 2
let str1 = "5";
let str2 = "2";
// converstion opperation string to number, since both given number dose not have decimal i will use parseInt()
let strToNum1 = parseInt(str1);
let strToNum2 = parseInt(str2);
console.log(`The sum of ${strToNum1} and ${strToNum2} is = ${strToNum1+strToNum2}`);
console.log(`The product of ${strToNum1} and ${strToNum2} is = ${strToNum1*strToNum2}` );
console.log(`The division of ${strToNum1} and ${strToNum2} is = ${strToNum1/strToNum2}`);
console.log(`The subtraction of  ${strToNum1} and ${strToNum2} is = ${strToNum1-strToNum2}`);
console.log(`The remainder of ${strToNum1} and ${strToNum2} is = ${strToNum1%strToNum2}`);
console.log(`The exponentiation of ${strToNum1} and ${strToNum2} is = ${strToNum1**strToNum2}`);
console.log('\n--------TASK-2--------\n');
console.log('This is my solution for Task-2\n');
//convert given strings to number data type and find greatest and smallest values and the average and abs dif of them
let s1 ="200"
let s2 = "-50"
//convierstion 
let convS1 = parseInt(s1);
let convS2 = parseInt(s2);
// it is given that s1 is the greatest and s2 is the smallest but i will apply the method anyway.
console.log(`The greatest value is = `, Math.max(convS1,convS2));
console.log(`The smallest value is = `, Math.min(convS1,convS2));
// now we find the aveage 
console.log(`The aveage is =`,(convS1 + convS2) /2);
// finding the absolite diff
console.log(`The absolute difference is =`, Math.abs(convS1-convS2));
console.log('\n--------TASK-3--------\n');
console.log('This is my solution for Task-3\n');
//generate 2 random numbers between 1-50
let n1;
let n2;
n1 = Math.floor(Math.random()*50 -1 +1)+1
n2 = Math.floor(Math.random()*50 -1 +1)+1
console.log(n1,n2)
console.log(`The absolute difference between numbers is =`, Math.abs(n1-n2));
console.log('\n--------TASK-4--------\n');
console.log('This is my solution for Task-4\n');
//generate 5 random numbers between 1-50
let num1 = Math.floor(Math.random()*(50 -1 +1))+1;
let num2 = Math.floor(Math.random()*(50 -1 +1))+1;
let num3 = Math.floor(Math.random()*(50 -1 +1))+1;
let num4 = Math.floor(Math.random()*(50 -1 +1))+1;
let num5 = Math.floor(Math.random()*(50 -1 +1))+1;
//Test data
console.log(num1,num2,num3,num4,num5);
// find max and min and print the resualt 
console.log(`The max value =`,Math.max(num1,num2,num3,num4,num5));
console.log(`The min value =`,Math.min(num1,num2,num3,num4,num5));
console.log('\n--------TASK-5--------\n');
console.log('This is my solution for Task-5\n');
// generate 3 random numbers between 50 and 100 both inc
let b1 = Math.floor(Math.random()*(100 -50 +1))+50;
let b2 = Math.floor(Math.random()*(100 -50 +1))+50;
let b3 = Math.floor(Math.random()*(100 -50 +1))+50;
// print the numbers 
console.log(`The number 1 = ${b1}`);
console.log(`The number 2 = ${b2}`);
console.log(`The number 3 = ${b3}`);
// find the sum of numbers
let sum = b1 + b2 + b3;
console.log(`The sum of numbers is =  ${sum}`);
console.log('\n--------TASK-6--------\n');
console.log('This is my solution for Task-6\n');
// generates 3 random numbers between 1 and 100 both inc
let a1 = Math.floor(Math.random()*(100 -1 +1))+1;
let a2 = Math.floor(Math.random()*(100 -1 +1))+1;
let a3 = Math.floor(Math.random()*(100 -1 +1))+1;
//Test resualt 
console.log(a1,a2,a3);
// check and find if all numbers are more than 25 and return true if all  # greater than 25 otherwise false 
console.log(a1 > 25 && a2 > 25 && a3 > 25);
console.log('\n--------TASK-7--------\n');
console.log('This is my solution for Task-7\n');
// given name is let name ="David"; 
// length of the name 
let name = "David";
let leng = name.length;
console.log(`The length of the name is = ${leng}`);
// find and print the first character 
let fchar = name[0];
console.log(`The first character in the name is = ${fchar}`);
//find the last character of the name and print it 
let lchar = name.at(-1)
console.log(`The last character in the name is = ${lchar}`)
//Find the first 3 characters in the name and print them
let firstThree = name.slice(0,3)
console.log(`The first 3 characters in the name are = ${firstThree}`)
//Find the last 3 characters in the name and print them
let lastThree = name.slice(2,5)
console.log(`The last 3 characters in the name are = ${lastThree}`)