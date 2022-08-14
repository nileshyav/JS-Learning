var User = require("./class.js");

var nilesh = new User("nilesh", "imnilesh4@gmail.com");

nilesh.getUserInfo();
nilesh.addCourse("React Js");
nilesh.addCourse("Node js");
nilesh.addCourse("Bootstrap");
nilesh.addCourse("Tailwind");
nilesh.addCourse("GraphQl");

console.log(User.courseList);
console.log(nilesh.getCourseList());

console.log(nilesh.getCourseCount());
