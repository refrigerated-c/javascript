function SetUserName (username){
    //complex DB calls
    this.username = username;
    console.log("called");
    
}

// function createUser(username, email, password){
//      this.email = email;
//      this.password = password;

//      SetUserName(username);
// }

// const chai = new createUser('Martin', 'mart@netflix.com', '12345');
// console.log(chai); // results -> createUser { email: 'mart@netflix.com', password: '12345' }, without username

//although SetUserName funct is being called but it (createUser) is not holding it value
// thats why SetUserName is not returning anything to createUser function
// so to make it work we need to use call method

// So to properly give the reference of the current object we use call method
//& to hold the value of username we need createUser's own 'this' context , we can't hold it in SetUserName function's 'this' context

function createUser(username, email, password){
     this.email = email;
     this.password = password;

     SetUserName.call(this,username);
}

const chai = new createUser('Martin', 'mart@netflix.com', '12345');
console.log(chai); // results -> createUser {
//   email: 'mart@netflix.com',
//   password: '12345',
//   username: 'Martin'
// }