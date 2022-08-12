var UserData = ["nilesh", 3, "admin"];
/*
var name = UserData[0];
var courseCount = UserData[1];
var role = UserData[2]; */

// console.log(`${name} has ${courseCount} course role is ${role}`);

/* another way to to the same thing by data destructing */

var [name, courseCount, role] = UserData; //  <= this is data destructing with array
console.log(`${name} has ${courseCount} course role is : ${role}`);

// data destructuring with object

var myUser = {
    firstName: "mohan",
    count: 4,
    myrole: "admin",
};

var { count, firstName, myrole } = myUser; // data destructuring
console.log(count);
