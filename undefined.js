const NB = "Eight ways to get undefined in JavaScript";
console.log(NB);
let firstWay =
  "variable declared but not initialized/assigned will give undefined";
console.log(firstWay);
let secondWay = "function with no return will give undefined";
console.log(secondWay);
let thirdWay = "parameter that is not passed will give undefined";
console.log(thirdWay);
let fourthWay =
  "after return keyword if there is nothing on right side it will give undefined";
console.log(fourthWay);
let fifthWay = "property that doesnot exist on an object will give undefined";
console.log(fifthWay);
let sixthWay =
  "accessing array elements outside of index range will give undefined";
console.log(sixthWay);
let seventhWay = "deleteing an element inside an array will give undefined";
console.log(seventhWay);
let eighthWay = "set a value directly undefined will give undefined";
console.log(eighthWay);

//---------------------------------------------------

// 01
let first;
console.log(first);

// 02
function second(a, b) {
  const total = a + b;
}
console.log(second(4, 5));

// 03
function third(w, x, y, z) {
  const sum = w + x + y + z;
}
console.log(third(2, 5));

//04
function fourth(a, b) {
  if (a < 0 || b < 0) {
    return;
  } else {
    return a + b;
  }
}
console.log(fourth(2, -3));

// 05
const fifth = {
  name: "kigopoly",
  id: 420,
};
console.log(fifth.name, fifth.age);

// 06
const sixth = [22, 420, 88, 799];
console.log(sixth[1], sixth[10]);

// 07 (use slice instead delete)
const seventh = ["html", "css", "js", "tailwind", "react"];
console.log(seventh);
delete seventh[2];
console.log(seventh);

// 08 (use null instead undefined)
const eighth = undefined;
console.log(eighth);
