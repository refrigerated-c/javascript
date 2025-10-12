const user  = {
    username: "lelya",
    price:  999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);    //this here refering the current context
        console.log(this);  //this were refers 'current context'
        
    }
}

// user.welcomeMessage()
// user.username = "oruk" //successflly changed
// user.welcomeMessage()

//console.log(this); //result is empty object coz no context is defined (after commenting out) in global scope
//Interestingly —earlier, people used browsers to execute JavaScript, but now JavaScript engines exist as standalone environments like Node.js, Deno, and Bun. In the browser, the most dominant object is `window`, which acts as the global context. That’s why, when you run `this` in Node (and there's no global object in scope), it returns an empty object. But if you run the same code in a browser, `this` refers to the `window` object.

// function chai (){
//     let username = "hitesh"
//     console.log(this.username);
    
// }
// chai() // undefined coz 'this' doesn't work with function

// const chai = function chai (){
//      let username = "hitesh"
//      console.log(this.username);
// }
// chai () //same undefined

const chai =  () => {
     let username = "hitesh"
     console.log(this.username);
}
//chai () // same undefined

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }  basic way 

//implicit way - here no use of {} & return 'ofcourse' , but if we r using return keyword we ned to wrap it in {} , will be use in React.
//In implicit to execute object we have to wrap in () in line 49
//explicit - use of {} & return 'ofcourse'

//const addTwo = (num1, num2) =>  num1 + num2
//or
//const addTwo = (num1, num2) =>  (num1 + num2) // same result as above
const addTwo = (num1, num2) =>  ({username: "Omer"})

console.log(addTwo(3, 6));
