const coding = ["js", "py", "ruby", "Kerim"]

 coding.forEach( function(item){             //no need to write name as it understands that it's a callback funct for which arr
     //console.log(item);
    
 })

//in arrow function

coding.forEach( (val) => {
 //console.log(val);
 
})

// normal function bahar bhi likh ke call kr skte hai

function printMe(item) {
    //console.log(item);
    
}

 //coding.forEach(printMe) //just reference it not execute it with ()

//foreach not only use item or val as param but also others too

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
    
// }) //js 0 [ 'js', 'py', 'ruby', 'Kerim' ]
// py 1 [ 'js', 'py', 'ruby', 'Kerim' ]
// ruby 2 [ 'js', 'py', 'ruby', 'Kerim' ]
// Kerim 3 [ 'js', 'py', 'ruby', 'Kerim' ]

//Now as we seen that objects in array in three.js , so now let's put forEach loop in it

const myChar = [
    {
        characterName: "Kerim",
        showName: "Fatmagul"
    },
    {
        characterName: "Shahan",
        showName: "tatli ask"
    },
    {
        characterName: "Gulten",
        showName: "Kuzey Guney"
    }
]

myChar.forEach((item)=>{
    //console.log(item.showName);
    
})

// ANALYSIS
//  FOR in DESCRIPTION       =>     it works for ARRAY and OBJECT but not works on MAP
//  FOR of DESCRIPTION      =>     it works for ARRAY and MAP[ key, value] but not works on OBJECT.
//  FOR each DESCRIPTION =>     it works for ARRAY, OBJECT and MAP.