const myObject = {
    js : "javascript",
    cpp : "C++",
    swift : "swift by apple"
}

// to iterate in objects we use 'for-in loop'

for (const key in myObject){
    // console.log(`${key} shortcut for ${myObject[key]}`);   
}

// While data comes from the databae , it comes in form of arrays with objects inside the array , so to iterate upon them , you need to use the .forEach loop 

const myCoding = [
    {
        languageName: "javascript",
        fileType: ".js"
    },
    {
        languageName: "python",
        fileType: ".py"
    },
    {
        languageName: "java",
        fileType: ".java"
    }    
]


myCoding.forEach( (item) => {
    // console.log(item.languageName);
})


// When you want to get some values in return on basis of condtion such as filtering data 
const nums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = nums.filter( (num) => (num > 5) ) // Remember , like here when giving parenthesis you do not need to give return statement , 
// console.log(newNums);

const newNums = nums.filter( (num) => {
    return num > 4  // using curly braces , you need to give return statement { bcz using curly braces establishes a SCOPE }
} )

console.log(newNums);
