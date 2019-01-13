// In case we invoke a function and do not pass pass enough parameters the author of the function 
// can specify a default value instead of working with undefined.

function doWork(name = 'Abdus') {
    console.log(name);
}

doWork(); // Abdus by default parameter
doWork(undefined); // Abdus by default parameter

// only work in case of undefined not on false of the parameters.
doWork(null); //  null 
doWork(''); //  '' 
line();

// example default parameter and destucturing from a function.

function f1(a = 1, b = 2, c = 3) {
    return [a, b, c]
}

let [a, b, c] = f1(5, undefined);
console.log(a); // 5 because parameter is 5
console.log(b); // 2 by default parameter because second parameter is undefined
console.log(c); // 3 by default parameter becauser third parameter is not passed(undefined).
line();

function line() {
    console.log('---------------------------------------------------------------');
}



