//const tinderUser = new Object(); // According to hitesh sir it's a Singleton OBJECT, but → it's a constructor syntax → non-singleton (new instance each time).
const tinderUser = {}; // & it's a NON-SINGLETON OBJ,  but it's a→ object literal syntax →        non-singleton (new instance each time).

tinderUser.id = "123abc";
tinderUser.name = "Sanket";
tinderUser.isLoggedIn = false;  

//console.log(tinderUser);

const regularUser = {
    email: "sam@google.com",
    fullname : {
        userfullname:{
            firstname: "Sanket",
            lastname: "Kumar"
        }
    }
}
//console.log(regularUser);

// How to access the data from objects?
// 1. Dot notation
//console.log(regularUser.fullname.userfullname.firstname); // Sanket

const obj1 = {1: "a", 2: "b"}; 
const obj2 = {3: "a", 4: "b"};

//const obj3 = {obj1, obj2}; // Object inside object
const obj3 = {...obj1, ...obj2}; // Spread Operator
//console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }