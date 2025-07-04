function changeName(paramObj) {
  console.log(paramObj);
  paramObj.name = "bokhx";
  console.log("inside function :", paramObj);
}

const person = { name: "karim" };
console.log(person);
changeName(person);
console.log("outside function : ", person);
