// .reduce() gives back the total of the array or objects inside [array] with an user defined intial value 

const nums = [1,2,3,4]

const total = nums.reduce( (acc,currVal) => (acc+currVal),0 )

// console.log(total);


// Mostly used in shopping cart's total ->

// Data is fethced from dB
const shoppingCart = [
    {
        itemName: "Samsung TV",
        price: 40000
    },
    {
        itemName: "Sony Sound",
        price: 25000
    },
    {
        itemName: "firestick",
        price: 5000
    }
]

const totalPrice = shoppingCart.reduce( (acc,item) => (acc + item.price),0 )

console.log(totalPrice);
