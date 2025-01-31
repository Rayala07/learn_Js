// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        // See here if you miss break statement , until next break statement it will print the console.log();

    case "april":
        console.log("april");
        break;
    
    case "may":
        console.log("May");
        break;
        
    default:
        console.log("default case match");
        break;
}