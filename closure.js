function hotelKitchen() {
  let roast = 0;
  return function () {
    roast++;
    return roast;
  };
}
// if we called this function directly, without any instance , it give us only the funciton body
// console.log(hotelKitchen);
// console.log(hotelKitchen());

// creating instance for closure
const firstWaiter = hotelKitchen();
console.log(firstWaiter());
console.log(firstWaiter());
console.log(firstWaiter());

const secondWaiter = hotelKitchen();
console.log(secondWaiter());
console.log(secondWaiter());
console.log(secondWaiter());
