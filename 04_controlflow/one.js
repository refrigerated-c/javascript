//Control flow -  the order in which the computer executes statements in a script.
//sometimes we  want a piece of code to run when User is logged in & another piece when logged off. That's where we use conditions (if, else, etc.)

//if 

if (true) {
           // it will execute coz it's true here     
}

if(false){
         
          
          //from 10 to 14 it will not execute
}
//Comparisons -> < (less than), >, <= , >=, ==,!=, === (even tells datatypes)


if(3 != 2){

}// result will be 'true'
 

// if(3 == "3"){
//  console.log("executed");
 
// }// log will be print

if(3 === "3"){
 //console.log("executed");
 
}// log will not print becoz data type are differnt

// const temperature = 55

// if (temperature < 50){
//     console.log("temp less than 50");
    
// }
// console.log("Hi! it's too hot here"); // outside scope toh ise condition koi farak nhi pdta

const temperature = 41

if (temperature < 50){
    //console.log("temp less than 50");
    
} else{
     //console.log("Hi! it's too hot here");
}
 
//Var wali problem
// const score = 200

// if (score > 100 ){
//     let power = "fly"              // if we use var here it will polute & 2 results will be there                       
//     console.log(`User power: ${power}`);  
    
// }
// console.log(`User power: ${power}`);

//Shorthand for if else - implicit way

// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2")//outside scope , but "," and writing 2 line is not a good practice;

// if (balance < 500){
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750");
    
// } else if (balance < 900){
//     console.log("less than 900");
// } else  {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromMail = true

 if (userLoggedIn && debitCard){    // "&&" used for if we want all conditions to be true
     console.log("Allow to buy course");
 }
// if (userLoggedIn && debitCard && 2==3){    // 2 is not equal to 3 so result will be not executed
//     console.log("Allow to buy course");
// }

if (loggedInFromGoogle || loggedInFromMail){ // "||" is or - one condition should be true
    console.log("User logged in");
    
}