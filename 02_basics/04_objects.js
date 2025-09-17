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
//const obj3 = {...obj1, ...obj2}; // Spread Operator
//console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } //Spread output

const obj3 =Object.assign({}, obj1,obj2)
//console.log(obj3); //Using {} at the start ensures we don’t accidentally change obj1 or obj2.
//Its like saying, "Hey, make me a fresh new object with all these properties, please!"

const user = [
    {
        id:1,
        email: "s@gmail.com",

    },
    {
        id:2,
        email: "b@gmail.com",

    },
    {
        id:3,
        email: "c@gmail.com",

    }
]
//console.log(user[0].email)

//console.log(tinderUser);
//console.log(Object.keys(tinderUser)); //to access keys
//console.log(Object.values(tinderUser)) // to access values
//console.log(Object.entries(tinderUser)) // array in array

//console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to find a property exist or no

//console.log(Object.fromEntries(tinderUser)) -error

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor)

//********DE-STRUCTURE*******/

const {courseInstructor} = course
//for more de-structing
const {courseInstructor: instructor} = course
console.log(instructor);

//const navbar = (props.company) => {
// }
//But in React instead of using props. everytime use of {}

const navbar = ({company}) => {
}
navbar (company = "Sinaner Co.")

//*****JSON & API FORMAT ***********/

{
  "name": "Aisha",
   "gender": "Female"
  "hobbies": ["reading", "traveling", "coding"]
} //in object literal
   // ALSO 

[
    {},
    {},
    {}
] // object in array