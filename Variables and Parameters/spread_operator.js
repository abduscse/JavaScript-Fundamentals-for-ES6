// ... when used outside a function argument list, the ... means we want to spread an array across 
// individual parameters.

// using spread operator the first entry of the array goes to the first parameter, the second array 
// element to the second paramenter and so on.

function sum(x, y, z) {
    console.log(x + y + z);
}

sum(...[23, 9, 36]); // 68 - sum obtained by passing each array element as an the individual parameters.

// build arrays using spread operator.

let a = [4, 5, 6];
let b = [1, 2, 3, ...a, 7, 8, 9];

console.log(b); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] ... inserts elements of array "a" as individual objects in array "b".

let c = ['a', 'b', 'c'];

c.push(...['d', 'e', 'f']);

console.log(c); // [ 'a', 'b', 'c', 'd', 'e', 'f' ] pushed individually.