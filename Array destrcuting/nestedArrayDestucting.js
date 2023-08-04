function data() {
    return [1, [2, 3], 4];  // what is the nested part is not array but undefined return [1, undefined, 4]
}

var tmp = data() || [];
var first = tmp[0] || []; // not to face type error when the nested part is not an array but undefined or null or something else we should give default value 
var tmp2 = tmp[1];
var second = tmp2[0];
var third = tmp2[1];
var fourth = tmp[2]



//------------------------

function data() {
    return [1, [2, 3], 4];
}

var tmp;
var [
    first = 10,
    [
        second,
        third
    ] = [],
    fourth

] = tmp = data() || [];
