//iteration in objects
//for in

const myObjct = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"

}
for (const key in myObjct) {
    //console.log(key); //only for keys
    //console.log(myObjct[key]); //for values of key
    //console.log(`${key} shortcut is for ${myObjct[key]}`); //for both
    

}
//in array
const programming = ["py", "js", "rb", "java", "cpp"]

for (const key in programming) {
    //console.log(key);
    // result will show here in 0 to 4 (specifcaly no. of array)
    //console.log(programming[key]);
}

//for in in maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// for (const key in map) {
//    console.log(key);
   
    
// } // no result