// 1. destructuring simple objects.
let object = {
    first_name: 'Abdus',
    last_name: 'Sattar',
    twitter: 'kmas82'
};

let {
    last_name: last_name,
    twitter: twitter
} = object;

console.log(last_name); // Sattar
console.log(twitter);  // kmas82
line();


// 2. right hand side define the name of the new variable to be created.
let {
    fname: first_name
} = object;
// console.log(fname); // undefined - fname is not defined
line();

let {
    first_name: fname
} = object;
console.log(fname); // Abdus - fname is in Right hand side
line();

// 3. left hand side must match the key name in the object
let {
    last_nam: lname
} = object;
console.log(lname); // undefine because last_nam is not key in the object.
line();


// 4. destructuring complex objects.
let obj = {
    first_name: 'Abdus',
    last_name: 'Sattar',
    handles: {
        twitter: 'kmas82',
        fb: 'kmas82'
    }
};

let {
    first_name: name,
    handles: {
        fb: facebook
    }
} = obj;

console.log(name); // Abdus
console.log(facebook); // kmas82
line();

// 5. Shortcut sytax for destructuring if you are happy to use variable name that is same name as the 
// property name in the object that you are trying to retrive, you don't have explicitly spicify the 
// variable name.
let objt = {
    f_name: 'Abdus',
    l_name: 'Sattar',
};

let {
    f_name,
    l_name
} = objt;

console.log(f_name); // Abdus
console.log(l_name); // Sattar
line();

// 6. destructuring while defining a function.
let doWork = function (url, { data, cache, headers }) {
    console.log(url); // api/test
    console.log(data); // test
    console.log(cache); // false
    console.log(headers); // undefined
};

doWork('api/test',
    {
        data: 'test',
        cache: false
    });

function line() {
    console.log('---------------------------------------------------------------');
}
