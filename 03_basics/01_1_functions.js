 function calculateCartPrice1(num1){
     return num1
 }
 //console.log(calculateCartPrice1(200, 400, 300)); // 200

//use of rest operator
function calculateCartPrice2(...num1){
    return num1
}
//console.log(calculateCartPrice2(200, 400, 300)); //[ 200, 400, 300 ]

// function calculateCartPrice2(val1, val2, ...num1){
//   return num1
// }
// console.log(calculateCartPrice2(200, 400, 300, 500, 700,800)); //200 in val1, 400 in val2, and rest in num & printed

 const user = {
     user: "Shiv",
     price: 999
 }
function handleObject(anyobject){
    console.log(`Username is ${anyobject.user} and price is ${anyobject.price}`);

}
handleObject(user)
handleObject({          //another way to use object
    user: "sam",
    price: 299
})

For Arrays

 const myNewArray = [200, 300, 400,500]

 function returnSecondValue(getArray){
     return getArray[1]
 }
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1000,5000,9000,400])); //another way for passing array
//! kmwqkmsqdmjd
//! THis is a comment