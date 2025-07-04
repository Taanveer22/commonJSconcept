function changeNumber (paramNum){
    // console.log(paramNum);
    paramNum = paramNum + 5;
    console.log('inside function : ', paramNum);
}
const myNumber = 10;
// console.log(myNumber);
console.log('outside function :', myNumber);
console.log(changeNumber(myNumber));
