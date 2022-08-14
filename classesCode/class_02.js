class first {
    constructor(name) {
        console.log("Parent class constructor", name);
    }
}

class child extends first {
    constructor(name) {
        super(name);

        this.name = name;
        console.log("child class", this.name);
    }
}

var one = new child("mohan");
