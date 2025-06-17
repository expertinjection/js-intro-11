console.log("\n--------TASK-1--------\n");

const findMedian = (arr1, arr2) => {
  const sortedArr = [...arr1, ...arr2].sort((a, b) => a - b);
  const mid = sortedArr.length / 2;
  if (sortedArr.length % 2 === 0)
    return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
  return sortedArr[Math.floor(mid)];
};
console.log(findMedian([1, 2], [3, 4]));

console.log("\n--------TASK-2--------\n");

const calculateFactorial = (number) => {
  if (number === 0 || number === 1) return 1;
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
};
console.log(calculateFactorial(0));
console.log(calculateFactorial(1));
console.log(calculateFactorial(5));
console.log(calculateFactorial(6));
console.log(calculateFactorial(10));

console.log("\n--------TASK-3--------\n");

const calculateGCD = (num1, num2) => {
  if (num1 === 0) return num2
  if (num2 === 0) return num1
  let GCDnum1 = [];
  let GCDnum2 = [];
  for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) {
      GCDnum1.push(i);
    }
  }

  for (let j = 1; j <= num2; j++) {
    if (num2 % j === 0) {
      GCDnum2.push(j);
    }
  }

  const commonDivisors = GCDnum1.filter((el) => GCDnum2.includes(el));
  return Math.max(...commonDivisors);
};
console.log(calculateGCD(12, 8));

console.log("\n--------TASK-4--------\n");
const calculateLCM = (num1, num2) => {
    if (num1 === 0 || num2 === 0) return 0
    return Math.abs(num1 * num2) / calculateGCD( num1, num2)

}
console.log(calculateLCM(48, 18))