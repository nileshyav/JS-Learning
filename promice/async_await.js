async function one(params) {
    console.log("Function one");

    // two().then((res) => console.log(res));
    console.log("fdfdgdgdgdgdgdgdg");
}

function two(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I complete my promise");
        }, 3000);
    });
}
// one();
// disable one() calling and line 4 code and uncomment others

async function callFn(params) {
    var mytwo = await two();
    console.log(mytwo);

    one();

    console.log("-----------------------------");
}

callFn();
