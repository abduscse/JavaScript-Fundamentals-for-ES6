// const keyword is used to declare and initialise a read-only variable. its scope is limited to
// the block of code in which it is defined.

// const MAX_SIZE; // syntax error (Missing initializer in const declaration).

const MAX_SIZE = 10;

// MAX_SIZE = 12; // syntax error (Assignment to constant variable).

console.log(MAX_SIZE);


// scope of const keyword

function doWork(flag) {
    if (flag) {
        const M1 = 45;
    }
    // console.log(M1); // syntac error: M1 is not defined 
}

doWork(true);