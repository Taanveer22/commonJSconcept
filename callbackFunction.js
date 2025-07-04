function greeting(paramFunc, paramPer) {
  console.log(paramFunc);
  console.log(paramPer);
  paramFunc(paramPer);
}
// invocation or call
greeting(morning, "jhankar vai");
greeting(morning, "sumit dada");
greeting(morning, "nayem vai");

greeting(night, "jhankar vai");
greeting(night, "sumit dada");
greeting(night, "nayem vai");

// parameter function list
function morning(person) {
  console.log("good morning", person);
}

function night(person) {
  console.log("good night", person);
}
