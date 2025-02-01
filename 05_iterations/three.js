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
    console.log(item.languageName);
})