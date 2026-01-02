// var a = 300
// //let a = 300
// if (true){
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a);
    
// }

// console.log(a);
//  console.log(b);
// console.log(c);

function one(){
    const username = "shiv"

    function two(){
        const website = "youtube"
        //console.log(username);
        
    }
    //console.log(website); //error coz using it outside it's scope
    
    two()
}
one()

//child function can access parent's variable
//just like functn two can access username from functn 1

if (true) {
    const username = "Shiv"
    if (username === "Shiv") {
        const website = " youtube"
        //console.log(username + website);
        
    }
    //console.log(website); // error - out of scope
    
}
//console.log(username); same out of scope

// ++++++++++++ interesting ++++++++++

console.log(addone(5));

function addone(num){
    return num + 1
}
//addone(5) //not printed we just called the function
//no error

//addTwo(4)  // error coz of (last comment)
const addTwo = function(num){
    return num + 2

}
//addTwo(4) // no error
// If we call a function before its declaration, it will execute without error only if it's properly declared using a function declaration. But if it's declared by holding it in a variable, then it won't work and will throw an error.//
