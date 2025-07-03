// truthy values ------------------------------------
// 1. true
// 2. empty object
// 3. empty array
// 4. (+) or (-) number
// 5. string zero ('0')
// 6. string false('false')
// 7. new Date() function
// 8. 12n
// 9. (+) PI
// 10. (-)
// 11. (+) Infinity
// 12. (-)
// 13. space inside quotation(' ')
// -----------------------------------------------

// 01
if (true) {
  console.log(true);
}

// 02
if ({}) {
  console.log(true);
}

// 03
if ([]) {
  console.log(true);
}

// 04
if (420 || -420) {
  console.log(true);
}

// 05
if ("0") {
  console.log(true);
}
// 06
if ("false") {
  console.log(true);
}

// 07
if (new Date()) {
  console.log(true);
}

// 08
if (12n) {
  console.log(true);
}
// 09
if (3.14) {
  console.log(true);
}

// 10

if (-3.14) {
  console.log(true);
}

// 11
if (Infinity) {
  console.log(true);
}

// 12
if (-Infinity) {
  console.log(true);
}

// 13
if(' '){
  console.log(true);
}
