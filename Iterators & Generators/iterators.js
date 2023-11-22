// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator

var str = "Hello";
var world = ["w", "O", "R", "L", "D"];

var itr1 = str[Symbol.iterator]();
var itr2 = world[Symbol.iterator]();


console.log(itr1.next())
console.log(itr1.next())
console.log(itr1.next())
console.log(itr1.next())
console.log(itr1.next())
console.log(itr1.next())
console.log(itr1.next())
console.log(itr1.next())
console.log(itr1.next())




console.log(itr2.next())
console.log(itr2.next())
console.log(itr2.next())
console.log(itr2.next())
console.log(itr2.next())