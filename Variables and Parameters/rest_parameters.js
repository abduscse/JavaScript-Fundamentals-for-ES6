// Rest Parameters make it easy to work with an unknown or variable number of arguements in a
// function.

// a rest parameter is always the last parameter in a function, and it will be a parameter that 
// has a ... prefix, all the incoming values that are pass to this function as individual parameters
// will be packaged up into a true array object on all the array methods like forEach etc can be performed 
// and given to function in the rest parameter.

function sum(...numbers) {
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    });
    console.log(sum); 
}

sum(23, 9, 36); // 68 - sum of the individual parameters
sum(); // 0 if we do not pass any individual parameter then rest parameter will be an empty array.


