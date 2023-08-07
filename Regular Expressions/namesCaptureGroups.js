var msg = " Hello world";

console.log(msg.match(/.(l.)/));
console.log(msg.match(/([jkl])o Wor\1/));
console.log(msg.match(/(?<cap>l.)/).groups); // {cap: "11"}
console.log(msg.match(/(?<cap>[jkl])o Wor\k<cap> /)); // ["lo Worl","l"]
console.log(msg.replace(/(?<cap>l.)/g, "-$<cap>-")); // "He-ll-o Wor-ld-"
console.log(msg.replace(/(?<cap>l.)/g, function re(...args) { var [,,,,{ cap }] = args; return cap.toUpperCase();
}));