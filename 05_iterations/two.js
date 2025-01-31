// for-of loop & for-each loop (Java) both are4 same ->

const arr = [1,2,3,4,5]

for(const num of arr){
    // console.log(`arr = ${num}`);
}

const str = "Rayala OP" // -> this will print each character of the string

const str2 = ["Rayala OP"] // -> will print each word of  the string in the array !!

for(const word of str2){
    // console.log(word);
}


// Map acts as a object and has a key - value pair , it is known for retreving only unique values =>
const map = new Map()

map.set('IN' , 'India')
map.set('IN' , 'India') // will print only one 

// console.log(map);

// Objects are not iterable by for-of loop !! (Remember)
