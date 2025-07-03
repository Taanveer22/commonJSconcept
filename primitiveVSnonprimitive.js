// primitive data type---------------------------------------
let x = 95;
let y = "js";
let z = true;
console.log(typeof x, typeof y, typeof z);

// behavior don't keep reference
let a = 2;
let b = a;
console.log(a, b);
a = 4;
console.log(a, b);

// non-primitive data type---------------------------------------
const web = ["html", "css", "js"];
const app = { android: "java", ios: "swift" };
console.log(typeof web, typeof app);

// behavior keep reference
let person1 = {
  job: "web developer",
};
let person2 = person1;
console.log(person1, person2);

// person2 = {
//   job: "app developer",
// };
// console.log(person1, person2);

person2.job = "devops";
console.log(person1, person2);
