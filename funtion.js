function add(a, b) {
    return a + b;
}
/* Function that takes another function as parameter */
function performOperation(x, y, fn) {
    return fn(x, y);
}

const result = performOperation(10, 10, add);
console.log(result);

/* Argument object in function */

function addNumber() {
    let sum = 0;

    for (let index = 0; index < arguments.length; index++) {
        const element = parseInt(arguments[index]);
        sum += element;
    }
    return sum;
}

const one = addNumber(10, 20, 10, 40);
console.log(one);

/* Function that return another function */

/* ------------ Recursive function that calls itself----------------*/

console.log("------ Recursive function --------");

function countDown(num) {
    console.log(num);

    num--;
    if (num > 0) {
        countDown(num);
    }
}

countDown(10);

// callback is function passed into another function as anrument

function greeting(name) {
    console.log(`Hello ${name}`);
}

function processMsg(callback) {
    var name = "nilesh";
    callback(name);
}

processMsg(greeting);
