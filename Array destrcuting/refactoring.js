function data() {
    return [1, 2, 3, 4, 5]
}

var tmp = data();
var first, second, third, fourth; // first way 
var o = {}; // second 
var a = []; // third we can access to any location of the array 
o.first = tmp[0];
o.second = tmp[1] !== undefined ? tmp[1] : 10;
o.third = tmp[2];
o.fouth = tmp.slice(3) // it takes all leftovers, fi there is not any element , slice method returns an empty array

// second 


function data() {
    return [1, 2, 3, 4, 5]
}
var tmp1; // whenever we need an access to the destructrued pattern
var first, second, third, fourth; // first 
var p = {}; // second
var a = []; // third we can access to any location of the array 
[
    p.first,
    p.second = 10, // it willl be default when the second is not available
    p.third,
    ...p.fourth // it also takes all the leftoevrs, fi there is not any element , slice method returns an empty array
] = tmp1 = data()

var [
    first,
    ,  // it is called comma separation, used when we skip any item 
    third,
    ...fourth
] = tmp2 = data()



// second page 

var x = 10;
var y = 20;
{ // hard swapping
	let tmp = x ; 
	x = y; 
	y = tmp;
}

____________________________________ // with destructuring >>>
// https://jsfiddle.net/rs4j6opz/9/

var x = 10; 
var y = 20;
[y, x] = [x, y] // it is simply swapping