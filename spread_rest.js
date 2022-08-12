var carNames = ["Honda", "tata", "valco", "bmw"];
// converts group values into indivisual item

console.log(...carNames);
// car names values copied to myNewCar variable
var myNewCar = [...carNames];

myNewCar[0] = "nilesh"; // so changing array value does not afect carNames values

console.log(carNames);

console.log(myNewCar);
// another example with object
let userName = { name: "John Doe" };
let userSex = { sex: "Female", name: "nilesh" };

let user = { ...userName, ...userSex };

console.log(user);

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];

var arr4 = [...arr1, ...arr2, ...arr3];
console.log(...arr1);
console.log(arr4);
