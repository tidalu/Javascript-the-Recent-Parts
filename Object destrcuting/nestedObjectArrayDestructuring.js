var obj = {
    a: 1,
    b: 2,
    c: 3
};
/// ----
var {
    a,
    b: b,
    b: w,
    c
} = obj


//////////////

var obj = {
    a: 1,
    b: {
        x: 2,
        y: 3
    },
    c: 3
};
/// ----
var {
    a,
    b,
    b: {
        x: w,
        y: z
    },
    c
} = obj

/////

var obj = {
    a: 1,
    b: [5000, 300],
    c: 3
};
/// ----
var {
    a,
    b,
    b: [
        W,
        Y
    ] = [],
    c
} = obj