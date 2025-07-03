// falsy value ---------------------------
// 1. false keyword
// 2. null keyword
// 3. undefined keyword
// 4. positive zero(+0)
// 5. negative zero(-0)
// 6. 0n
// 7. NaN keyword
// 8. empty('') string
// -----------------------------------------------------

// 01
if (!false) {
  console.log("boolean opposite");
}

// 02
if (!null) {
  console.log("boolean opposite");
}

// 03
if (!undefined) {
  console.log("boolean opposite");
}

// 04
if (!0) {
  console.log("boolean opposite");
}

// 05
if (!-0) {
  console.log("boolean opposite");
}

// 06
if (!0n) {
  console.log("boolean opposite");
}

// 07
if (!NaN) {
  console.log("boolean opposite");
}

// 08
if (!"") {
  console.log("boolean opposite");
}
