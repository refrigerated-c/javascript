//Question - Can we change the value of Pi ?

//console.log(Math.PI); //3.141592653589793
Math.PI = 5 
//console.log(Math.PI); //3.141592653589793, no can't change

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
//console.log(descriptor); //{
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }  these are all hardcore values

// Yes we can define our own values here, can't change the above one

const shows = {
    name: 'Fatmagul',
    runtime: 3200,
    isAvailable: true,

    watch: function() {
        console.log("Hindi mai nhi mili");
        
}
}
//console.log(Object.getOwnPropertyDescriptor(shows)); //undefined
console.log(Object.getOwnPropertyDescriptor(shows, "name"));

Object.defineProperty(shows, 'name',{
    writable: false,
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(shows,'name'));

for (let key of Object.keys(shows)) {
    if(typeof shows[key] !== 'function'){
        console.log(`${key}: ${shows[key]}`);
    }
    
} // loop to just showcase

//if I false enumerable the name property will stop showing up result will be this , without name:-
//runtime: 3200
//isAvailable: true

//Conclusion that property will be disabled if enumble is false
