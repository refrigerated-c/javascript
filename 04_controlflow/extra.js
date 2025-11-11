let day;
let date = new Date().getDay();
 
switch (date) {
  case 0:
    day = "Sunday";
    console.log("it's Sunday");
    
    break;
  case 1:
    day = "Monday";
     console.log("it's Monday");
    break;
  case 2:
    day = "Tuesday";
     console.log("it's Tuesday");
    break;
  case 3:
    day = "Wednesday";
     console.log("it's Wednesday");
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
