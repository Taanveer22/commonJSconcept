/*
we can access global scope variable
we can access function scope variable inside the function
we can access block scope variable inside the conditions, loop etc. block

*/


// global scope-----------------------------------------------
let number = 97;
let language = "js";
let myArray = [2, 3, 5, 8];

// block scope---------------------------------------------
if (number >= 80) {
  console.log(number);
  let add = number + 50;
  console.log(add);
} else {
  console.log(language);
}
// console.log(add);

for(let element of myArray){
    console.log(element);
}
// console.log(element);

// function scope---------------------------------------
function plus(x,y) {
    let result = x + y;
    return result;
}
console.log(plus(5,7));
// console.log(result);

