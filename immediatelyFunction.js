// main function
function wish() {
  console.log("main function");
}
// immedaiately called
wish(independanceDay("motiur"));
wish(victoryDay("jahangir"));

// parameter function list
function independanceDay(man) {
  console.log("happy independance day", man);
}

function victoryDay(man) {
  console.log("happy victory day", man);
}
