// Immediately Invoked Function Expressions (IIFE) -  to immediately execute a function & to avoid global scope pollution use iife

// function chai (){
//     console.log(`DB Connected`);
    
// }
// chai()// passed
// so to avoid global scope pollution use iife

(function chai (){       
    //named iife
    console.log(`DB Connected`);
    
})();

// to end one iife before starting another ; is important

( (name) => {  //unamed or simple iife
    console.log(`DB Connected 2 ${name}`);
    
}) ("bahar")