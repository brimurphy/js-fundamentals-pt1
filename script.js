/*

// Numbers and Strings

let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Brian");
console.log(23);

let firstName = "Emma";
console.log(firstName + ' is ' + js);
console.log(firstName + ' is ' + js);
console.log(firstName + ' is ' + js);

// Can't start with number
// let 3years = 3;
// Can't use keywords, add $ before reserved keyword for example
let $new = 27;
// Variable with value that won't change use capitals
let PI = 3.1415;

// Good
let myFirstJob = "Electrician";
let myCurrentJob = "Technician";
// Bad
let job1 = "electrician";
let job2 = "technician";

console.log(myFirstJob);
*/

// Boolean

let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 25);
console.log(typeof "Hello World!");

// Dynamic typing to re define a variable
javaScriptIsFun = "YES!!";
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

// Undefined variable
let year;
// Value will be undefined
console.log(year);
// And type will be undefined
console.log(typeof year);

year = 1991;
console.log(typeof year);

// Error in JS, this returns object
console.log(typeof null);