function data(temp = {}) { // empty object is backup default value
    var {
        a,
        b
    } = tmp
    // ...
}


// destructuring

function data({
    a,
    b,
    copyX // we can better to write the extra x here
} = {}, x) {
    // ...
}

