// Object literal
const user = {
    username: "deniz",
    loginCount: 8,
    signedIn: true,

    //above was all properties

    //below is method
    getUserDetails: function () {
        //console.log("Got user details");
        //console.log(this); //this means current context 
        //result of this -> {
        //   username: 'deniz',
        //   loginCount: 8,
        //   signedIn: true,
        //   getUserDetails: [Function: getUserDetails]
        // }
        //console.log(username);//error
        console.log(this.username); //reult-> deniz
    }

}
//console.log(user.username); //to access properties
//console.log(user.getUserDetails()); // to run method
//console.log(this); // result is {} an empty object as nodejs it is , while in browser it provides many properties or say  global window object


//Constructor

function User (username, loginCount, isLoggedIn){
    this.username = username
    // above it is variable = above it is what user passes
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this // it is not important to write as it implicitly defines , just for verbose code 
}

// const userOne = User ("muqaddas", 8, true)
// const userTwo = User ("rahmi", 11, false )
// console.log(userOne);
// here without even loging userTwo details of it shown , means it has overwritten on details of userOne
// thats why use Constructor function - it gives new instance or say new copy everytime.

const userOne = new User ("muqaddas", 8, true)
const userTwo = new User ("rahmi", 11, false )
console.log(userOne);
console.log(userTwo);

//whenever we write 'new' keyword
//1. a new empty object is created {} 
//2.a constructor function is called means all the arguments are packed and given
//3. all arguments are injected in 'this' 
//4. result is given

console.log(userOne.constructor); //[Function: User] 
