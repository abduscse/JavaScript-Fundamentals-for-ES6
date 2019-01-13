// let keyword defines the scope of the variable declared onlt to thar specific block of code.

function doWork(flag) {
    if (flag) {
        let x = 'Doing work';
        return x;
    }
}

var result = doWork(true);

console.log(result);