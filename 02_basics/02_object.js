//Singleton object can be created by Constructor
// Object.create

//Object literals do not create Singleton object

// Using symbol in object
const mySym1 = Symbol("key1")

const jsUser = {
    name: "Rayala", //Key & Value Pair 
    "lastName": "Viswanath",
    age : 21,
    location: "Adra",
    isLoggedIn: false,
    [mySym1]: "Use of symbol",
    Days: ["Monday","Tuesday","Friday"]
    
} //This is how object is created ny literal

//Accessing object after creating (Obj_name.property)
//Accessing object when created as "lastName" with colons !

// console.log(jsUser.location) // Direct Access

// console.log(jsUser["lastName"]) // When given like string / symbol.


//When you don't want to let modify values of the object
// Object.freeze(jsUser)

// jsUser.age = 25
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hey there !")
}

jsUser.greetingTwo = function(){
    console.log(`Hey there ${this.name}`) // To use object reference in the function , you need to use string interpolation..
}

// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())


// *** Singleton object or Constructor Object

const newUser = new Object() // Declaring singleton object

// You can do Object nesting 
const newUser1 = {
    fullName : {
        firstname: "Ram",
        lastname: "Charan"
    },
    age: 23
}

// console.log(newUser1.fullName.firstname); //Object nesting


// Object chaining or joining more than one object 
const obj1 = {1: 'a', 2:'b'}
const obj2 = {3: 'a', 4:'b'}

// Using a method to chain them 
const obj3 = Object.assign({}, obj1,obj2)
// console.log(obj3)

// Using the spread operator (Most preferable)
const obj4 = {...obj1 , ...obj2}
// console.log(obj4);



// Accessing keys and values differently to loop thorugh them 
const chatUser = {
    id: "23a4",
    name: "Bunny",
    mail: "bunny@gmail.com"
}

// console.log(Object.keys(chatUser))
// console.log(Object.values(chatUser)); // They return your object's values in Array format so that you can iterate them and perform operations upon them ..

// To check whether any of the object's properties exist in the object or not 
// console.log(chatUser.hasOwnProperty('id')) // Returns boolean value ..


// Object DeStructuring !

const course = {
    courseName: "js in hindi",
    price: "999",
    courseTeacher: "hitesh"
}

const {courseTeacher: teacher} = course //Desturcturing for easy use of so that everytime you dont need to access it by using (course.courseTeacher);

console.log(teacher) 

