// IIFE (Immediately Invoked Function expressions)
// Used to prevent global pollution means too many var and function with same name declared which could create conflicts

(function user(){
    //   named iife
    console.log('Me');    
})(); // need to use ; to end this function

( (name) => {
    console.log(`Connected to ${name}`);
    
})('SQL');