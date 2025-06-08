console.log("\n--------TASK-1--------\n");
const toInitials = string => {
	
	let str = string.trim().split(' ')

	const res = `${str[0][0]}. ${str[1][0]}.` 

	return res
}

console.log(toInitials( "Joe Doe"))
console.log(toInitials( "Haitham Laith"))
console.log(toInitials( "Ja Le"))

console.log("\n--------TASK-2--------\n");
const hasNumbers = string => {
    let str = string.trim().split('')
    for(let i = 0; i < str.length; i++){
        if (str[i] >= '0' && str[i] <= '9') return true
    }
    return false
}

console.log(hasNumbers("!@#$%^&*()_+"))

console.log("\n--------TASK-3--------\n");
const elementLength = array => {
	let res = []
	for (let i = 0; i < array.length; i++){
		res.push(array[i].length)
	}
	return res
}
console.log(elementLength( [ "Trampoline", "", "Tennis", "Basketball" ] ))

console.log("\n--------TASK-4--------\n");

const isArraySumEvenOrOdd = array => {
    if (array.length === 0 ) return 'even'
	const sumOfArrayNums = array.reduce((acc, curr) => acc + curr)
	return sumOfArrayNums % 2 === 0 ? 'even' : 'odd'
}

console.log(isArraySumEvenOrOdd( [ 7,1, 8,1 ] ))
console.log(isArraySumEvenOrOdd( [ 0,-1,-5 ] ))
console.log(isArraySumEvenOrOdd( [] ))

console.log("\n--------TASK-5--------\n");

const reverse = string => string.trim().split('').reverse().join('')

console.log(reverse("Hello World"))
console.log(reverse("TechGlobal") )
console.log(reverse("Apples 456"))
console.log(reverse("Basketball is fun"))

console.log("\n--------TASK-6--------\n");

const reverseWords = string => {
    let str = string.trim().split(' ')
    let res = []
    for(let i = 0; i < str.length; i ++) {
        res.push(str[i].split('').reverse().join(''))
    }
    return res.join(' ')
}

console.log(reverseWords("Hello World"))
console.log(reverseWords("TechGlobal") )
console.log(reverseWords("Apples 456"))
console.log(reverseWords("Basketball is fun"))