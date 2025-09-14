//singleton
//Object.create

//object literal

const mySym = Symbol("key1"); //symbol type key is declared


const JsUser = {
    name: "Max",   //it bydefault creates string type keys
    "full name": "Maximilian Schwarzmüller",
    age: 30,
    [mySym]: "mykey1",
    location: "Mumbai",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

//console.log(JsUser.name);// no error coz declaration is without string
//console.log(JsUser["name"]);
//console.log(JsUser.full name); //error (declaration is with string)
//console.log(JsUser["full name"]);

//console.log(JsUser.mySym); //undefined
//console.log(JsUser[mySym]); //to access symbol type key we have to use bracket notation


JsUser.age = 31; //updating existing key
//Object.freeze(JsUser); //it will not allow to update existing key or add new key
JsUser.age = 32; //it will not update coz object is freezed
//console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS User ,${this.name}`); //this - refers to current object JsUser
}

//console.log(JsUser.greeting); //function is not executed here just reference is printed
console.log(JsUser.greeting()); //function is executed here 
console.log(JsUser.greetingTwo()); //function is executed here
