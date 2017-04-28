var mylib = require('./mathlib');
// var math = new mylib();

var a = 2
var b = 3

console.log("Adding 2 numbers equals: " + mylib().add(a,b));
console.log("Multiplying 2 numbers equal: " + mylib().multiply(a,b));
console.log("Square a number: " + mylib().square(a));
console.log("Picking a random number between 1 & 35: " + mylib().random());
