// we can access arguments inside the function body
// arguments is a array like object
// we can access arguments elements like array and use for loop in arguments elements
// we can convert arguments into an array using spread operator
// but we can not use any kinds of array methods with arguments
function sum(a, b, c) {
  console.log(arguments);
  console.log(typeof arguments);
  console.log(arguments[0]);
  const argumentsArray = [...arguments];
  console.log(argumentsArray);
  for (let i = 0; i < arguments.length; i++) {
    console.log(i);
    console.log(arguments[i]);
  }
  // don't work any array methods
  // arguments.push(999);
  return a + b + c;
}
// console.log(arguments);
const result = sum(2, 3, 4);
console.log(result);

const result2 = sum(22, 28, 54, 73, 38, 49);
console.log(result2);

console.log(typeof sum);
console.log(sum.length);
