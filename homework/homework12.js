console.log("\n--------TASK-1--------\n")

const makeNegative = number => number <= 0 ? number : - number
console.log(makeNegative(0))

console.log("\n--------TASK-2--------\n")

const isSumEvenOrOdd = (n1, n2, n3) => (n1 + n2 + n3) % 2 === 0 ? 'even' : 'odd'

console.log(isSumEvenOrOdd(1, 2, 2))

console.log("\n--------TASK-3--------\n")

const decimal2 = array => {
    let res = []
    array.forEach(el => {
        if(Number.isInteger(el)){
            res.push(el)
        }
        else {res.push(el.toFixed(2))}
    });
    return res
}
console.log(decimal2([20987, 3.53245, 12.345, 32.9]))

console.log("\n--------TASK-4--------\n")

const myPow = (x, n) => n === 0 ? 1 : x ** n
console.log(myPow(5, 3))

console.log("\n--------TASK-5--------\n")

const findLongestWord = string => {
    if(string.trim().length === 0) return ''
    let words = string.split(' ')
    let theLongestWord = words[0]
    for(let i = 0; i < words.length; i++){
        if(words[i].length > theLongestWord.length){
            theLongestWord = words[i]
        }
    }
    return theLongestWord
}
console.log(findLongestWord('haitham laitham hoiyalo'))

