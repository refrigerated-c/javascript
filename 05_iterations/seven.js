// ( () => {return } ) - vese toh arrow function but callback function when used in loop

const myNums = [1,2,3,4,5,6,7,8,9,10]

//chaining method 

const newNum = myNums.map( (num) => num * 10 )
                      .map( (num) => num + 1 ) 
                      .filter( (num)=> num >=40 )

//const newNum = myNums.map( (num) => num + 10 ) - normal as usual procedure
console.log(newNum);
