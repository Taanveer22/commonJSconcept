// JSON.stringfy() way
const myObj1 = { name: "sumit", age: 35 };
const myObj2 = { name: "sumit", age: 35 };

const compareObjects = JSON.stringify(myObj1) === JSON.stringify(myObj2);
console.log(compareObjects);

// functional way
let first = { name: "Dionysia", age: 29 };
let second = { name: "Dionysia", age: 29 };

let test1 = {
  a: 5,
  b: 7,
};

let test2 = {
  a: 5,
  b: 9,
};

function objectComparision(paramObj1, paramObj2) {
  console.log(paramObj1, paramObj2);
  const compare = JSON.stringify(paramObj1) === JSON.stringify(paramObj2);
  return compare;
}
console.log(objectComparision(first, second));
console.log(objectComparision(test1, test2));
