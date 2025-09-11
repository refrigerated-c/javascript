// array

const myArr =  [0,1,2,3,]
const myHeros = ["iron man", "hulk"]

const myArr2 = new Array (1,2,3,4) // also creates an Array, and assigns values to it, although there is no need to use
//console.log(myArr[1]); 

//Array methods

//myArr2.push(6) // adds value 6 
//myArr2.pop() // removes the last value

//myArr2.unshift(9) // starting mai ek value add hogi , or sari indexing change kr de gi
myArr2.shift()  //Shift (remove) the first element of the array
//console.log(myArr2)

myArr.shift()
//console.log(myArr);

//console.log(myArr2.includes(9)); // answer in boolean (true or false)
//console.log(myArr.indexOf(6));   // there is no 6 in array so result will be -1

const newArr = myArr.join() // converts myArr to string
//console.log(myArr)
//console.log(typeof(newArr))

//slics, splice
const myArr3 = [0,1,2,3,4,5,6]

console.log("A ", myArr3); //original array

const myn1 = myArr3.slice(1,3)
console.log(myn1);
console.log("B ", myArr3); //with slice

const myn2 = myArr3.splice(1,3);
console.log(myn2);
console.log("C ", myArr3); //with splice

// key difference - splice manipualtes/overwrites original array while slice doesn't




