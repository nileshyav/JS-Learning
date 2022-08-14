class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    static collageName = "CPS";
    #courseList = [];

    getUserInfo() {
        console.log(` I am ${this.name} and ${this.email}`);
    }
    // addcourse function is a setter . no need to put name as set always | any name works fine | it usually take parameter for setting value inside array or others ...
    addCourse(name) {
        this.#courseList.push(name);
    }

    // getCourseCount method is getter | getters user usually don't take parameter  | this function or method is used to get the value from variable which is private to the class
    getCourseCount() {
        return this.#courseList.length;
    }
    getCourseList() {
        return this.#courseList;
    }

    static login() {
        return `you are logged in `;
    }
}

module.exports = User;

class student extends User {
    constructor(name, email, id, shape, pn) {
        super(name, email);
        this.id = id;
        this.shape = shape;
        this.pn = pn;
    }

    one = super.login;

    getUserInfo() {
        console.log(
            `MySelf ${this.name} email is : ${this.email} |
            id is : ${this.id} shape is : ${this.shape} 
            and phone no is ${this.pn} collage name is ${super.collageName}    `
        );
    }

    getStudentInfo() {
        return "I am Admin";
    }
    islogged = super.login();
}

var admin = new student("mohan", "nilesh@this.com", 545, "rect", 12);
console.log(admin.getStudentInfo());

admin.getUserInfo();
console.log(admin.one());
