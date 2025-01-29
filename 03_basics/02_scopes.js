// Global scope -> available all over
// BLock scope -> AVAILABLE only inside {..}

// Scopes of function =>


console.log(add(5)); // Can call this anywhere, as it is not stored in any variable !
    
function add(num){
    return num + 1
}


// console.log(remove(7)); // You cannot do the same thing here , bcz variable is declared after this line !
const remove = function(num){
    return num - 1
}

console.log(remove(8)); // Have to call after function only !!
