const myNum = 5.98086;

console.log(myNum.toFixed(2)); // 5.98
console.log(myNum.toPrecision(2)); // 6.0
console.log(myNum.toString()); // 5.98086
console.log(myNum.toString(2)); // 101.111000 changes as we change the base (from binary,decimal,hexadecimal,octadecimal etc)
console.log(myNum.toExponential()); // 5.98086e+0

console.log(Math.round(myNum)); // 6
console.log(Math.floor(myNum)); // 5
console.log(Math.ceil(myNum)); // 6
console.log(Math.trunc(myNum)); // 5
console.log(Math.pow(myNum, 2)); // 35.7708
console.log(Math.sqrt(myNum)); // 2.445
console.log(Math.abs(myNum)); // 5.98086
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * 10); // random number between 0 and 10
console.log(Math.floor(Math.random() * 10)); // random number between 0 and 9
console.log(Math.floor(Math.random() * 10) + 1); // random number between 1 and 10
console.log(Math.PI); // 3.141592653589793

// to get a random number between min - max we use the following formula
const min = 5;
const max = 10;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random number between 5 and 10