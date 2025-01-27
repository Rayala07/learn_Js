//Declaring array 
const arr = [1,2,3,4,5]

//Now you can perform functions on it to get any desired output
arr.unshift(9) // adds 9 in start index of arr

arr.shift() // removes first index of the arr
// console.log(arr)

// const newArr = arr.join() // this converts the array into String!
// console.log(newArr);
// console.log(typeof newArr)


// slice, splice methods 

const arr2 = arr.slice(1,3)
// console.log(arr2); // Simple ! Just slices the given range and displays it ,but if we check the original arr now ->
// console.log(arr) //It will stay as it is ..

//.. Here comes splice() method 

const arr3 = arr.splice(1,3) //considers last index too and slices the value , and also slices elements from the Org. arr ! =>    
// console.log(arr3);

// console.log(arr) //Orginal array also changed..


// Merging to arrays => You can use concat() method or else the spread operator [...var_name, more if you want] 

const indoorSports = ["Carrom","TableTennis"]
const outdoorSports = ["Football", "Basketball", "Cricket"]
const things = ["Ball" , "Bat"]

const allSports = indoorSports.concat(outdoorSports, things) //
// console.log(allSports)

// else spread operator

const allSports2 = [...indoorSports, ...outdoorSports, ...things]
// console.log(allSports2)

//Data can occour from the web in different types
//To convert them into arrays to perform operations on it 
const data = "Rayala Viswanath"
console.log(Array.from(data)) // Array.of can also be used !!