/*
Task01

Requirement:
Write a program that extracts expected values from a given String using JS 
String functions.

"I like apples and oranges"  -> "APPLE"
"JavaScript is not a scripting programming language"   -> "JavaScript"
"I don't like books"  -> "I like books"
*/

let str1 = "I like apples and orange";
let str2 = "JavaScript is not a scripting programming language";
let str3 = "I don't like books";

str1=str1.slice(7,12).toUpperCase();
str2=str2.slice(0,str2.indexOf(' '));
//str2=str2.split(' ')[0]
str3=str3[0]+str3.slice(7,-1)
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str3.slice(7,-1))
/*
Task02

Requirement:
Assume that you are given a String of any length. 
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters 
-if it has any vowel, then print true
-Else, print false
Vowels = a, e, i, u, o, A, E, I, U, O

Test Data 1: let s1 = "JavaScript";
Expected Result 1:
The length is = 10
The first char is = J
The last char is = t
true

Test Data 2: let s1 = "";
Expected Result 2:
The length is = 0
The first char is = undefined
The last char is = undefined
false
*/

let s1 = "javasec";
len = s1.length
firstchar = s1[0]
//lastchar = s1.slice(-1)
lastchar = s1[s1.length-1]
// check if it has vowels  i = ignor cases 
let hasVowels = /[aeiou]/i.test(s1);
console.log(lastchar)

/*
Task03

Requirement:
Assume that you are given a String of any odd length. 
Find the middle character for the given String. 

Test Data 1: let s2 = "x";
Expected Result 1: "x"

Test Data 2: let s2 = "abc";
Expected Result 2: "b"

Test Data 3: let s2 = "civic";
Expected Result 3: "v"
*/

let s2 = "abdcs";
console.log(s2[(s2.length-1)/2])
/*
Task04

Requirement:
Assume that you are given a String of any even length including empty. 
Find the middle 2 characters for the given String. 

Test Data 1: let s3 = "";
Expected Result 1: ""

Test Data 2: let s3 = "abcd";
Expected Result 2: "bc"

Test Data 3: let s3 = "JavaScript";
Expected Result 3: "Sc"


Toyota -> yo
*/

let s3 = '';
s3=s3[s3.length/2-1] +s3[s3.length/2]
console.log(s3)
/*
Task05

Requirement:
Write a program that divides the given String. Assume the length of the 
String will at least be 4.
-Find and print the first two characters
-Find and print the last two characters 
-Find and print all the middle characters other than first and last 2 characters

Test Data 1: let s4 = "abcd";
Expected Result 1:
The first 2 characters are = ab
The last 2 characters are = cd
The other characters are = ''

Test Data 2: let s4 = "JavaScript";
Expected Result 2:
The first 2 characters are = Ja
The last 2 characters are = pt
The other characters  are = vaScri
*/

let s4 = 'JavaScript';
let firstc= s4.slice(0,2)
let lasrc = s4.slice(-2)
console.log(firstc)
console.log(lasrc)
let otherc = s4.slice(2,-2)
console.log(otherc)
/*
Task06

Requirement:
Assume that you are given a String that has at least 2 characters. 
If first 2 and last 2 characters are same, then print true. Otherwise, print 
false.

Test Data 1: let s5 = "ab";;
Expected Result 1: true

Test Data 2: let s5 = "abcd";
Expected Result 2: false

Test Data 3: let s5 = "12ab12";;
Expected Result 1: true

Test Data 4: let s5 = "JavaScript";
Expected Result 4: false
*/

let s5 = 'ab';
let firt2 = s5.slice(0,2)
let last2 = s5.slice(-2)
console.log(s5)
console.log( firt2 , last2)
if (firt2 === last2) {
    console.log('True');
    
}
else{
    console.log('False')
}
/*
Task07

Requirement:
Write a program that gets rid of first and last characters of given two String values. 
Then, add these two String values to each other and print the result. 

Test Data 1:
let s61 = "orange";
let s62 = "6";
Expected Result 1: rang

Test Data 2:
let s61 = "1234";
let s62 = "Green";
Expected Result 2: 23ree

Test Data 3:
let s61 = "123456";
let s62 = "Blue";
Expected Result 3: 2345lu

Test Data 4:
let s61 = "Yellow";
let s62 = "Red";
Expected Result 4: elloe
*/

let s61 = 'orange';
let s62 = '6';
s61 = s61.slice(1,-1)
s62 = s62.slice(1,-1)
let n = s61 +s62 
console.log(n);
/*
Task08

Requirement:
Write a program that checks if a given String starts and ends with xx. 
-If given String starts and ends with xx, then print true. 
-Otherwise, print false

Test Data 1: let s7 = "";
Expected Result 1: false

Test Data 2: let s7 = "red";
Expected Result 2: false

Test Data 3: let s7 = "green";
Expected Result 3: false

Test Data 4: let s7 = "xxbluexx";
Expected Result 4: true
*/

let s7 = '';
 s7 = s7.startsWith('xx') && s7.endsWith('xx') 
 console.log(s7)
/*
Task09

Requirement:
Write a program that swaps the first and last word of a given sentence as a String. 

Test Data 1: let s8 = "";
Expected Result 1: ""

Test Data 2: let s8 = " ";
Expected Result 2: " "

Test Data 3: let s8 = "I like Apple";
Expected Result 3: "Apple like I"

Test Data 4: let s8 = "JavaScript is nice to learn";
Expected Result 4: "learn is nice to JavaScript"
*/

let s8 = 'JavaScript is nice to learn';
fw = s8.slice(0,s8.indexOf(' '))
lw = s8.slice(s8.lastIndexOf(' ')+1) // +1 so we can get rid of the space
mid = s8.slice(s8.indexOf(' '),s8.lastIndexOf(' ')+1)
console.log(lw + mid + fw )

/*
Task10

Requirement:
Write a program that counts the number of words in a given sentence as a String. 
Assume you will not be given redundant whitespaces and at least one word.

Test Data 1: let s9 = " Good morning";
Expected Result 1: 2

Test Data 2: let s9 = "Hello    ";
Expected Result 2: 1

Test Data 3: let s9 = "I like Apple";
Expected Result 3: 3

Test Data 4: let s9 = "JavaScript is nice to learn";
Expected Result 4: 5
*/
s9 ='JavaScript is nice to learn'
s9 = s9.trim().split(/\s+/).length // /\s+/ is to get rid of any number of space 

console.log(s9)
