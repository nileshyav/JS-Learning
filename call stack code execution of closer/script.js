function outer() {
    let msg = "Outer variable";

    function inner() {
        let innerValue = "inner variable";
        console.log(`${msg} :  ${innerValue}`);
    }
    return inner;
}

let myFun = outer();
myFun();
