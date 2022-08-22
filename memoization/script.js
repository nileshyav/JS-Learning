/*
let sum = 0;

let calc = (n) => {
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
};

let memoize = (fun) => {
    let cache = {};
    return function (...args) {
        // console.log(...args);   [5]
        let n = args[0];
        if (n in cache) {
            console.log("value from cache");
            return cache[n];
        } else {
            console.log("Function is executing first time");
            var result = fun(n);
            cache[n] = result;
            return result;
        }
    };
};

var efficeient = memoize(calc);
console.time();
console.log(efficeient(5));
console.timeEnd();

console.time();
console.log(efficeient(5));
console.timeEnd();
*/

var sum = 0;
let calc = (n) => {
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
};

function memoize(fn) {
    let cache = {};
    return function efficientFn(...rest) {
        var value = rest[0];

        if (value in cache) {
            console.log("Value from cache");
            return cache[value];
        } else {
            var result = fn(value);
            cache[value] = result;
            console.log("Function rxecuting first time");
            return result;
        }
    };
}

let runFn = memoize(calc);
runFn(5);
console.time();
console.log(runFn(5));
console.timeEnd();

console.time();
console.log(runFn(5));
console.timeEnd();

console.time();
console.log(runFn(5));
console.timeEnd();

console.time();
console.log(runFn(5));
console.timeEnd();

console.time();
console.log(runFn(5));
console.timeEnd();
