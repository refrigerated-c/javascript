// for of

// ["","",""] // strings in array
// [{},{},{}] // objects in array

const arr = [1,2,3,4,5]
// for (const element of object) {
                                   
// } this is basic syntax of for of loop - here object doesn't mean object of js but normal object like in example our object is arr and I named individual element 'num'

for (const num of arr) {
    //console.log(num);
    
}

const greetings = "Hello World!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
    
}

//Maps
//object holds key-value pairs and remembers the original insertion order(sequence) of the keys
//A key in the Map may only occur once; it is unique in the Map's collection. no duplication

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

//console.log(map);
for (const key of map) {
    //console.log(key); // result will show in array form
    
}
for (const [key, value] of map) {
    //console.log(key, ':-', value); 
    
}
// same loop for object

// const myObject = {
//     game1:'GTA',
//     game2: 'Counter-Strike'
// }
for (const [key, value] of myObject) {
    //console.log(key, ':-', value);
    
} // no result coz myObject is not iterable