// //Day - 4 Functions

// // basic function block :
// // function greet(name){
// //     console.log("Hello, " + name+"!");
// // }

// // const readline = require("readline-sync");
// // let name = readline.question("Enter your name: ");

// // greet(name);


// // Bank apk using functions: 
// function deposit(balance, amount){
//     if(amount<=0){
//         console.log("Invalid amount.");
//         return balance;
//     }
//     balance+= amount;
//     return balance;
// }
// function withdraw(balance, amount){
//     if(amount<=0){
//         console.log("Invalid amount.");
//         return balance;
//     }
//     if(balance === 0 || balance < amount){
//         console.log("insuficient balance.");
//         return balance;
//     }
//     balance -= amount;
//     return balance;
// }

// // function checkBalance(balance){
// //     console.log("Balance: "+balance);
// // }

// const readline = require("readline-sync");

// let balance = 1000;
// let choice;
// while(choice!==4){
//     choice = readline.questionInt("Enter your choice:\n" +"1. Deposit\n" +"2. Withdraw\n" +"3. Check Balance\n" +"4. Exit: \n");
//     if(choice===1){
//         let amount = readline.questionInt("Enter the amount to deposit: ");
//         balance = deposit(balance, amount);
//     }
//     else if(choice===2){
//         let amount = readline.questionInt("Enter the amount to withdraw: "); 
//         balance = withdraw(balance, amount);
//     }
//     else if(choice===3){
//         const checkBalance = function(balance){
//             return balance;
//         };
//         console.log("Balance: "+checkBalance(balance));
//     }
//     else if(choice===4){
        
//         console.log("Thank you for using our services.");
//     }
//     else{
//         console.log("Invalid choice.");
//     }
//     //choice = readline.questionInt("Enter your choice:\n 1. Deposit\n 2. Withdraw\n 3. Check Balance 4. Exit: ");
// }

let name = "BLK";
function test(){
    let age = 19;

    console.log(age);
    console.log(name);
    
test();
console.log(age); // ReferenceError: age is not defined
console.log(name); // ReferenceError: name is not defined
}

//
function outer(){
    let outerVar = "Outer Variable";
    function inner(){
        let innerVar = "Inner Variable";
        console.log(outerVar); // Outer Variable
        console.log(innerVar); // Inner Variable
    }
    inner();
}

// CallBack function
function greet(name, callback){
    console.log("Hello, " + name+"!");
    callback();
}

greet("BLK", function(){
    console.log("This is a callback function.");
})

//traditional way of defining a  CallBack function
function greet(name){
    console.log("Hello, " + name+"!");
}
//setTimeout(greet, 3000, "BLK");
function CallbackFunction(callback){
    callback("BLK");
}
CallbackFunction(greet);