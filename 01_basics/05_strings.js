// 1st type to declare String
const name = "Rayala"
const gameKills = 300

// console.log(name + "kills = "+ gameKills) x should not use this way ,instead

//We should use StringInterpolation where 'Variable Injection' is done ->

//console.log(`Player name is ${name} and in game kills are ${gameKills}`)

/*

Another way to declare strings are using Object type , we use this type when we need to perform operations with the string , such as charAt().. toLowerCase().. etc ! (functions)
When you check the working of this type :-
It will be index based , so that you can iterate through the string characters.
if => 
    let name = new String('Rayala')
    console.log(name)

    String type output = {'R','a','y',...}

    Objects of these are called 'Prototypes' that are functions for the string.

*/

const gameName = new String('Reyzox')

// console.log(gameName[0]) 

// console.log(gameName.charAt(3))

// console.log(gameName.substring(1,3)) //Start is inclusive whereas End is exclusive.. also remember can't use negative indexing in this method

console.log(gameName.slice(-6,0)) //Negative can be used

const anotherPlayer = "  Tracy  "

// console.log(anotherPlayer);
// console.log(anotherPlayer.trim()) //If you use only .trim = only function will print , so you have to use .trim()   // Trim removes whiteSpace characters from the string.

const tree = "Mango tree"

// console.log(tree.replace('tree', 'chetu')) // Used to replace 'char' / 'word'

// console.log(tree.includes("chetu")) // Will display false although I have replaced above , bcz it is stored in Stack memory and function is working on original value , so chetu is not there "tree" is there >

console.log(gameName.repeat(5))


