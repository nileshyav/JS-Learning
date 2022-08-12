/* Global context collect each and everything */

// console.log(myname);
// var myname = 'nilesh';

// sayHello()      /* Execution context */

// function sayHello() {
//     console.log('Hello nilesh');
// }

/* three type of execution contect:
        1. variable object
        2. scope chain
        3. this
*/

/* two rules of execution context
    1. Function declaration scanned and made available only for regular funtion not for variable function line arrow function
    2. variable declaration scanned and mode undefined
*/

// --------------------------------------------------------
console.log(rollNO);
var rollNO = 5454545;

function sayHello() {
  const rollNO = 123;
  console.log(`First : ${rollNO}`);

  function sayMyName() {
    const rollNO = 45;
    console.log(`Second : ${rollNO}`);
  }
  sayMyName();
  console.log(`Check for roll no ${rollNO}`);
}

console.log(rollNO);
sayHello(); /* Execution context loaded up above global context */
