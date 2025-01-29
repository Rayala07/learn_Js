// Function means , some lines of code stored inside a package ,so that you can use them repeatdedly wherever you want them to !

function myName(){ // Parameters
    console.log("RV")
}

// myName(arguments / values)

// In functions , when you console log it and call it using another variable the printed value will not be assigned to the new variable ->
function add(num1 , num2){
    console.log(num1 + num2);
}

// add(3,4)
// result = add(4,5)
// console.log(result); // will return undefined !

// so to store the result in a new variable you need to return it , remember !!
function minus(num3, num4){
    return num3 - num4
}

let answer = minus(5,8) // now if you run it , it will print nothing SO ->
// console.log(answer)

// When you dont know how many arguments would be passed into the parameter !
// Need to use -> rest operator

function shopCart(...num){
    return num
}

console.log(shopCart(300,55,44,322,455,33223,5556,3)) // Rest operator will return values as many as you enter in an array .

// passing objects in a function

const user1 = {
    name: "Arjun",
    age: "25"
}

function callUser(anyObject){
    return `Name is ${anyObject.name} and age is ${anyObject.age}`
}

console.log(callUser(user1))

//Calling any array in a function 

const arr1 = [2,3,4,5,6]

function callArr(anyArray){
    return anyArray[2]
}

console.log(callArr(arr1));
