// Event  Bubbling => it propogate child to parents
// Event  Capturing => it propogate parents to child  : add true to enable this
/*
var div = document.querySelector("div");

div.addEventListener("click", () => {
    console.log("Div clicked");
});

var button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("Button clicked");
});

var body = document.querySelector("body");
body.addEventListener("click", () => {
    console.log("body clicked");
}); */

// TODO: two eventlishener oon same button
var div = document.querySelector("div");

div.addEventListener("click", () => {
    console.log("Div clicked");
});

var button = document.querySelector("button");
button.addEventListener("click", (event) => {
    event.stopPropagation(); // stop execution parent class event

    // TODO: If you want to disable second eventLishener on same button use stopImmediatepropogation() method

    // event.stopImmediatePropagation()
    console.log("Button clicked");
});

var button = document.querySelector("button");
button.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    console.log("Button2 clicked");
});

// TODO: Prevent default to remove default behaviour of any tag

var atag = document.querySelector("a");
atag.addEventListener("click", (event) => {
    event.preventDefault();
});
