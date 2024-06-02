let myArr = [1, 2, 3, 4, 5];
// console.log(myArr);
// //Array methods

// // 1. push() - Adds an element to the end of the array
// myArr.push(6);
// console.log(myArr);
// 2. pop() - Removes the last element from the array
// myArr.pop();
// console.log(myArr);
// console.log(myArr.pop());
// console.log(myArr);
// // 3. shift() - Removes the first element from the array
// myArr.shift();
// console.log(myArr.shift());
// 4. unshift() - Adds an element to the beginning of the array
// myArr.unshift(9);
// console.log(myArr.unshift()); // returns the length of the array
// 5. concat() - Concatenates two or more arrays
// let myArr2 = [6, 7, 8, 9, 10];
// let newArr = myArr.concat(myArr2);
// console.log(newArr);\
// 6. slice() - Returns a part of the array
// let newArr = myArr.slice(1, 4);
// console.log(newArr);
// 7. splice() - Adds or removes elements from the array
// myArr.splice(2, 0, 6, 7, 8); // here 2 is the index from where we want to add elements, 0 is the number of elements we want to remove, 6, 7, 8 are the elements we want to add
// console.log(myArr);
// myArr.splice(2, 3);
// console.log(myArr);
// 8. reverse() - Reverses the array
// myArr.reverse();
// console.log(myArr);
// 9. sort() - Sorts the array
// myArr.sort();// time complexity is O(nlogn)
// console.log(myArr);
// 10. indexOf() - Returns the index of the first occurrence of the element in the array
// console.log(myArr.indexOf(3));
// 11. lastIndexOf() - Returns the index of the last occurrence of the element in the array
// console.log(myArr.lastIndexOf(3));
// 12. includes() - Checks whether the array contains a certain element
// console.log(myArr.includes(3));
// 13. find() - Returns the first element that satisfies the condition
// let result = myArr.find((element) => element > 3);
// console.log(result);
// 14. findIndex() - Returns the index of the first element that satisfies the condition
// let result = myArr.findIndex((element) => element > 3);
// console.log(result);
// 15. filter() - Returns an array of elements that satisfy the condition
// let result = myArr.filter((element) => element > 3);
// const newArr = [9, 8, 0]
// myArr.push(newArr)
// console.log(myArr);
// console.log(myArr.flat());// flat(takes the depth for redundant) method is used to flatten the array as in this case we have an array inside an array so we can use flat() method to concatenate the arrays
// using concat will also work
// while we can also spread
// myArr.push(...newArr);
//loop
// for (let i = 0; i < myArr.length; i++) {
//     console.log(myArr[i]);
// }
// for (let element of myArr) {
//     console.log(element);
// }
// myArr.forEach((element) => {
//     console.log(element);
// });
// myArr.map((element) => {
//     console.log(element);
// });
// myArr.map((element) => {
//     return element;
// });
// myArr.map((element) => {
//     return element * 2;
// });
// console.log(myArr);
// let result = myArr.map((element) => {
//     return element * 2;
// });
// console.log(result);
// let result = myArr.filter((element) => {
//     return element > 3;
// });
// console.log(result);
// let result = myArr.reduce((accumulator, element) => { // accumulator is the value that is returned by the function and element is the current value reeduce is used to reduce the array to a single value
//     return accumulator + element;
// });