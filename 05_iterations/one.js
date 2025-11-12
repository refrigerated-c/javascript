//for
                //  this pooooooooortion (is known as condition check)
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5){
//         console.log("5 is best number")
//     }
//     console.log(element);
// }

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <=10 ; j++) {
        //console.log(`Inner Loop value ${j} and outer loop value ${i}`)
        //console.log(i + `x` + j + `=` + i*j); // printing tables
        
    }
}

//Array
let myArray = ["iron-man", "Spiderman", "blackwidow"]
//console.log(myArray.length);

for (let index = 0; index <= myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}
//1st- we wrote index (less than) < myArray.length not <= it will result undefined coz lenght of array is 3 but actual how 0, 1, 2 and there is in actual no 3rd array if starts from 0.

//2nd - index "++" is imp else the 1st array will forever run 

//Break

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${index}`);
    
    
// }
//Continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
    
    
}