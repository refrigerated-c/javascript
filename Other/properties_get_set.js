//it's typically a old way of get and set

function User (email, password){
    this.email_ = email;
    this.password_= password
 
    //defineProperty is for get set property
    Object.defineProperty(this, 'email', {    
        get: function(){
            return this.email_.toUpperCase()
        },
        set: function(value){
            this.email_  = value
        }
    })
     Object.defineProperty(this, 'password', {    
        get: function(){
            return this.password_.toUpperCase()
        },
        set: function(value){
            this.password_  = value
        }
    })

}

const chai = new User ("chai@chaos.com", 'hkty56')
console.log(chai.email)
console.log(chai.password);
