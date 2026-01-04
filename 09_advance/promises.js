//create promises
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network 
    setTimeout(function (){
        resolve() //resolve connected with .then()
        console.log('Async task is complete');
        
    },1000)
})

//consume promise
promiseOne.then(function(){
    //here value is return of whatever work is being done above
    console.log("Promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },2000)
}).then(function(){
    console.log('Promise resolved');
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Kerim", place:"Gul Mutfa"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error){
            resolve({username:"fatmagul", password:"mustafa"})
        } else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

// const username = promiseFour.then((user)=>{
//     console.log(user);
//     return user.username    

// })
// console.log(username) //error in this way

promiseFour
.then((user)=>{
    console.log(user);
    return user.username //if not this instead of 'fatmagul' result will be undefined
    
}).then((username)=>{
    console.log(username);
    
}).catch((err)=>{
    console.log(err);
    
})


