var nestedValue = [1, [2, 3], [[]], [4, [5]], 6];

nestedValue.flat(0); // no changes
console.log(nestedValue.flat(/** default 1 */)); // [
//     1,  2, 3,
//     [], 4, [ 5 ],
//     6
//   ]

console.log(nestedValue.flat(2)) // [ 1, 2, 3, 4, 5, 6 ]


// *****

console.log([1, 2 ,3 ].map( function tuples(v) {
    return [v * 2, String(v*2)];
})) // [ [ 2, '2' ], [ 4, '4' ], [ 6, '6' ] ]

console.log([1, 2 ,3 ].map( function tuples(v) {
    return [v * 2, String(v*2)];
}).flat()); // [ 2, '2', 4, '4', 6, '6' ]

console.log([1, 2 ,3 ].flatMap( function all(v) {
    return [v * 2, String(v*2)];
})); // [ 2, '2', 4, '4', 6, '6' ]

// ***************

console.log([1, 2, 3, 4, 5 ,6 ,7].flatMap(
    function doubleEven(v) {
        if(v % 2 == 0) {
            return [v, v*2]
        } else {
            return []
        }
    }
));