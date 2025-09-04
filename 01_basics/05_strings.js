// const name = "shivangi"
// const repoCount = 50

// console.log(name + repoCount + " Value");  //old way

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  
// //string interpolation way

const gameName = new String('shivangipm')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt('2'))
// console.log(gameName.indexOf('v'))

const newString = gameName.substring(0, 4)
//console.log(newString); // this doesn't follow negative

const anotherString = gameName.slice(-8, 2)
//console.log(anotherString);

const newStringOne = "    shivangi      "
//console.log(newStringOne);
//console.log(newStringOne.trim());

const url = "https://shiva.com/shiv%20om"
//console.log(url.replace('%20', '-'));

//console.log(url.includes('shi'));

//console.log(gameName.split('i'));
// console.log(gameName.anchor());// deprecated feature
//console.log(gameName.at(2));
//console.log(gameName.big()); deprecated feature

//console.log(gameName.blink()); deprecated feature
//console.log(gameName.bold()); deprecated feature
//console.log(gameName.charCodeAt(3)); -> gets character's Unicode, but if emoji gives in part
//console.log(gameName.codePointAt(3)); -> gives full characterCode even of emoji

const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers);
//console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]

//console.log(gameName.fromCharCode(182)); -> returns Unicode-16
//console.log(9731, 9733, 9842, 0x2f804); -> same like above 
//console.log(gameName.strike()); -> deprecated , used to for horizontal line over the text

console.log(letters.indexOf("b")); // when it's kind of list or sentence it works on words wise

// and yes, if there is no such string or whatever u r searching indexOf it will returns => -1







