class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`UserName is ${this.username}`);
        
    }
}

//call ka baap

class Teacher extends User{
    constructor(username, email, password){

        super(username); // bina call or this ke dusri class ke username ka excess 

        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course is added by ${this.username}`);
        
    }
}
const chai = new Teacher ("Meltem", "melt@456.x", 0909)
chai.logMe();
chai.addCourse();

const tea = new User("Selim")
tea.logMe();
//tea.addCourse(); // error -> tea doesn't have access of addCourse();

//let's check
console.log(chai === tea);// false
console.log(tea === chai);// false
console.log(chai instanceof Teacher); //true
console.log(tea instanceof Teacher); //false
console.log(chai instanceof User); //true
console.log(tea instanceof User); //true





