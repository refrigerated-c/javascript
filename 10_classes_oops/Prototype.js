//Goal behind it
let myName = "Murat   "

//now I want a true length of this string without counting spaces

//console.log(myName.trim().length);
//it is a way not eveytime we can use, what if I want to use it in every other string

//console.log(myName.trueLength) //something (method) like this , which I can use it in everyother string

let myHeros = ["thor", "spiderman"] //an Array

//an Object
let heroPower = {
    thor:"hammer",
    spiderman: "sling",

    //a method
    getSpiderPower: function (){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.kerim = function(){
    console.log('Kerim is present in all objects');
    
}
//what if I want to add a new method to this object like 
//heroPower.kerim() 

// but there is no such method , so lets create one in line 25

heroPower.kerim()
//now I can use kerim method in every other object
myHeros.kerim() // also access able in array, because array is also an object 
myName.kerim() // also access able in string, because string is also an object

//but if I inject a prototype in Array, string  or function it will not be accessible in other objects
Array.prototype.heyArray = function(){
    console.log("Hey I am an array");
}

//myHeros.heyArray() // works

//myName.heyArray() // error , because heyArray is not in string prototype    

//inheritance in javascript is prototype based

//below is a old way

const User = {
    name: "default",
    email: "google@mail.com"
}

const Teacher = {
    makeVideo: true,
    __proto__: User
}
const TeacherSupport = {
    isAvailable: false
}

const TASupport = {
     makeassigment: 'JS assignment',
     fullTime: true
}

//basic methoods toh sbke pass hai like toString(), valueOf() etc

//now to link two or other  objects 
//use of __proto_  (although it is discouraged now a days)
TASupport.__proto__ = TeacherSupport

//modern syntax
Object.setPrototypeOf(TeacherSupport, Teacher)

//finishing the goal with prototype inheritance

let anotherString = "   Hello World   "

String.prototype.truelength = function(){
    console.log(`True length is: ${this.trim().length}`);
    
}
anotherString.truelength() // now it works

" Shivangi   ".truelength() // also works
"Mukaqdass         ".truelength() // also works