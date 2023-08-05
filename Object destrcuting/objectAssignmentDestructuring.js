function data() {
    return { a: 1, b: 2, c: 3, d: 4 };
}

var tmp = data();
var first, second, third;
first = tmp.a;
second = tmp.b;
third = tmp.c;




// ------------------
// destructuring equavalent
var tmp;
function data() {
    return { a: 1, b: 2, c: 3 };
}

var first, second;
({ // if we have anythig before { } braces we do not need () for example tmp = ...
    a: first,
    b: second,
    //...third
} = data());