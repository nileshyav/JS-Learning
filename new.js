// creating object with the constructor function
const User = function (firstName, lastName, courseCount) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.courseCount = courseCount;

    this.userInfo = function () {
        console.log(
            `${this.firstName} ${this.lastName} has ${this.courseCount} courses and address is ${this.address}`
        );
    };
};

User.prototype.address = ""; // property added  in the functional object
// adding function getFirstName function to the User property
User.prototype.getFirstName = function () {
    console.log(`First name is ${this.firstName}`);
};

//-------------------------------------------------------------------

const nilesh = new User("Nilesh", "yadav", 5);
nilesh.address = "Azamgarh";

console.log(nilesh);
nilesh.address = "azamgarh";
nilesh.userInfo();

/* Another user instance */

const sam = new User("Sam", "yadav", 10);
sam.address = "Mau";

console.log(sam);
sam.userInfo();
/* check if property is available or not */

if (sam.hasOwnProperty("firstName")) {
    sam.getFirstName();
}

/* another way to create object instance from User prtotype */

const mohan = Object.create(User, {
    address: { value: "hello" },
});

console.log(mohan.address);

console.log(
    "-----------------Pass by Reference----------------------------------\n"
);

const Car = {
    name: "Honda",
    price: 15151515151515,
};

const myVovoCar = Car;

myVovoCar.name = "Volvo";
myVovoCar.price = 5151551551515151515151554845;
console.log(Car);
console.log(myVovoCar);

console.log(
    "-----------------Pass by Value----------------------------------\n"
);

const one = 100;

let second = one;

second = 900;
console.log(`value is one is : ${one}`);
console.log(`value is second is : ${second}`);
