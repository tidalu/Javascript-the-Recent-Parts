// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

console.clear()

const msg = "Hello World";

console.log(msg.match(/(l.)/g))
console.log(msg.match(/(.l)/g))
console.log(msg.match(/(l.)$/g))
console.log(msg.match(/(l.)(?!o)$/g))
console.log(msg.match(/(.l)(?=o)/g))

console.log(msg.match(/(?<=e)(l.)/g))
console.log(msg.match(/(?<=e)(l.)(?=o)/g))
console.log(msg.match(/(?<!e)(l.)(?!o)/g))
console.log(msg.match(/(?<!h)(l.)(?=o)/g))
