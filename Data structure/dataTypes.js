'use strict'
// # Primitive Data Types
let str1 = 'Hello World'
console.log(typeof str1) // string
let num1 = 10
console.log(typeof num1) // number
let bool1 = true
console.log(typeof bool1) // boolean
let und1 = undefined
console.log(typeof und1) // undefined
let nul1 = null
console.log(typeof nul1) // object
let sym1 = Symbol()
console.log(typeof sym1) 
/* 
symbol : 
used to generate unique identifiers for objects these are always unique. 
but Symbol.of("key") is same if key is same but Symbol(123) !== Symbol(123)
*/ 
let bigInt1 = 100n
console.log(typeof bigInt1) // bigint
// # Special Data Types
let nan1 = NaN
console.log(typeof nan1) // number
let inf1 = Infinity
console.log(typeof inf1) // number
// # Refference Data Types
let obj1 = {
    name: 'John Doe',
    age: 30
}
console.log(typeof obj1) // object
let arr1 = [1, 2, 3, 4]
console.log(typeof arr1) // object
let fun1 = function () {
    console.log('Hello')
}
console.log(typeof fun1) // function
// let reg1 = /Hello/
// console.log(typeof reg1) // object
// let date1 = new Date()
// console.log(typeof date1) // object
// let err1 = new Error('This is an error')
// console.log(typeof err1) // object