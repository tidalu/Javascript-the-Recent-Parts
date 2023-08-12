var str = "Hello";

for(
    let it = str[Symbol.iterator](), v, result;
    (result = it.next()) && !result.done && (v = result.value || true );) {
        console.log([v]);
    }

// instead of just for looping we could use for of loop here we see

var str1 = "Baba";
var it = str1[Symbol.iterator]();

for(let v of it) {
    console.log(v);
}

for( let v of str1) {
    console.log(v)
}


// here is another operator , ... operator 

var str2 = "JajA";

var letters = [...str2];
console.log(letters)
