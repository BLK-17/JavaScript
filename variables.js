// JavaScript Variables Day-2


let id = 10;
const name = "BLK";
var age = 19;


console.log("\nBefore changing the values of variables");
console.log("ID: "+id);
console.log("Name: "+name);
console.log("Age: "+age);
console.log("\nAfter changing the values of variables");
id = 1202;
age = 20;
//name = "Lucky";
/*
PS D:\JavaScript Practice\Day-2> node variables.js
D:\JavaScript Practice\Day-2\variables.js:7
name = "Lucky";
     ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (D:\JavaScript Practice\Day-2\variables.js:7:6)
    at Module._compile (node:internal/modules/cjs/loader:1929:14)
    at Object..js (node:internal/modules/cjs/loader:2060:10)
    at Module.load (node:internal/modules/cjs/loader:1651:32)
    at Module._load (node:internal/modules/cjs/loader:1443:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:261:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47

Node.js v24.20.0*/

console.log("\nID: "+id);
console.log("Name: "+name);
console.log("Age: "+age);



let isStd = true;
let backlogs = null;

console.log("\nIs Student: "+isStd);
console.log("Backlogs: "+Backlogs);
console.log("Type of isStd: "+typeof isStd);
console.log("Type of Backlogs: "+typeof Backlogs);

console.log(Number("123")  +", Data Type: "+typeof Number("123"));
console.log(Number("10.5") +", Data Type: "+typeof Number("10.5"));
console.log(Number("hello") +", Data Type: "+ typeof Number("hello"));

console.log(String(100) +", Data Type: "+typeof String(100));
console.log(String(true)  +", Data Type: "+typeof String(true));

console.log(Boolean(1)  +", Data Type: "+typeof Boolean(1));
console.log(Boolean(0)+", Data Type: "+ typeof Boolean(0));
console.log(Boolean("") +", Data Type: "+typeof Boolean(""));
console.log(Boolean("hello") +", Data Type: "+typeof Boolean("hello"));