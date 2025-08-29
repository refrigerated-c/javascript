const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

//bigInt

const bigNumber = 3246789664936836483n
// console.log(typeof bigNumber)

//Reference -

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] //array
let myObj = {
    name:"Shivangi",
    age: 20,
}                                                //Object

const myFunction = function() {
    console.log("Hello World");
}                                    //Functions

console.log(typeof myFunction)
console.log(typeof heros)
console.log(typeof myObj)

// Refrence / Non-Primitive ka datatype - object ki aayega or function ka - object function

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-Primitive)
//      |                  |
//      v                  v  
// copy of declared ,   reference 
//     variable

let myYoutubename = "shivangimishra"

let anothername = myYoutubename    //same name of 1st var
anothername = "spmExplorer"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne  // here we got the reference of original not copy

userTwo.email = "shiv@google.com"  //changing here means changing the original

console.log(userOne.email);
console.log(userTwo.email);

