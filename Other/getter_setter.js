console.log("RUNNING NEW CODE");
console.log("RUNNING getter_setter.js");


class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    //get setter itself creates method of properties
    get password(){
        return this._password.toUpperCase()
    }
    //set is also neccessary with get
    set password(value){
        //this.password = value //RangeError: Maximum call stack size exceeded ->at set password
        //this._password = value.toUpperCase() //dono get set ko same variable se set krna pdega vrna error aayega -> at get password
        this._password = value
    }
    get email (){
        return this.email123.toUpperCase() //return in get is necessary not in set
    }
    set email(val){
        this.email123 = val
    }
}
    
//get pe uppercase lgaya means jo show hoga vo uppercase mai ho rha hai, pr jo set ho raha hai vo value ho rhi hai
const shiv = new User ("shiv@ai.com", "abc34")
// console.log(shiv.password)
// console.log(shiv.email);

shiv.password = "newpassword123";
console.log(shiv.password); // setter name is used to update the _password property

//Getters and setters are commonly used in ES6 classes to control access to private properties.
