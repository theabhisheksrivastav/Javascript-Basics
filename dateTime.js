let myDate = new Date();
console.log(myDate);

let myCreatedDate = new Date(2020, 11, 5, 10, 30, 0); // year, month, date, hour, minute, second
console.log(myCreatedDate.toString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); // timestamp in seconds

let newDate = new Date();
console.log(newDate.getDate());

newDate.toLocaleString('default', {
weekday: "long"
})