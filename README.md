# JavaScript Reference Guide

## 📅 JavaScript Data Types
JavaScript provides different types of values. Here are the major data types with examples:

### 1. Primitive Data Types:
- **String**: Represents textual data
  ```js
  const name = "John";
  ```
- **Number**: Represents integers or floating-point numbers
  ```js
  const age = 30;
  const price = 99.99;
  ```
- **Boolean**: Represents logical entities
  ```js
  const isActive = true;
  ```
- **Undefined**: A variable declared but not assigned
  ```js
  let score;
  console.log(score); // undefined
  ```
- **Null**: Represents an intentional absence of value
  ```js
  const data = null;
  ```
- **Symbol**: A unique and immutable primitive
  ```js
  const id = Symbol("id");
  ```
- **BigInt**: For arbitrarily large numbers
  ```js
  const big = 1234567890123456789012345678901234567890n;
  ```

### 2. Non-Primitive (Reference) Types:
- **Object**
  ```js
  const person = {
    name: "Alice",
    age: 28
  };
  ```
- **Array**
  ```js
  const fruits = ["apple", "banana", "cherry"];
  ```
- **Function**
  ```js
  function greet() {
    return "Hello";
  }
  ```

## ⚙️ JavaScript Functions & Methods

### 1. Function Declaration
```js
function add(a, b) {
  return a + b;
}
```

### 2. Function Expression
```js
const subtract = function(a, b) {
  return a - b;
};
```

### 3. Arrow Function
```js
const multiply = (a, b) => a * b;
```

### 4. Immediately Invoked Function Expression (IIFE)
```js
(function() {
  console.log("IIFE executed!");
})();
```

### 5. Callback Function
```js
function greet(name, callback) {
  callback(name);
}

greet("Haitham", function(name) {
  console.log(`Hello ${name}`);
});
```

### 6. Built-in String Methods
```js
const text = "JavaScript";
console.log(text.toUpperCase()); // "JAVASCRIPT"
console.log(text.includes("Script")); // true
```

### 7. Array Methods
```js
const numbers = [1, 2, 3, 4];
numbers.push(5); // [1,2,3,4,5]
const doubled = numbers.map(n => n * 2); // [2,4,6,8,10]
```

### 8. Object Methods
```js
const user = {
  name: "Sam",
  greet() {
    return `Hi, I'm ${this.name}`;
  }
};
console.log(user.greet());
```

### 9. Math Methods
```js
console.log(Math.round(4.7)); // 5
console.log(Math.random());   // random number between 0 and 1
```

### 10. Date Methods
```js
const now = new Date();
console.log(now.getFullYear());
console.log(now.toDateString());
```

### 11. JSON Methods
```js
const obj = { name: "Jane" };
const json = JSON.stringify(obj);
console.log(JSON.parse(json));
```

## ⏳ Promises and Asynchronous Methods

### 1. Promise Creation
```js
const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});
```

### 2. Consuming Promises
```js
promise
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

### 3. async / await
```js
async function fetchData() {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
```

### 4. Real-World Example: Fetch API
```js
async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
}

getUsers();
```

---
This guide helps you understand the foundational elements of JavaScript including its data types, functions/methods, and asynchronous programming with practical examples.
