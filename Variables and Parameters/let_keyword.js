// let keyword defines the scope of the variable declared to that specific block of code.

function doWork(flag) {
    if (flag) {
        let x = 'Doing work';
        return x;
    }
}

var result = doWork(true);

console.log(result);