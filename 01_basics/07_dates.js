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

// IN CASE U DON'T UNDERSTAND//
let date = new Date()
//console.log(date)  // current date and time

let referenceDate = new Date(0);
let referenceDate1 = new Date(40000); // 1000 milliseconds = 1 second after 1st Jan 1970
//console.log(referenceDate1);// this is reference date

<<<<<<< HEAD
let Date1 = new Date()
console.log(newDate1)
=======
//let newDate1 = new Date("2029-04-30")
//console.log(newDate1.getDay()); // specific date
>>>>>>> 7525af0fa28577c87aec6e60c9f66d451f195cbd

<<<<<<< HEAD

=======
//let newDate = new Date(year, month, date, hours, minutes, seconds, milliseconds)
let newDate1 = new Date(3020, 10, 28, 4, 5, 28, 45)
console.log(newDate1);

let yr = newDate1.getFullYear()
console.log("This year is", yr);

let mon = newDate1.getMonth()
console.log("This month is", mon + 1); // month starts from 0 to 11

let dt = newDate1.getDate()
console.log("This date is", dt); // date starts from 1 to 31

let day = newDate1.getDay()
console.log("This day is", day); // day starts from 0 to 6 (0 means Sunday and 6 means Saturday)

let hrs = newDate1.getHours()
console.log("This hours is", hrs);

let mins = newDate1.getMinutes()
console.log("This minutes is", mins);

let secs = newDate1.getSeconds()
console.log("This seconds is", secs);

newDate1.setDate(34)
newDate1.setMinutes(70)
console.log(newDate1);
>>>>>>> 7525af0fa28577c87aec6e60c9f66d451f195cbd