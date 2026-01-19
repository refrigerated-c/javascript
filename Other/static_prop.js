

class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
    static createId(){
        return `123`
    }
}
const iphone = new User("Furkan")
console.log(iphone);
iphone.logMe();
//console.log(iphone.createId()); //error not access able coz of use of 'static'

class Master extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const lone = new Master("Lone", "lons@234")
console.log(lone);
lone.logMe();
console.log(lone.createId()); //static even enables method for  children