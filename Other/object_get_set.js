const User = {
    _email: 'h@shic.it',
    _password: 'rtx45', // these are private properties

    get email34(){                        //main toh ye hai 'email34'
        return this._email.toUpperCase()
    },
    set email34(val){
        this._email = val
    }

}
const tea = Object.create(User) //Object.create() is a factory function
console.log(tea.email34);
 //if I log just email here it will be undefined coz get and set is set for email34 not 'email', 

//although for private properties in ES2022 # is used to private a property but also can use get, set and way we used.
