console.log("\n--------TASK-1--------\n");
function hasUpperCase(string){
    return string.toLowerCase() !== string;
}

console.log(hasUpperCase('Abc'));
console.log(hasUpperCase("$125.0"));
console.log("\n--------TASK-2--------\n");
function noDigit(string){
    let arr = string.split('');
    let res = arr.filter(el => isNaN(el));
    return res.join('');
}
console.log(noDigit('2Hello5World'));

console.log("\n--------TASK-3--------\n");
function noVowel(string){
    let arr = string.split('');
    let res = arr.filter(el => !'aeiou'.includes(el.toLowerCase()));
    return res.join('');
}
console.log(noVowel('TechGlobal'));

console.log("\n--------TASK-4--------\n");
function no13(arr){
    return arr.map(el => el === 13 ? 0 : el);
}
console.log(no13([5, 4, 3, 13, 13, 1, 13]));

console.log("\n--------TASK-5--------\n");
 function middleInt(num1, num2, num3){
    let array = [num1, num2, num3];
    return array[1];
 }
 console.log(middleInt(1, 2, 3));
 console.log(middleInt(2, 1, 3));

 console.log("\n--------TASK-6--------\n"); 
 function sumOfDigits(string){
    let arr = string.split('');
     const numsArray = arr.filter(el => !isNaN(el));
     return numsArray.reduce((acc, curr) => acc + Number(curr), 0);
 }
console.log(sumOfDigits('haitham'));
console.log(sumOfDigits('jackkGreloishh 29'));

console.log("\n--------TASK-7--------\n");
function arrFactorial(array){
    return array.map(el => {
        let res = 1;
        for (let i = 1; i <= el; i++){
            res *= i;
        }
        return res;
    });

}
console.log(arrFactorial([1, 2, 3, 4]));

console.log("\n--------TASK-8--------\n");
function categorizeCharacters(string){
    const letters = [];
    const digits = [];
    const special = [];
    const arr = string.split('');
    arr.forEach(el => {
        if (el >='a' && el <= 'z' || el >= 'A' && el <= 'Z'){
            letters.push(el);
        }
        else if (!isNaN(el)){
            digits.push(el);
        }
        else {
            special.push(el);
        }
    }
);


return [letters.toString(), digits.toString(), special.toString()];
}
console.log(categorizeCharacters('Hello World! 123'));