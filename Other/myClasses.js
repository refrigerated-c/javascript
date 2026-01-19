// now topics are from ES6

// class User {
//     constructor(name, email, password) {       //as soon as new User() is created, constructor is called
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     changeEmail() {
//         return `${this.email.toUpperCase()}`
//     }

// }
// const client = new User("Angel", "az@MIDIInputMap.com", 123)
// console.log(client.encryptPassword());
// console.log(client.changeEmail());

//behind the scene

function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
}
User.prototype.changeEmail = function(){
    return `${this.email.toUpperCase()}`
}
User.prototype.encryptPassword = function(){
     return `${this.password}abc`
}
const cust = new User("senin", "sd@xyz.com", 4787);
console.log(cust);
console.log(cust.changeEmail());
console.log(cust.encryptPassword());


