// // If Else
// if(1){
// // as 1 is evaluated as true the next statement will not from else if && else
// }else if (1){
// // if the above if had 0  or false this would have run as here argument is 1 == true but else will not run
// }else {
// // if both above arguments were 0 / false this else would get on call stack
// }

// // switch case
// switch (1) {
//     case 1:
//         // if the case is true this will run
//         break;// if one case is true the break will stop the execution of other cases if not present it will run all cases
//     case 2:
//         // if the case is true this will run
//         break;
//     default:
//         // if none of the above case is true this will run
//         break;
// }

// // Falsy values
// // 0, -0, BigInt 0n, null, undefined, NaN, false, ""

// // Truthy values
// // all other values are truthy values including empty array, empty object, empty function 
// // but empty string is falsy value
// // 1, -1, 0.1, "0", "false", "null", "undefined", "NaN", true, [], {}, function(){}

// // Ternary Operator
// // if the condition is true the first statement will run else the second statement will run
// 1 ? console.log("True") : console.log("False");

// // Logical Operators
// // && || !
// // && if the first statement is false it will not run the second statement
// // || if the first statement is true it will not run the second statement
// // ! it will negate the value
// 1 && console.log("True");
// 0 || console.log("False");
// !0 && console.log("True");

// // Nulish Coalescing Operator
// // if the first statement is null or undefined the second statement will run
// null ?? console.log("Null");
// undefined ?? console.log("Undefined");


// // Loops
// // for loop
// // for(initialization; condition; increment/decrement)
// for(let i=0; i<5; i++){
//     console.log(i);
// }

// // while loop
// let i = 0;
// while(i<5){
//     console.log(i);
//     i++;
// }

// // do while loop
// let i = 0;
// do{
//     console.log(i);
//     i++;
// }
// while(i<5);

// // for in loop
// // used for objects
// let obj = {name: "John", age: 20};
// for(let key in obj){
//     console.log(key, obj[key]);
// }

// // for of loop
// // used for arrays
// let arr = [1, 2, 3];
// for(let value of arr){
//     console.log(value);
// }

// // break
// // it will break the loop
// for(let i=0; i<5; i++){
//     if(i==3){
//         break;
//     }
//     console.log(i);
// }

// // continue
// // it will skip the current iteration
// for(let i=0; i<5; i++){
//     if(i==3){
//         continue;
//     }
//     console.log(i);
// }

// // Functions
// // function declaration
// function func(){
//     console.log("Function");
// }
// func();

// // function expression
// let func = function(){
//     console.log("Function");
// }
// func();

// // arrow function
// let func = () => {
//     console.log("Function");
// }
// func();

// // function with arguments
// function func(a, b){
//     console.log(a+b);
// }
// func(1, 2);

// // function with default arguments
// function func(a=1, b=2){
//     console.log(a+b);
// }
// func();

// // function with rest parameter
// function func(...args){
//     console.log(args);
// }
// func(1, 2, 3);

// // function with spread operator
// function func(a, b, c){
//     console.log(a+b+c);
// }
// let arr = [1, 2, 3];
// func(...arr);

// // function with return
// function func(){
//     return "Function";
// }
// console.log(func());

// // function with callback
// function func(callback){
//     callback();
// }
// func(() => {
//     console.log("Callback");
// });

// // function with promise
// function func(){
//     return new Promise((resolve, reject) => {
//         resolve("Promise");
//     });
// }
// func().then((data) => {
//     console.log(data);
// });

// // function with async await
// async function func(){
//     return "Async Await";
// }
// func().then((data) => {
//     console.log(data);
// });

// // function with generator
// function* func(){
//     yield "Generator";
// }
// let gen = func();
// console.log(gen.next().value);

// // function with IIFE
// (function(){
//     console.log("IIFE");
// })();

// // function with closure
// function func(){
//     let a = 1;
//     return function(){
//         console.log(a);
//     }
// }
// let innerFunc = func();
// innerFunc();

// // function with currying
// function func(a){
//     return function(b){
//         return a+b;
//     }
// }
// let innerFunc = func(1);
// console.log(innerFunc(2));

// // function with memoization
// function func(){
//     let cache = {};
//     return function(n){
//         if(n in cache){
//             return cache[n];
//         }
//         cache[n] = n;
//         return n;
//     }
// }
// let memo = func();
// console.log(memo(1));
// console.log(memo(1));

// // function with recursion
// function func(n){
//     if(n==0){
//         return 0;
//     }
//     return n + func(n-1);
// }
// console.log(func(5));

// // function with tail recursion
// function func(n, a=0){
//     if(n==0){
//         return a;
//     }
//     return func(n-1, a+n);
// }
// console.log(func(5));

// // function with memoization and recursion
// function func(n, cache={}){
//     if(n in cache){
//         return cache[n];
//     }
//     if(n==0){
//         return 0;
//     }
//     cache[n] = n + func(n-1, cache);
//     return cache[n];
// }
// console.log(func(5));

// // function with memoization and tail recursion
// function func(n, a=0, cache={}){
//     if(n in cache){
//         return cache[n];
//     }
//     if(n==0){
//         return a;
//     }
//     cache[n] = func(n-1, a+n, cache);
//     return cache[n];
// }
// console.log(func(5));

// // function with memoization and iteration

// function func(n){
//     let cache = {};
//     for(let i=0; i<=n; i++){
//         if(i in cache){
//             return cache[i];
//         }
//         if(i==0){
//             cache[i] = 0;
//         }else{
//             cache[i] = i + cache[i-1];
//         }
//     }
//     return cache[n];
// }
// console.log(func(5));

// // function with memoization and iteration and tail recursion
// function func(n){
//     let cache = {};
//     return function(n, a=0){
//         if(n in cache){
//             return cache[n];
//         }
//         if(n==0){
//             return a;
//         }
//         cache[n] = func(n-1, a+n);
//         return cache[n];
//     }
// }
// let memo = func();
// console.log(memo(5));

