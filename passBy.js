// primitive data types are passed by VALUE
let num1 = 5;
let num2 = 7;

function multiply(a, b) {
  a = 3;
  const result = a * b;
  return result;
}

console.log(num1);
console.log(multiply(num1, num2));
console.log(num1);

// non-primitive data types are passed by REFERENCE

const stars1 = { nickName1: "ananta", partner1: "borsha" };
const stars2 = { nickName2: "soriful", partner2: "sunerah" };

function makeMovie(couple1, couple2) {
    console.log(couple1, couple2);
  couple1.nickName1 = "jalil";
  couple2.partner2 = "tisha";
    console.log(couple1, couple2);
  const mergedObject = { ...couple1, ...couple2 };
  return mergedObject;
}

console.log(stars1, stars2);
console.log(makeMovie(stars1, stars2));
console.log(stars1, stars2);
