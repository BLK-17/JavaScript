//Day-3 Conditional Statements

// if, if-else, if-else-if, switch

// let age = 20;
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// rl.question("Enter your age: ", (age) => {
//     age = parseInt(age);
//     if(age>=18){
//         console.log("You're eligible to vote.");
//     }
//     else if(age<18 && age>0){
//     console.log("You're not eligible to vote.");
// }
// else{
//     console.log("Invalid age.");
// }
// rl.close();
// });

const readline = require("readline-sync");
let age = readline.questionInt("Enter your age: ");
if(age>=18){
    console.log("You're eligible to vote.");
}
else if(age<18 && age>0){
    console.log("You're not eligible to vote.");
}
else{
    console.log("Invalid age.");
}

