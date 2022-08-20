// console.log(this);

// In all regular funtion this conatains global object . in case of browers that is window object
/*function sayMyName() {
    const a = "nilesh";
    console.log(a);
    console.log(this);
}

sayMyName();*/

// Understanding this   for running code below

var user = {
    firstName: "Nilesh",
    courseCount: 4,
    getDetailView: function () {
        console.log(this); // here this conatains entire object when regular annonyous funcyion
        console.log("\n");

        function sayHello() {
            console.log(
                 "In all regular funtion this conatains window(global) object "
            );
            // console.log(this);
        }
        sayHello();
    },
};

user.getDetailView();
