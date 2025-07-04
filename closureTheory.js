// function 01
function outerFunc(outerVar) {
  return function innerFunction(innerVar) {
    console.log("outer :", outerVar);
    console.log("inner : ", innerVar);
  };
}

const myClos = outerFunc("out");
myClos("in");
// console : outer : out , inner : in

// ----------------------------------------------------

// function 02
function outerFunction(outerParameter) {
  return function innerFunction(innerParmeter) {
    console.log("outer : ", outerParameter);
    console.log("inner : ", innerParmeter);
  };
}

const myClosure = outerFunction("outerArgument");
myClosure("innerArgument");
