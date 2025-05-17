console.log("\n--------TASK-1--------\n");
const countVC = (string) => {
  let result = {
    vowels: 0,
    consonants: 0,
  };
  let str = string.toLowerCase();
  const vowelsL = ["a", "e", "o", "u", "i"];
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      if (vowelsL.includes(str[i])) {
        result.vowels++;
      } else {
        result.consonants++;
      }
    }
  }
  return result;
};
console.log(countVC(""));

console.log(countVC("123!@#xyz"));

console.log("\n--------TASK-2--------\n");
const countChars = string => {
    let categories = {}
    let letters = 0, numbers = 0 ,specials = 0
    let str = string.toLowerCase().replaceAll(' ','')
    for(let i = 0; i < str.length; i++){
        if(str[i] >= 'a' && str[i] <= 'z'){
            letters++
        }
        else if (str[i] >= '0' && str[i] <= '9'){
           numbers++
        }
        else if (str[i] === '') {
            return {}
        }
        else {
            specials++
        }
        
    }
    if (letters > 0 ) categories.letters = letters
    if (numbers > 0 ) categories.numbers = numbers
    if (specials > 0 ) categories.specials = specials

    return categories
}
console.log(countChars("Programming 123"))
console.log(countChars("123AbC!@#"))
console.log(countChars("1234556"))
console.log(countChars(''))
console.log(countChars('      '))


console.log("\n--------TASK-3--------\n");

const maxOccurrences = string => {
    let str = string.replaceAll(' ','')
    if (str.length === 0) return ''
    let  maxcount = 0
    let maxOccur = ''
    for(let i = 0; i < str.length; i++){
        let count = 0
        for( let j = 0; j < str.length; j++){
            if (str[i] === str[j])
                count ++
        }
        if(count > maxcount) {
            maxcount = count
            maxOccur = str[i]
        }
    }
    return maxOccur
}
console.log(maxOccurrences("Occurrences"))
console.log(maxOccurrences("Hello"))
console.log(maxOccurrences("     ab     "))
console.log(maxOccurrences("12   3     21"))
console.log(maxOccurrences(""))

console.log("\n--------TASK-4--------\n");
const starOut = string => {
    //let str = string.replaceAll('*','')
    let res = ''
    for(let i = 0; i < string.length; i++){
        if(string[i] === '*' || string[i - 1] === '*' || string[i + 1] === '*'){
            continue
        }
        res += string[i]
    }
    return res
}
console.log(starOut('****'))

console.log("\n--------TASK-5--------\n");

const romanToInt  = romanStr => {
    const romanVal = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let sum = 0 
    for (let i = 0; i < romanStr.length; i++){
        let  currentVal = romanVal[romanStr[i]]
        let nextVal = romanVal[romanStr[i + 1]]
        if(nextVal > currentVal ){
            sum -= currentVal
        }
        else{
            sum += currentVal
        }
    }
    return sum
}
console.log(romanToInt('VI'))