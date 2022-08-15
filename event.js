function one() {
    console.log("I am One");
}

function two() {
    setTimeout(() => {
        console.log("Big picture is loading up");
    }, 30000);
    console.log("I am two");
}

function three() {
    console.log("I am three");
}
three();

one();
two();
