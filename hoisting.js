// js only hoist declaretions not initializations or assignments
print5();
// print7;
// console.log(print7);
console.log(print9);
// ----------------------------------------------------------
// var hoisted
x = 6;
console.log(x);
var x;

// let and const not hoisted
y = 8;
console.log(y);
// let y;
// const y;

// looping
for (var i = 0; i < 5; i++) {
  console.log("inside loop : ", i);
}
console.log("outside loop : ", i);

// function declaretion hoisted
function print5() {
  console.log("inside print 5", 5);
}

// function expression with let and const not hoisted
const print7 = function () {
  console.log("inside print7", 7);
};

// function expression with var gives undefined
var print9 = function () {
  console.log("inside print 9", 9);
};
