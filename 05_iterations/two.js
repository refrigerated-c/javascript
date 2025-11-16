let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ["Simi", "Maheen", "Bahar"]
let arr = 0

while (arr < myArray.length) {
    //console.log(`Artist of Tatli Ask are ${myArray[arr]}`);  //implicity write arr so that array's index run according to arr value
    arr = arr + 1

}

//Do While loop
let score = 0
do {
    console.log(`Score is ${score}`);
    score++

} while (score <= 10);
//it will not only till 10 but also print above  10 numbers coz here condition is checked after loop is printed

// let score = 12
// do {
//     console.log(`Score is ${score}`);
//     score++

// } while (score <= 10); //12 will print first , then check the condition 

// A while loop is used when the number of iterations is unknown, like reading user input until it meets a condition.
// A for loop is better when the number of iterations is predefined, like iterating over a fixed range.