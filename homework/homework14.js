console.log("\n--------TASK-1--------\n");
const repeatingX = string => {
    let strArray = string.toLowerCase().trim().split('')
    let xIsRepeted = false
    for(let i = 0; i < strArray.length; i++){
        if(strArray[i] === 'x' && strArray[ i + 1 ] === 'x'){
            return xIsRepeted = true 
        }
    }
    return xIsRepeted
}
console.log(repeatingX('Hello Xx World'))

console.log("\n--------TASK-2--------\n");

const isPerfectSquare = number => {
    let perfectSquare = false 
    for(let i = 0; i <= number; i++){
        if(i * i === number){
            return perfectSquare = true
        }
    }
    return perfectSquare
}
console.log(isPerfectSquare(24))

console.log("\n--------TASK-3--------\n");

const convertTemperature = (number, string) => {
    if(string === 'Celsius') number = (number * 9/5) + 32
    if (string === 'Fahrenheit') number = (number - 32) * 5/9

    return number
}
console.log(convertTemperature(32, 'Fahrenheit'))

console.log("\n--------TASK-4--------\n");

const sumOfEvenNumbers = array => {
    let evenNums = []
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenNums.push(array[i])
        }
    }
    let res = evenNums.reduce((acc, curr) => acc + curr)
    return res
}
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

console.log(sumOfEvenNumbers([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]))

console.log("\n--------TASK-5--------\n");

const capsOdds = array => {
    return array.map((element, index) => {
        if(index % 2 !== 0){ 
            return element.toUpperCase()
        }
        else {
            return element
        }
    })
}
console.log(capsOdds(["Hello", "World"]))
console.log(capsOdds(["John !@#$%", "^&*() Doe"]))