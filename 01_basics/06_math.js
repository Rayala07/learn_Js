//Declare number
const score = 500
// console.log(score)

//To use methods on the number , you need to create/declare object of that number

const balance = new Number(100.2345)

// console.log(balance.toString()) // Can be converted to String 
// console.log(balance.toFixed(2)) //Will display fixed size upto the number of decimals you have given .

// console.log(balance.toPrecision(4)) // Upto where you want the number to be displayed (precisely)

//To convert numbers into rupees 
const money = 100000
// console.log(money.toLocaleString('en-IN')) // converts to INDIAN rupees


// *** MATHS *** 

// console.log(Math.abs(-5)) // Converts -ve to +ve value
// console.log(Math.round(4.5)) //Gives round figure
// console.log(Math.ceil(2.2)) // Gives ceiling
// console.log(Math.floor(2.8)) // Gives floor 

// console.log(Math.random()) // By default returns numbers between 0 & 1 
// console.log(Math.floor(Math.random() * 10) + 1) // This will return single digit lowest value instead of returning decimals , since we have done * 10 so till => 10 it will give random values

//If you want to print randoms between a range of numbers

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // Formula that returns numbers b/w 1 & 6

