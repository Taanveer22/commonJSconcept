function stopWatch() {
  let counter = 0;
  return function () {
    counter = counter + 1;
    return counter;
  };
}

// creating instance for closure
const watch1 = stopWatch();
console.log(watch1());

const watch2 = stopWatch();
console.log(watch2());
console.log(watch2());

const watch3 = stopWatch();
console.log(watch3());
console.log(watch3());
console.log(watch3());
