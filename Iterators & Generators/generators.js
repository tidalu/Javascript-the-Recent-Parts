function *main() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}


var it = main();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

console.log([...main()])

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator


var obj = {
    a: 1,
    b: 2, 
    c: 3,
    *[Symbol.iterator]() {
        for (let key of Object.keys(this)){
            yield this[key]
        };
    }
};

console.log([...obj])





