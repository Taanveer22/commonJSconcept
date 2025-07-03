// type coersion
// type convertion
// type castion
// type coersion => doesnot work on non-primitive/composite data types
// we should always use === to avoid any kinds of mistake

let first = 2;
let second = "2";
if (first == second) {
  console.log("equal");
} else {
  console.log("not equal");
}

let third = "33";
let fourth = 33;
if (third === fourth) {
  console.log("equal");
} else {
  console.log("not equal");
}

let a = 0;
let b = false;
if (a == b) {
  console.log("equal");
} else {
  console.log("not equal");
}

let x = 1;
let y = true;
if (x === y) {
  console.log("equal");
} else {
  console.log("not equal");
}
