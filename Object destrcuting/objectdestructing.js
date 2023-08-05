function data() {
    return { a: 1, b: 2, c: 3 };
}

var tmp = data();
var first = tmp.a !== undefined ? tmp.a : 42 // if any of the referencced value is missing we should provide backup default value 
var second = tmp.b;
var third = tmp.c; // if function does not return any of the element the value will be undefined otherwords if there in rertun extra stuff it will be ignored


// -----obj literal --- just example
var o = {
    prop: value,
    target: source
};


// destructuring 
var {
    source: target,
    prop: value
} = o;



// ------------------
// destructuring equavalent

function data() {
    return { a: 1, b: 2, c: 3 };
}

var {
    a: first = 42, // here backup value is given by just = value 
    b: second,
    /* c: third */
    ...third  // to take the rest of the returned object
} = data()