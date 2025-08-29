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