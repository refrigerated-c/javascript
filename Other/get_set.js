class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get password() {
        return this._password.toUpperCase();
    }

    set password(value) {
        this._password = value;
    }

    get email() {
        return this.email123.toUpperCase();
    }

    set email(val) {
        this.email123 = val;
    }
}
const shiv = new User("shiv@ai.com", "abc34");  
console.log(shiv.password);
console.log(shiv.email);
shiv.password = "newpassword123";
console.log(shiv.password);