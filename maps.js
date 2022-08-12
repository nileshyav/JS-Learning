const myMaps = new Map([]);

myMaps.set(1, 'nilesh');
myMaps.set(2, 'Ramesh');
myMaps.set(3, 'Ram');
myMaps.set(4, 'Mohan');

console.log(myMaps);

fddg;

for (const [key, value] of myMaps) {
  console.log(`Keys is ${key} and value is ${value}`);
}

for (const k of myMaps.keys()) {
  // console.log(`Keys is ${k}`);
  console.log(`keys is : ${k} and value is :  ${myMaps.get(k)}`);
}
console.log(myMaps.get(1));
console.log('--------------------------------');
const entr = myMaps.entries();
console.log(entr);

for (const iterator of entr) {
  console.log(iterator[1]);
}
