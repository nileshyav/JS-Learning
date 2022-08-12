/* Inside function block var & let both are available for block only outside block not accessible */

function init() {
  const name = 'nilesh';
  function sayMYName() {
    console.log(`THis is sayMyName function wala ${name}`);
  }
  sayMYName();
  console.log(`This is init function wala ${name}`);
}

init();
/* TODO
---------- say my name Execution context--------
------------Init Execution context----------------
-------------- Globle scope -------------------------*/

/* TODO In If block variavle define with var : is also accesable from outside */
