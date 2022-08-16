setTimeout(() => {
    console.log("Hello Callback");
}, 1000);

function sayName(name) {
    console.log(`Hello ${name}`);
}

function Callfn(fn) {
    console.log("callig my function");
    fn("nilesh");
}

Callfn(sayName);
