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
    console.log("Console is empty");
    
 }