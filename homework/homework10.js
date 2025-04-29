console.log("\n--------TASK-1--------\n");
const calculateTotalPrice1 = (obj) => { 
	const shopingList = {
		apple : 2.00,
		orange : 3.29,
		mango : 4.99,
		pineapple : 5.25
	}
	let total = 0
	for(let item in obj){
		if(shopingList[item] !== undefined ){
			total += shopingList[item] * obj[item]
		}
	}
	return total
}
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 }))

console.log("\n--------TASK-2--------\n");

const calculateTotalPrice2 = (obj) => { 
	const shopingList = {
		applePrice : 2.00,
		orangePrice : 3.29,
		mangoPrice : 4.99,
		pineapPrice : 5.25
	}
	let total = 0
	for(let item in obj){
		let quantity = obj[item]
		let unit = item.toLowerCase()
		if (unit === 'apple'){
			let price  = quantity / 2
			let discoutedPrice = quantity - price
			total = (price * 2.00) + (discoutedPrice * 2.00 * 0.5)
		}else if (unit === 'mango'){
			let extraFreeMangoes = quantity / 4
			let mangoesPrice = quantity - extraFreeMangoes
			total += mangoesPrice * 4.99

		}else if (unit === 'orange') {
			total += quantity * 3.29
		}else if (unit === 'pineapple'){
			total += quantity * 5.25;
		}
	}
	return total
}
console.log(calculateTotalPrice2({ Apple: 3, Mango: 5 }))

console.log("\n--------TASK-3--------\n");

const nthWord = (str, num) => {
    const words = str.trim().split(' ');
    if (num > words.length || num < 1) return '';
    return words[num - 1];
  };
  console.log(nthWord("QA stands for Quality Assurance", 4))

  console.log("\n--------TASK-4--------\n");
  const isArmstrong = num => {
	let numStr = num.toString().split('')
	let thePowerOfNum = numStr.length
	let sum = numStr.reduce((acc, numStr) => acc + Math.pow(Number(numStr), thePowerOfNum), 0)
	return sum === num 
}
console.log(isArmstrong(154))

console.log("\n--------TASK-5--------\n");
const reverseNumber = (num) => {
    let reversed = 0;
    while (num > 0) {
      reversed = reversed * 10 + (num % 10);
      num = Math.floor(num / 10);
    }
    return reversed;
  }; 
console.log(reverseNumber(1234))

console.log("\n--------TASK-6--------\n");

const doubleOrTriple = (arr, boolean) => {
	if (boolean === true) return arr.map(el => el +  el)
	if (boolean === false) return arr.map(el => el + el + el)
}
console.log(doubleOrTriple([3, 7, 2], false))

console.log("\n--------TASK-7--------\n");

const splitString = (str, num) => {
	if (str.length < num || str.length % num !== 0 ) return ''
	return str.split('', num).join('') + ' ' + str.slice(str.length - num)
}
console.log(splitString("Java", 2))