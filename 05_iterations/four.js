 // .map() method

const nums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = nums.map( (num) => (num * 10) )

// You can do chaining using map(to perform operations) and filter(to check condition) !! 
const newNums = nums.map( (num) => num * 10 ).map( (num) => num + 2 ).filter( (num) => num >=40 )

// console.log(newNums);


