var converter = require ('number-to-words');

var p1=converter.toOrdinal(21);
var p2=converter.toWords(13);
var p3=converter.toWordsOrdinal(21);

console.log(p1);
console.log(p2);
console.log(p3);