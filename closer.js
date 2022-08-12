// function doAddition(x) {

//     return function another(y) {
//         return x + y
//     }

// }

// var add5 = doAddition(10)

// console.log(add5(10));

// console.log(doAddition(100)(200));
// doAddition()()()  /* Curring */

console.log('-------------------------------------------------');

function init() {
  const msg = '\nOuter scope variable\n';
  function sayHi() {
    console.log(msg);
  }
  return sayHi;
}

const greeting = init();
greeting(); // THis is closer
// Function combined with its lexical scope is closer

/* Example of closer */
function sum(a) {
  console.log(`Value of a is : ${a}`);

  return function (b) {
    return a + b;
  };
}

const storeValue = sum(10);
console.log(storeValue(10));
