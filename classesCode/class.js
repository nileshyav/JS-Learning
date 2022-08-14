class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    #courseList = [];

    getUserInfo() {
        console.log(`${this.name} and ${this.email}`);
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
}

module.exports = User;
