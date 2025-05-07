console.log("\n--------TASK-1--------\n");

const countPalindrome = (string) => {
  let count = 0;
  let str = string.split(" ");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "") return 0;
    if (
      str[i].split("").reverse().join("").toLowerCase() === str[i].toLowerCase()
    ) {
      count++;
    }
  }

  return count;
};

console.log(countPalindrome(""));

console.log("\n--------TASK-2--------\n");

const sum = (arr, boolean) => {
  let sumOfEven = 0;
  let sumOfOdd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      sumOfEven += arr[i];
    } else {
      sumOfOdd += arr[i];
    }
  }
  if (boolean === true) return sumOfEven;
  return sumOfOdd;
};

console.log(sum([1, 5, 10], true));

console.log("\n--------TASK-3--------\n");

const nthChars = (string, number) => {
  let res = "";

  for (let i = number - 1; i < string.length; i += number) {
    res += string[i];
  }
  return res;
};
console.log(nthChars("Hi", 4));

console.log("\n--------TASK-4--------\n");

//dose not work as expected  will re visit again


// const canFormString = (str1, str2) => {
// 	let first = str1.replace(/\s+/g, '').toLowerCase().split('').sort().join('')
// 	let second = str2.replace(/\s+/g, '').toLowerCase().split('').sort().join('')

// 	for(let i = 0; i < second.length; i++){
// 		if(first.includes(second[i])) return true
// 	}
// 	return false
// }
//console.log(canFormString("halogen", "hello") )



console.log("\n--------TASK-5--------\n");

const isAnagram = (str1, str2) => {
  let first = str1.replace(/\s+/g, "").toLowerCase().split("").sort().join("");
  let second = str2.replace(/\s+/g, "").toLowerCase().split("").sort().join("");
  return first === second;
};
console.log(isAnagram("listen", "silent"));

console.log("\n--------TASK-6--------\n");

const count = (arr, boolean) => {
  let countEven = [];
  let countOdd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      countEven.push(arr[i]);
    } else {
      countOdd.push(arr[i]);
    }
  }
  if (boolean === true) return countEven.length;
  return countOdd.length;
};
console.log(count([-1, 1, -2, 2], true));

console.log("\n--------TASK-7--------\n");

const sumDigitsDouble = (string) => {
  let res = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] <= "9" && string[i] >= "0") res += +string[i];
  }
  return res * 2;
};
console.log(sumDigitsDouble("Hi-23"));

console.log("\n--------TASK-8--------\n");
// also dose not work as expected  will re visit again 
const countOccurrence = (str1, str2) => {
  let first = str1.replace(/\s+/g, "").toLowerCase();
  let second = str2.replace(/\s+/g, "").toLowerCase();
  res = first.split(second);
  return res.length - 1;
};

console.log(countOccurrence("Hello", "l"));
