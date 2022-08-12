const User = {
    firstName: "Nilesh",
    lastName: "Yadav",
    personInfo() {
        // console.log(this);
        console.log(`My Name is ${this.firstName} ${this.lastName}`);
    },
};

const one = 15;

User.personInfo();

const mohan = {
    firstName: "Ramesh",
    lastName: "Yadav",
};
// User.personInfo.bind(mohan)()  // THis is also right

const show = User.personInfo.bind(mohan);
show();

User.personInfo.call(mohan);
