var arr = [ 
    {
        a: 1
    }, 
    {
        a: 2
    }
]

console.log(arr.find( function match(v){
    return v && v.a > 1
})); // { a: 2 }

console.log(arr.find( function match(v) {
    return v && v.a > 10;
})); // undefined 
// find method return undefined if it cannot find, even if the value of the found element is undefined u cannot differ is it found value or not found, so that at such time use findIndex
console.log(arr.findIndex(function match(v) {
    return v && v.a > 10
})) // -1


// 

var arr = [ 10, 20, NaN, 30, 40, 50 ];

arr.indexOf ( 30 ) != -1 ; // true
console.log(~arr.indexOf( 20 ))
console.log(~arr.indexOf( NaN ) );

console.log(arr.includes(50, -1))