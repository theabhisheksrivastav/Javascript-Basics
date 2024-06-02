function sayHello(){
    console.log('Hello');// this only logs the text while returns nothing
}
//sayHello() // executes the function
sayHello // gives refference to the function
//console.log(sayHello);
function calculateBmi (w, h){
    return w/(h*h); 
}// h, w are parameters for which arguments must be passed when calling the function
// this only returns the value and doesn't logs it on the console
calculateBmi()
calculateBmi(68.2, 1.69)
calculateBmi
const bmi = calculateBmi
const bmi2 = calculateBmi()
const bmi3 = calculateBmi(68.2, 1.69)
const bmi4 = calculateBmi(68.2, 1.69).toFixed(2)
//console.log(`bmi1 is ${bmi}, bmi2 is ${bmi2}, bmi3 is ${bmi3}, bmi4 is ${bmi4}`);

function cartValue (...val){
    let total = 0
   val.forEach(val => {
     total += val
   });
   return total
}//here ... is called rest operator
const totalPrice = cartValue(99, 475, 555, 25799)

const user = {
    username : 'Abhishek',
    totalVal : totalPrice,
    greet : function() {
        console.log(`Hello ${this.username}`)
    },
    logout : (username = this.username) => {
        // arrow function have no this context 
        console.log(`bye bye ${this.username}, `)
        console.log(`${username} , bye bye`)
    }
}

function sendMoneyReq(obj){
    console.log(`Total cart value for ${obj?.username} is ${obj?.totalVal} INR`)
}// as you can see we can also use obj as arguments for a function just like this arrays can also be used for arrays indexes are key

sendMoneyReq(user)

const paymentInit = () => {
    console.log(`payment init`)
}
user.greet()
user.logout()