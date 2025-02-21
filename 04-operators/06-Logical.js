// NOT (!), OR (||), AND (&&)

console.log(3 ** 2 < 10 && !false && (5 % 2) == !false); // true

let b1 = !(!(('Hello' === 'Hello') || 5 > 5) && (3 * 5 >= 3 ** 4));

console.log(b1); // true

console.log("apple" === "orange");// false
console.log(20 % 6 !== 0 );// true
console.log(20 % 6 !== 0 && "apple" === "orange");// false
console.log(!(2 + 2 === 4 && true));// false
console.log(20 % 6 !== 0 && "apple" === "orange") || !(2 + 2 === 4 && true)// false
