function data() {
    return [1, 2, 3]; // sif we don not return an array , instead returning null, in bottom, every reference to the array will return type error , 
}

var tmp = data() || []; // when function does not return an array , not to face with an type or any other error, we should have default array;
var first = tmp[0];
var second = tmp[1];
var third = tmp[2]
// var fourth = tmp.slice(3)



//------------------------

function data() {
    return [1, 2, 3];
}

var tmp;
var [
    first,
    second,
    third,
    /* ...fourth */
] = tmp = data() || []; // default array when return null or other notan array



/* -------- */

function data1(tmp = []) {
    var [
        first = 10,
        second = 10,
        third = 10,
    ] = tmp;
}

/* or  */

function data([
    first = 10,
    second = 10,
    third = 10,
] = []) {
    // ...
}