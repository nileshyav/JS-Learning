arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// map takes a callback fn to perform some task
var one = arr.map((item, index) => {
    return `${index} :  ${item}`;
});

console.log(one);

/*
The filter() method takes each element in an array and it applies a 
conditional statement (Boolean) against it. If this conditional returns true, 
the element gets pushed to the output array. If the condition returns 
false, the element does not get pushed to the output array. */

var two = arr.filter((item) => {
    return item % 2 === 0;
});
console.log(two);

//reduce
var initialValue = 0;
var sum = arr.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
}, initialValue);

console.log(sum);

/*   // simple way of doing reduce
let sumValue = 0;
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sumValue += element;
}
console.log(`All arr sum is : ${sumValue}`); */

// TODO: implementing sort
/*
let result = arr.sort((item1, item2) => {
    if (item1 < item2) {
        return 1;
    } else {
        return -1;
    }
});

console.log(result); */

let result = arr.sort((item1, item2) => (item1 < item2 ? 1 : -1));

console.log(result);
