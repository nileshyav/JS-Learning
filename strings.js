// program to get the count of duplicate substring in an sentence
let poem = "You do not_ know what _ you do not _ know until_ you ";
var str = "know";
console.log(poem);

var index = poem.indexOf(str);
var count = 0;
for (index; index !== -1; ) {
    count++;
    index = poem.indexOf(str, index + 1);
}

console.log(count);
//---------------------------------------------------------------------------------

console.log("-------------char at method----------------------------");

console.log(poem.charAt(2));

console.log("-----------------------------------------");

console.log(poem.toLowerCase());
console.log("-----------------------------------------");

//=========== Searching for a substring =============

let indexOF = poem.indexOf(str, 0);
console.log(indexOF);

// =========== Find last occerence of element ============
console.log("------------last index of -----------------------------");
let lastIndex = poem.lastIndexOf(str);
console.log(lastIndex);

// ========== Includes =================
console.log("--------------includes---------------------------");

let isAvail = poem.includes(str);
console.log(isAvail);

// ============ Startwith ===============
console.log("-------------StartWith()----------------------------");

let isStart = poem.startsWith("You");
console.log(isStart);

// ============= Ends with =================
console.log("------------Ends with-----------------------------");

isEnds = poem.endsWith("know", 15);
console.log(isEnds);

console.log("--------------get substring---------------------------");
let mySubString = poem.slice(0, 3);
console.log(mySubString);
console.log("------------ split -----------------------------");
let spl = poem.split("_", 7);
console.log(spl);

console.log("-----------------------------------------");

console.log(poem.repeat(2));

console.log("-----------------------------------------");

console.log(poem.trim());

// =========== reverse a string =================

let exampleString = "nilesh";
let reversedString = exampleString.split("").reverse().join("");
console.log(reversedString);
let a = [];
for (const c of exampleString) {
    a.unshift(c);
}

console.log(a.join(""));
