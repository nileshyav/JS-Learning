function one(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}
// TODO: This is normal way to use

var res = one(4);
var two = res(4);
var result = two(4);
console.log(result);

// TODO: THis is currying
// console.log(one(4)(4)(4));
