// THIS Keyword => is used to refer to the current context the vairable on which this is applied is holding ||  Current context means - current value 

const user = {
    userName: "Rayala",
    id: 123, 

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome !`);
        
    }
}

// user.welcomeMessage()

// If i change the current context 
user.userName = "Bunny"
// now printing it , it will refer to new one as this means calling current value =>
    // user.welcomeMessage()

// You can use this inside an object but not on a standalone function ->
function chai(){
    let userName = "Rayala"
    console.log(this.userName)
}

// chai() // will give undefined.. this cannot access in a standalone function !!


// ES6 or ecmascript 6 introduced the arrow function no difference with normal function

// Basic => function or  Explicit returning (have to mention return keyword)
const addOne = (num1,num2) => {
    return num1 + num2
}
// console.log(addOne(3,5));

// Implicit returning way to use => function (no need to mention return)

const addTwo = (num1,num2) => (num1 + num2) // for {} in arrow func. you need to give return keyword , otherwise for single condition you can you () where return keyword is not needed ! [Remember].

// console.log(addTwo(4,5))




