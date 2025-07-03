// typeof "undefined" returns undefined
let variable1 = undefined;
console.log(variable1);
console.log(typeof variable1);

// typeof "null" returns object
let variable2 = null;
console.log(variable2);
console.log(typeof variable2);

// update sever data all the time by this settings
const data = { result : [0,1], updated : null};
console.log(data);
console.log(typeof data);

console.log(data.result);
console.log(data.result[0]);
console.log(data.result[1]);

console.log(data.updated);
console.log(typeof data.updated);
