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
    
}).finally(()=> {
    console.log("The promise is either resolved or rejected");
    
})

const promiseFive = new Promise (function (resolve, reject){
    setTimeout(()=>{
        let error = false;
        if (!error){
            resolve({username: "Tokyo", password: "123"})
        } else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

//instead of .then and .catch
async function consumePromiseFive(){
        const response = await promiseFive;
        console.log(response);
}       // result if error value is true -> UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "ERROR: JS went wrong".

//So use of try and catch


//  async function consumePromiseFive(){
//     try {
//         const response = await promiseFive;
//         console.log(response);
        
//     } catch (error) {
//         console.log(error);
        
//     }

//  }
//  consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch ('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json() //this await is imp as it takes time to fetch data
//     console.log(data);
//     } catch (error) {
//         console.log('Error:', error);
        
//     }
    
    
// }  
// getAllUsers() 
 
fetch ('https://jsonplaceholder.typicode.com/users')
.then ((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
}).catch((err)=> console.log(err))