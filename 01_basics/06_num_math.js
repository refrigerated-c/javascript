const score = 400
//console.log(score)//JS auto detects it as a number

const balance = new Number(100) //Using number function to explicitly define number in JS
//console.log(balance)

//Note : Number has comparativly less prototypes properties and methods than string

//console.log(balance.toString().length) //Converts number to string;
//console.log(balance.toFixed(2)) //Converts number to string with fixed decimal points

const otherNumber = 123.1234567923878456
//console.log(otherNumber.toPrecision(8)) //Converts number to string with specified length (precise krke ya round krke)

const hundreds = 10000000
//console.log(hundreds.toLocaleString('en-IN')) //Converts number to string with commas as per local 

// +++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-3)); //Absolute value - it tells the direction of number (always positive)
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); //Rounds up to nearest largest integer
// console.log(Math.floor(4.9)); //Rounds down to nearest smallest integer

//console.log(Math.min(2,3,4,5,-1,0)); //Gives minimum value
//console.log(Math.max(2,3,4,5,-1,0)); //Gives maximum value
//console.log(Math.random()); //Gives random number between 0 and 1 (not including 1)
//console.log(Math.random()*10); // ek number point se phele shift hogya

//console.log((Math.random()*10) +1) // value will not be 0 or around it same like using floor but ek  number nhi aata yaha
// console.log(Math.floor(Math.random()*10)); //Gives random integer between 0 and 9 (sirf ek no. aata hai)
 console.log(Math.floor(Math.random()*10)+1); //Gives random integer between 1 and 10

 const min = 10
 const max = 20
 console.log(Math.floor(Math.random()*(max-min+1))+min); //Gives random integer between min and max (both inclusive)

  console.log(Math.floor(Math.random(min, max)));