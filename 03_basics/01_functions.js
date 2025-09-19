function sayMyName (){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("G");
    console.log("I");
    }

//sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
// addTwoNumbers(3,4)

// function addTwoNumbers(num1, num2){
//    console.log(num1 + num2);
// }

// const result = addTwoNumbers(3,4) //for storing a value in a const

// console.log("Results: ", result); // Result: undefined coz using log


//after using return so other function will run 
//for example -
// function addTwoNumbers(num1, num2){
//    let result = num1 + num2
//    return result
// console.log(Hi); // its showing unreachable right here

// }
function addTwoNumbers(num1, num2){
//    let result = num1 + num2
//    return result
     return num1 + num2  //one more try
}
const result = addTwoNumbers(3,4) //for storing a value in a const

//console.log("Results: ", result); //Result : 7 -> coz used return

// function loginUserName (username){
//     return `${username} just logged in`
// }
//console.log(loginUserName("Shiva")); // return only returns when its stored in or log to print it

//what if no argument passed 
// console.log(loginUserName()); //undefined
//for this use of if else

// function loginUserName (username){
//     if ((username === undefined)) {             //one more way for parameters (!username)
//         console.log("Please enter username");
//         return
//     }
//     return `${username} just logged in`   //coz we use return above in if, this return will not work
// }    
// console.log(loginUserName());

function loginUserName(username= "employee")//default username 
{
    if (!username) {             
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`   
}
console.log(loginUserName("Shivangi")); // & this argument will overwrite "employee"