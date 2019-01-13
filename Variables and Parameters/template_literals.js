// Template literals can help build the string values that you might want to assign to a variable, and 
// Example: You can often use templates to replace string concatenation code
// string must be define using a back quote but not ' or " quotes.

function concat(name) {
    console.log(`Hello, ${name}`);
}

concat('Abdus');

// Another example:
let a = 10;
let b = 20;

let c = `${a}+${b} is ${a + b}`.toUpperCase();
console.log(c); // 10+20 IS 30 