//Dates


let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toISOString());
//console.log(myDate.toJSON());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toLocaleTimeString());

//console.log(typeof myDate);

//let myCreatedDate = new Date(2023, 10, 28)
//let myCreatedDate = new Date(2023, 10, 28, 5, 4) -> for date and specific time
//let myCreatedDate = new Date("2025-11-28") // ->in yyyy/mm/dd format
let myCreatedDate = new Date("9-7-2025") // -> in mm/dd/yyyy format
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000)); // in seconds

let newDate = new Date()
//console.log(newDate.getMonth()); // month starts from 0 to 11
//console.log(newDate.getDate()); // date starts from 1 to 31
//console.log(newDate.getDay()); // day starts from 0 to 6 (0 means Sunday and 6 means Saturday)

//console.log(newDate.toLocaleString('default', {month: 'long'})); // -> for full month name


// IN CASE U don't understand//

let Date1 = new Date()
console.log(Date1)

let name = "Saksham"
console.log(`Hello, my name is ${name} and today's date is ${Date1.toLocaleDateString()}`)