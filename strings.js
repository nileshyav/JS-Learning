

let poem = 'You do not know what you do not know until you know';
var str = 'know'
console.log(poem);


var index = poem.indexOf(str);
var count = 0;
for (index; index !== -1 ; ) {
    count++;
    index = poem.indexOf(str, index + 1 );

}

console.log(count)