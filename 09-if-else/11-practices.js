const date = new Date();

let dayOfTheWeek = date.getDay();
if (dayOfTheWeek === 0 || dayOfTheWeek === 6) {
    console.log('WEEKEND')
}
else {
    console.log('WEEKDAY')
}



console.log(date.getFullYear());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMonth());
console.log(date.getTime());
console.log(date.getDate());

function posNegZero(number) {
    if (number > 0) {
        return 'POS'
    }
    else if (number < 0)
        return 'NEG'
    return 'zero'
}


function startE(name) {
    let firstChar = name[0].toLowerCase();
    if (firstChar === 'E' || firstChar === 'e') {
        return true
    }
    else {
        return false
    }
}
console.log(startE(''))

function divisible5(number) {
    if (number % 5 === 0) {
        return true
    }
    return false
}
console.log(divisible5(43))
console.log(divisible5(5))
function fooBar(number){
    if(number % 5 === 0){
        console.log('foo')
    }
    else if (number % 7 === 0){
        console.log('bar')
    }
    else if (number % 5 === 0 && number % 7 === 0){
        console.log('foobar')
    }
    else if ( number % 5!==0|| number % 7 !==0){
        return number
    }
    
}