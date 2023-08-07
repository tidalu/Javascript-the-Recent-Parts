// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

var msg = "Hello World";

console.log(msg.match(/(l.)/g));
console.log(msg.match(/(l.)$/g));
console.log(msg.match(/(l.)(?=o)/g));
console.log(msg.match(/(l.)(?!o)/g)); // these fpur was look ahead , luckily we have now look behind

// behind

console.log(msg.match(/(?<=e)(l.)/g)) 
console.log(msg.match(/(?<!e)(l.)/g)) 
