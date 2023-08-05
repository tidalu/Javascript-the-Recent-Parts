function data() {
    return {
        a: 1,
        b: {
            c: 3,
            d: 4
        }
    };

}

var tmp = data();
var a = tmp.a;
var b = tmp.b || {} // here b will point at to whole object even if we want to access to the nested obj  we use the same way, and we should not forget to provide a default value in the case of being nothing , null, undefined, ...
var c = b.c;
var d = b.d;




// ------------------
// destructuring equavalent

function data() {
    return {
        a: 1,
        b: {
            c: 3,
            d: 4
        }
    };
}

var {
    a,
    // here b is also an object so there will have another destructuring pattern
    b: {
        c,
        d
    } = {} //it is default obj empty  

} = data()