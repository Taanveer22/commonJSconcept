// Array.toString() way
let myArray1 = [1, 2, 3];
let myArray2 = [1, 2, 3];

let comapareArrays = myArray1.toString() === myArray2.toString();
console.log(comapareArrays);

// functional way
function arrayComparision(paramArray1, paramArray2) {
  console.log(paramArray1, paramArray2);
  let compare = paramArray1.toString() === paramArray2.toString();
  return compare;
}
console.log(arrayComparision([2, 4, 6], [2, 4, 6]));
console.log(arrayComparision([4, 3, 5], [3, 5, 7, 8]));
