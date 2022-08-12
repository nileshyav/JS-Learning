// TODO: create a new array (change its value) from carNames without affecting original array

var carNames = ["Honda", "tata", "valco", "bmw"];

console.log(...carNames); // converts group values into indivisual item  => spread

var myNewCar = [...carNames];

myNewCar[0] = "nilesh"; // so changing array value does not afect carNames values

console.log(carNames);

console.log(myNewCar);

// another example with object
let userName = { name: "John Doe" };
let userSex = { sex: "Female", name: "nilesh" };
let anotherUser = { ...userName };
console.log(anotherUser);

let user = { ...userName, ...userSex };

console.log(user);

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];

var arr4 = [...arr1, ...arr2, ...arr3];
console.log(...arr1);
console.log(arr4);

//  spread operator example
function sum(a, b, c, d, e) {
    console.log(a + b + c + d + e);
}

var value = [1, 2, 3, 4, 5];
sum(...value); // coverts group (array) items into indivisual item called spread

// rest operator example

function sumNumber(...rest) {
    // var arr = rest; // args assign to
    // console.log(arr);

    var sum = 0;

    /* for (let i = 0; i < arguments.length; i++) {
        sum = sum + rest[i];
     } */

    /* rest.forEach((element) => {
         sum = sum + element;
     });  */

    /* for (const key in rest) {
         console.log(rest[key]);
         sum = sum + rest[key];
     } */

    for (const iterator of rest) {
        console.log(iterator);
        sum += iterator;
    }
    return `sum is ${sum}`;
}
var result = sumNumber(2, 3, 5, 8, 7);
console.log(result);

// rest with object

var students = {
    name: "Nilesh",
    age: 25,
    hobbies: ["Cricket", "Gaming"],
};

var { age, ...rest } = students;
console.log(rest);
