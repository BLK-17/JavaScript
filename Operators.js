// JavaScript Operators Day-3

// Arithmetic Operators

let a = 20;
let  b = 3;

// +,-,*,/,%,**

console.group(a+" + "+b+" = "+(a+b));
console.group(a+" - "+b+" = "+(a-b));
console.group(a+" * "+b+" = "+(a*b));
console.group(a+" / "+b+" = "+(a/b));
console.group(a+" % "+b+" = "+(a%b));
console.group(a+" ** "+b+" = "+(a**b));

//Comparison Operators

// ==, ===, !=, !==, >, <, >=, <=

console.log(a+" == "+b+"="+(a==b));
console.log(a+" === "+b+"="+(a===b));
console.log(a+" != "+b+"="+(a!=b));
console.log(a+" !== "+b+"="+(a!==b));
console.log(a+" > "+b+"="+(a>b));
console.log(a+" < "+b+"="+(a<b));
console.log(a+" >= "+b+"="+(a>=b));
console.log(a+" <= "+b+"="+(a<=b));

// Assignment Operators

// =, +=, -=, *=, /=, %=, **=

let c = 10; 
let d = 5;

console.log("c = "+c);
console.log("d = "+d);

console.log("c += d = "+(c+=d));
console.log("c -= d = "+(c-=d));
console.log("c *= d = "+(c*=d));
console.log("c /= d = "+(c/=d));
console.log("c %= d = "+(c%=d));
console.log("c **= d = "+(c**=d));

// Logical Operators

// &&, ||, !

console.log(a+" && "+b+" = "+(a&&b));
console.log(a+" || "+b+" = "+(a||b));
console.log(!a+" = "+(!a));

// Bitwise Operators

// &, |, ~, ^, <<, >>
console.log(a+" & "+b+"= "+(a&b));
console.log(a+" | "+b+"= "+(a|b));
console.log("~"+a+"= "+(~a));
console.log(a+" ^ "+b+"= "+(a^b));
console.log(a+" << "+b+"= "+(a<<b));
console.log(a+" >> "+b+"= "+(a>>b));

// Ternary Operator

console.log(a+" > "+b+" = "+(a>b?"a is greater than b":"a is less than b"));    

// Nullish Coalescing Operator

console.log(a+" ?? "+b+" = "+(a??b));