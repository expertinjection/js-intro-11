console.log("\n--------TASK-1--------\n");

const toCamelCase = (string) => {
  const str = string.trim().replace(/\s+/g, " ").split(" ");
  let camelCase = str[0].toLowerCase();
  for (let i = 1; i < str.length; i++) {
    camelCase += str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();
  }
  return camelCase;
};

console.log(toCamelCase("first name"));
console.log(toCamelCase("last     name"));
console.log(toCamelCase("   ZIP CODE"));
console.log(toCamelCase("I Learn Java Script"));

console.log("\n--------TASK-2--------\n");

const toSnakeCase = (string) =>
  string.trim().toLowerCase().replace(/\s+/g, "_");

console.log(toSnakeCase("Last     name"));

console.log("\n--------TASK-3--------\n");

const alternatingCases = (string) => {
  let str = string.trim();
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      res += str[i].toUpperCase();
    } else res += str[i].toLowerCase();
  }
  return res;
};
console.log(alternatingCases("basketball"));
console.log(alternatingCases("Tech Global"));
console.log(alternatingCases("123!@#aB"));

console.log("\n--------TASK-4--------\n");

const isNeutral = (string1, string2) => {
  let res = "";
  for (let i = 0; i < string1.length; i++) {
    string1[i] === string2[i] ? (res += string1[i]) : (res += "0");
  }
  return res;
};
console.log(isNeutral("-", "+"));
console.log(isNeutral("-+", "-+"));
console.log(isNeutral("-++-", "-+-+"));
console.log(isNeutral("--++--", "++--++"));
console.log(isNeutral("+++", "+++"));

console.log("\n--------TASK-5--------\n");

const isTrueOrFalse = (str) => {
  let strArray = str.split(" ");
  let pos = 0;
  let neg = 0;
  strArray.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      let firstChar = word[i].toUpperCase();
      if (firstChar >= "A" && firstChar <= "Z") {
        if (firstChar >= "A" && firstChar <= "M") {
          pos++;
        } else neg++;
      }
      break;
    }
  });
  return neg <= pos;
};
console.log(isTrueOrFalse("A big brown fox caught a bad rabbit"));
