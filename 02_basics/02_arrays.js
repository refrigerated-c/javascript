const marvel_heros = ["thor", "Ironman", "Spider-man"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //spread syntax

const another_array = [1,2,3,4, [2,3] ,5 , [6,7, [1,2]]]
const real_array = another_array.flat(Infinity)
console.log(real_array);

console.log(Array.isArray("Shivi")); //false
console.log(Array.isArray(marvel_heros));   //true

console.log(Array.from("Shivi")); //['S', 'h', 'i', 'v', 'i'] - converts into array 
console.log(Array.from({name: "Shivi", age: 20})); //[] - only array like objects can be converted (interesting)

let score1 = 100
let score = 200
let score3 = 300

console.log(Array.of(score1, score, score3)); //[ 100, 200, 300 ] - converts into array
 
