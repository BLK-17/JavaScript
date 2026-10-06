// // Day - 4 Loops

// // for, while, do-while

// // for
// for(let i=0;i<=5;i++){
//     console.log(i);
// }

// console.log("For Loop ended.\n");
// // while
// let i=0;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// console.log("While Loop ended.\n");
// //do-while
// let j=0;
// do{
//     console.log(j);
//     j++;
// }while(j<=5);

// console.log("Do-While Loop ended.\n");
// //ex-program to print first 10 natural numbers using for loop
// for(let i=1;i<=10;i++){
//     console.log(i);
// }
// console.log("For Loop ended.\n");

// //to find and number is prime or not using for loop
// const readline = require("readline-sync");
// let num = readline.questionInt("Enter a number: ");

// let isPrime = true;

// for(let i=2;i<num;i++){
//     if(num%i==0){
//         isPrime = false;
//         break;
//     }
// }
// if(isPrime){
//     console.log(num+" is a prime number.");
// }
// else{
//     console.log(num+" is not a prime number.");
// }

// console.log("For Loop ended.\n");



// Bank application using while, for Loop and if-else statements
const readline = require("readline-sync");

let balance = 1000;
let choice;
while(choice!==4){
    choice = readline.questionInt("Enter your choice:\n" +"1. Deposit\n" +"2. Withdraw\n" +"3. Check Balance\n" +"4. Exit: \n");
    if(choice===1){
        let amount = readline.questionInt("Enter the amount to deposit: ");
        balance += amount;
        console.log("Balance: "+balance);
    }
    else if(choice===2){
        let amount = readline.questionInt("Enter the amount to withdraw: ");
        if(amount>balance){
            console.log("Insufficient balance.");
        }
        else{
            balance -= amount;
            console.log("Balance: "+balance);
        }
    }
    else if(choice===3){
        console.log("Balance: "+balance);
    }
    else if(choice===4){
        console.log("Thank you for using our services.");
    }
    else{
        console.log("Invalid choice.");
    }
    //choice = readline.questionInt("Enter your choice:\n 1. Deposit\n 2. Withdraw\n 3. Check Balance 4. Exit: ");
}
