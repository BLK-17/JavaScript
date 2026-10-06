// // Day -6 Arrays

// // Arrays
// let arr = [1,2,3,4,5];

// console.log("Array: "+arr);
// console.log("Length of array: "+arr.length);

// // Accessing elements of array
// console.log("First element of array: "+arr[0]);
// console.log("Last element of array: "+arr[arr.length-1]);

// // Modifying elements of array
// arr[0] = 10;
// console.log("Modified array: "+arr);

// // Adding elements to array
// arr.push(6);
// console.log("Array after adding element: "+ arr);

// // Removing elements froma array
// arr.pop();
// console.log("Array after removing element: "+arr);

// // Iterating over array
// for(let i=0;i<arr.length;i++){
//     console.log("Element at index "+i+": "+arr[i]);
// }
// //Unshift and shift
// arr.unshift(0);
// console.log("Array after adding element at the beginning: "+arr);
// arr.shift();
// console.log("Array after removing element from the beginning: "+arr);

// // Array Methods
// // concat, join, slice, splice, indexOf, LastIndexOf, includes, reverse, sort, filter, map, reduce 




// //

// Day - 6 Arrays


// ==========================================
// ARRAYS
// ==========================================

let arr = [1, 2, 3, 4, 5];

console.log("Array: " + arr);
console.log("Length of array: " + arr.length);


// ==========================================
// ACCESSING ELEMENTS OF ARRAY
// ==========================================

console.log("First element of array: " + arr[0]);
console.log("Last element of array: " + arr[arr.length - 1]);


// ==========================================
// MODIFYING ELEMENTS OF ARRAY
// ==========================================

arr[0] = 10;

console.log("Modified array: " + arr);


// ==========================================
// ADDING ELEMENTS TO ARRAY
// ==========================================

// push() -> adds element at the end

arr.push(6);

console.log("Array after adding element: " + arr);


// ==========================================
// REMOVING ELEMENTS FROM ARRAY
// ==========================================

// pop() -> removes last element

arr.pop();

console.log("Array after removing element: " + arr);


// ==========================================
// ITERATING OVER ARRAY
// ==========================================

for (let i = 0; i < arr.length; i++) {
    console.log("Element at index " + i + ": " + arr[i]);
}


// ==========================================
// UNSHIFT AND SHIFT
// ==========================================

// unshift() -> adds element at beginning

arr.unshift(0);

console.log("Array after adding element at the beginning: " + arr);


// shift() -> removes element from beginning

arr.shift();

console.log("Array after removing element from the beginning: " + arr);


// ==========================================
// ARRAY METHODS
// ==========================================


// ==========================================
// 1. concat()
// ==========================================

// Combines two or more arrays

let a = [1, 2, 3];
let b = [4, 5, 6];

let combined = a.concat(b);

console.log("Concatenated array: " + combined);


// ==========================================
// 2. join()
// ==========================================

// Converts array elements into a string

let names = ["Ram", "Raju", "Krishna"];

console.log("Joined array: " + names.join(", "));


// ==========================================
// 3. slice()
// ==========================================

// Returns a portion of an array
// Original array is NOT changed

let numbers = [10, 20, 30, 40, 50];

let sliced = numbers.slice(1, 4);

console.log("Sliced array: " + sliced);
console.log("Original array: " + numbers);


// ==========================================
// 4. splice()
// ==========================================

// Adds/removes elements
// Original array IS changed

let values = [10, 20, 30, 40, 50];

values.splice(2, 1);

console.log("After splice: " + values);


// Adding elements using splice()

values.splice(2, 0, 25);

console.log("After adding using splice: " + values);


// ==========================================
// 5. indexOf()
// ==========================================

// Returns the index of an element

let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log("Index of Mango: " + fruits.indexOf("Mango"));


// ==========================================
// 6. lastIndexOf()
// ==========================================

// Returns the last occurrence index

let nums = [10, 20, 30, 20, 40, 20];

console.log("Last index of 20: " + nums.lastIndexOf(20));


// ==========================================
// 7. includes()
// ==========================================

// Checks whether an element exists

console.log("Contains 30: " + nums.includes(30));
console.log("Contains 100: " + nums.includes(100));


// ==========================================
// 8. reverse()
// ==========================================

// Reverses the array
// Original array IS changed

let reverseArr = [1, 2, 3, 4, 5];

reverseArr.reverse();

console.log("Reversed array: " + reverseArr);


// ==========================================
// 9. sort()
// ==========================================

// Sorts elements

let names2 = ["Krishna", "Ram", "Arjun", "Raju"];

names2.sort();

console.log("Sorted names: " + names2);


// Numeric sorting

let numbers2 = [50, 10, 100, 20, 5];

numbers2.sort((a, b) => a - b);

console.log("Ascending order: " + numbers2);


// Descending order

numbers2.sort((a, b) => b - a);

console.log("Descending order: " + numbers2);


// ==========================================
// 10. forEach()
// ==========================================

// Executes a function for every element

let nums2 = [1, 2, 3, 4, 5];

nums2.forEach(num => {
    console.log("Number: " + num);
});


// Example: print double of every number

nums2.forEach(num => {
    console.log("Double: " + num * 2);
});


// Example: print even numbers

let nums3 = [10, 15, 20, 25, 30];

nums3.forEach(n => {
    if (n % 2 == 0) {
        console.log(n + " is even!");
    }
});


// ==========================================
// 11. map()
// ==========================================

// Creates a NEW array by transforming elements

let nums4 = [1, 2, 3, 4, 5];

let doubled = nums4.map(num => num * 2);

console.log("Doubled array: " + doubled);


// Convert names to uppercase

let names3 = ["ram", "raju", "krishna"];

let upperNames = names3.map(name => name.toUpperCase());

console.log("Uppercase names: " + upperNames);


// Add 18% GST

let prices = [100, 200, 300, 400];

let gstPrices = prices.map(price => price * 1.18);

console.log("Prices with GST: " + gstPrices);


// ==========================================
// 12. filter()
// ==========================================

// Creates a NEW array containing
// only elements that satisfy a condition

let nums5 = [5, 12, 18, 3, 25, 30];

let greaterThan15 = nums5.filter(n => n > 15);

console.log("Numbers greater than 15: " + greaterThan15);


// ==========================================
// 13. find()
// ==========================================

// Returns the FIRST element
// that satisfies the condition

let nums6 = [10, 25, 60, 80, 100];

let firstGreaterThan50 = nums6.find(n => n > 50);

console.log("First number greater than 50: " + firstGreaterThan50);


// ==========================================
// 14. some()
// ==========================================

// Returns true if AT LEAST ONE element
// satisfies the condition

let nums7 = [2, 4, 6, 7];

let hasOdd = nums7.some(n => n % 2 != 0);

console.log("Has odd number: " + hasOdd);


// ==========================================
// 15. every()
// ==========================================

// Returns true if ALL elements
// satisfy the condition

let nums8 = [2, 4, 6, 8];

let allPositive = nums8.every(n => n > 0);

console.log("All numbers are positive: " + allPositive);


// ==========================================
// 16. reduce()
// ==========================================

// Reduces an array to ONE final value

let prices2 = [100, 250, 150, 500];

let total = prices2.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log("Total price: " + total);


// Short version

let total2 = prices2.reduce((sum, price) => sum + price, 0);

console.log("Total price: " + total2);


// ==========================================
// ARRAYS OF OBJECTS
// ==========================================

let products = [
    { name: "Laptop", price: 60000, inStock: true },
    { name: "Mouse", price: 800, inStock: true },
    { name: "Keyboard", price: 1500, inStock: false },
    { name: "Monitor", price: 12000, inStock: true }
];


// ==========================================
// 17. filter() WITH OBJECTS
// ==========================================

// Get only products that are in stock

let inStockProducts = products.filter(product => product.inStock);

console.log("In-stock products: ", inStockProducts);


// ==========================================
// 18. filter() + map()
// ==========================================

// Get names of in-stock products

let productNames = products
    .filter(product => product.inStock)
    .map(product => product.name);

console.log("In-stock product names: " + productNames);


// ==========================================
// 19. filter() + reduce()
// ==========================================

// Calculate total price of in-stock products

let inStockTotal = products
    .filter(product => product.inStock)
    .reduce((sum, product) => {
        return sum + product.price;
    }, 0);

console.log("Total price of in-stock products: " + inStockTotal);


// ==========================================
// ARRAY METHOD SUMMARY
// ==========================================

/*

push()       -> Add element at end
pop()        -> Remove element from end

unshift()    -> Add element at beginning
shift()      -> Remove element from beginning

concat()     -> Combine arrays
join()       -> Convert array to string

slice()      -> Extract portion without changing original
splice()     -> Add/remove elements and changes original

indexOf()    -> Find first index
lastIndexOf()-> Find last index
includes()   -> Check whether element exists

reverse()    -> Reverse array
sort()       -> Sort array

forEach()    -> Perform action for every element

map()        -> Transform every element
               Returns NEW array

filter()     -> Select matching elements
               Returns NEW array

find()       -> Find FIRST matching element

some()       -> Check if AT LEAST ONE matches

every()      -> Check if ALL match

reduce()     -> Convert many values into ONE result

*/