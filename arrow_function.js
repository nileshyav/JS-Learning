sayHello();
one = (a, b) => {
  d = (a + b) * 2;
  console.log(this);
  return d;
};

console.log(one(10, 20));

function sayHello() {
  a = 10;
  b = 5;
  console.log(this);
}
