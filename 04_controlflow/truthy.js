const userEmail = []

if (userEmail){
    console.log("Got user Email");
} else{
    console.log("Don't have user email");
    
}
//1st - here we doesn't define value with true or false , it got a string so if statmt executed
//but if the string is empty is declares false (else) statmt

//falsy values
// false, 0, -0, BigInt -> 0n, "", null , undefined, Nan

//truthy values
// "0", " ", 'false', [] (empty array), {} (empty object), function(){} (empty function)

//if we want to check is it empty or not so separately check

//  if (userEmail.length === 0){
//     console.log("Array is empty");
    
//  }
 const emptyObj = {}

 if (Object.keys(emptyObj).length === 0){
    //console.log("Object is empty");
    
 }

 // Nullish Coalescing Operator (??): null undefined
 //- To provide a fallback (default) value only when the original value is null or undefined.
// ??- is more precise than || as it only checks for null & undefined

 let val1;
  //val1 = 5 ?? 10
  //val1 = null ?? 10
  //val1 = undefined ?? 15
  val1 = null ?? 10 ?? 20

console.log(val1);

let user = { name: null};
let greeting = user.name?.toUpperCase() ?? "Guest";
// Output: "SHIVANGI" // if null or undefined then guest
console.log(greeting);

//Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

