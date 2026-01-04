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