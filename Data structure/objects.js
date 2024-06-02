// singleton object

const tinderUser = new Object();
tinderUser.name = 'Abhishek';
tinderUser.age = 25;
tinderUser.email = 'abhi@miL.com';
tinderUser.login = function loginFunName(){
    console.log('User logged in');
}
tinderUser.logout = function(){
    console.log('User logged out');
}
console.log(tinderUser);

// object literal
const userId = Symbol('Abhishek')
const jsUser = {
    [userId] : "Abhishek",
    name: 'Abhishek',
    age: 25,
    email: 'abhishek@abhishek.site',
    login: function(){
        console.log('User logged in');
    },
    logout: function(){
        console.log('User logged out');
    },
    isLogged: false
};
jsUser.hello = function(){
    console.log('Hello');
}
console.log(jsUser);
// console.log(jsUser.name);
// console.log(jsUser['name']);
// console.log(jsUser[userId]);
// jsUser.login();
// jsUser[userId] = 'theAbhishek';
// console.log(jsUser);
// jsUser.greetings = function(){
//     console.log('Hello');
// }
// console.log(jsUser.greetings);
// Object.freeze(jsUser);
// jsUser.name = 'Abhishek Srivastav';
// console.log(jsUser);
const user = {...jsUser, ...tinderUser};
console.log(user);
console.log(Object.assign({}, jsUser, tinderUser));