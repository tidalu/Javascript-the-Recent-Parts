// object does not have a built in iterator returns type error, cuz symbol.iterator tries to access to the location of the object elemtn by yhtat


var obj = {
    a: 1,
    b: 2, 
    c: 3
}

// for( let v of obj) {
//     // console.log(v);
// }

// instead we should create one

var obj = {
    a: 1,
    b: 2, 
    c: 3,
    [Symbol.iterator]: function() {
        var keys = Object.keys(this);
        var index = 0;
        return {
            next: () => 
                (index < keys.length)?
                    {done: false, value: this[keys[index++]] } :
                    {done: false, value: undefined }
        };
    }
};

[...obj]
