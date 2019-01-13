// Destructuring Assignment
// Destructuring operation allows you to assign values to a set of variables by destructuring or 
// literally tearing apart and pattern matching a complex data structure like an array or an object 
// full of properties.

// array destructuring
// 1. swaping variables using destructuring
let x = 2;
let y = 3;

[x, y] = [y, x]; // let [x,y] = [3,2];

console.log(x); // 3
console.log(y); // 2
line();

// 2. array destructuring
let array = [5, 10];

let [a, b] = array;
console.log(x); // 3
console.log(y); // 2
line();

let [, c] = array;
console.log(c); // use , to skip element, else first elemtent of the array will be assigned
line();

let [p, q, r] = array;
console.log(p); // 5 - first element in the array
console.log(q); // 10 - second element in the array
console.log(r); // undefined - because there is no third element in the array.

function line() {
    console.log('---------------------------------------------------------------');
}
