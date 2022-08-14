const result = [2, 4, 6, 8].every((a) => a % 2 === 0);

console.log(result);

const arr = [2, 3, 4, 5, 6, 7, 8, 9];
const nmap = arr.filter((a) => {
    if (a % 2 === 0) {
        console.log(a);
    }
});

console.log(nmap);
// Slice and splice

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(2, 2, "nilesh", "ramesh");
console.log(fruits);

console.log(fruits.slice(2, 4));
console.log(fruits);

// implementing array map

var firstArray = [2, 4, 6, 8, 10, 15];
var resultArray = firstArray.map((e) => {
    return e * 2;
});

console.log(resultArray);
