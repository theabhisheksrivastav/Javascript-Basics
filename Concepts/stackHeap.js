// #Stack : all primitive data types are stored in stack memory
// #Heap : all reference data types are stored in heap memory

// Stack
let myName = "Abhishek"
let anotherName = myName

anotherName = "Pappu"
// different return as when in line 6 a copy of myName was given to anotherName
console.log(myName);
console.log(anotherName); 

let userOne = {
    name : "abhishek",
    id : "Abhishek"
}
let userTwo = userOne

userTwo.name = "Pappu"

// same log as in line 17 only ref for the heap location was given thus any change is done to same data
console.log(userOne)
console.log(userTwo);