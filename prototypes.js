
// get prototypes of strings
const fullName = new String ('Abhishek Srivastav')
console.log(fullName.__proto__ === String.prototype) // true
console.log(fullName.__proto__.__proto__ === Object.prototype) // true
console.log(fullName.__proto__.__proto__.__proto__ === null) // true

// get prototypes of numbers
const num = new Number(5)
console.log(num.__proto__ === Number.prototype) // true
console.log(num.__proto__.__proto__ === Object.prototype) // true
console.log(num.__proto__.__proto__.__proto__ === null) // true

// get prototypes of arrays
const arr = new Array(1,2,3)
console.log(arr.__proto__ === Array.prototype) // true
console.log(arr.__proto__.__proto__ === Object.prototype) // true
console.log(arr.__proto__.__proto__.__proto__ === null) // true
