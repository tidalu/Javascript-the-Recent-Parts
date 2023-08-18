// iterator and generators

// iterators and generators bring the concept of iteration directly into the core language and provide a mechanism for customizing the behavior of for...of loops 

// -------------------------------------------------------------------------------- //
// contents  //

// iterator and generator common: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators <--- now
// -------------------------------------------------------------------------------- //


//  iteration protocols :  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

// for...of : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// function* : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

// generators : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator

// yield : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield

// yield* : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*

// iterator : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator

// ----------------------------------------------------------------------------------//


// iterators 

// in js iterator is an object which defines a sequence and potentially a return value upon its termination.

// specifically , an iterator is any object which implements the iterator protocol by having a next() method that returns an object with two properties

// value- the next value in the iteration sequence 


//  done - true or false depending on iteration's value count 


function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
        next() {
            let result;
            if (nextIndex < end) {
                result = { value: nextIndex, done: false };
                nextIndex += step;
                iterationCount++;
                return result;
            }
            return { value: iterationCount, done: true }
        },
    };
    return rangeIterator;
}

// then th iterator then looks like this

const it = makeRangeIterator(1, 10, 2);

let result = it.next();

while (!result.done) {
    console.log(result.value); // 1, 3, 5, 7, 9
    result = it.next();
}

console.log("iterated over sequence of size: ", result.value);


// it is not possible to know reflectively whether a particular object is an iterator. If u need to do this, using iterable are the best way

// generators

function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let iterationCount = 0; 
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}

// iterables 

// an object is iterable it it defines its iteration behavior, such as what values are looped over in a for...of construct. Map and Array have a default iteration behavior, but object not.

// in order to be iterable , an object must be implemented the @@iterator method, this means that the object (or one of the objects up its protocol chain) must have a property with a Symbol.iterator key

function* makeIterator() {
    yield 1;
    yield 2;

}
const it1 = makeIterator();

for (const item of it1) {
    console.log(item);
}

function* to100() {
    for( var i = 0; i <= 100; i+=2){
        yield i;
    }
}

const it2 = to100();
var arr = [];
for( const num of it2) {
    arr.push(num);
}

console.log(arr);

console.log(it2[Symbol.iterator]() === it2); // true
console.log(it2[Symbol.iterator]());

// this example show us generator(iterator) is iterable object.
// which has the @@iterator method return the it (itself)
// and consequently, the it object can iterate only _once_.

// // If we change it's @@iterator method to a function/generator
// which returns a new iterator/generator object, (it)
// can iterate many times

it1[Symbol.iterator] = function* () {
    yield 2;
    yield 1;
};

const it3 = it1[Symbol.iterator]();

for( const it of it3 ) {
    console.log(it)
}

// User-defined iterables

const myIterable = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
}

for ( const value of myIterable ) {
    console.log( value );
}

var ar2 = [...myIterable];
console.log(ar2)

// built in iterable 

// String, Array, TypedArray, Map and Set are all built-in iterables, because their prototype objects all have a Symbol.iterator method.

// Syntax expecting iterables 

for ( const value  of [1, 2 , 3] ) {
    console.log(value);
}

console.log([..."abc"]);

function* gen() {
    yield* ["a", "b", "c"];
    yield "alfa";
    yield "betta";
}
const gener = gen();

for( const val of gener) {
    console.log(val);
}

// / Advanced generators 

// generators compute their yield ed values on demand, which allows them to efficiently represent sequences that are expensive to compute ( or even infinite sequences, as demonstrated above).

// the next() method also accepts a value , which can be used to modify the internal state of the generator. A value passed to next() will be received by yield;


// A value passed to the first invocation of next is always ignored

// here is the fibonacci generator using next(x) to restart the sequence:

function* fibonacci() {
    let current = 0;
    let next = 1;
    while (true) {
        const reset = yield current;
        [current, next] = [next, next + current];
        if ( reset ) {
            current = 0; 
            next = 1 ;
        }
    }
}
// [0, 1, 1, 2, 3, 5 ... ]
console.log("----------------------------------------")
const sequence1 = fibonacci();
console.log(sequence1.next().value); // 0
console.log(sequence1.next().value); // 1
console.log(sequence1.next().value); // 1
console.log(sequence1.next().value); // 2
console.log(sequence1.next().value); // 3
console.log(sequence1.next().value); // 5
console.log(sequence1.next().value); // 8
console.log(sequence1.next(true).value); // 0
console.log(sequence1.next().value); // 1
console.log(sequence1.next().value); // 1
console.log(sequence1.next().value); // 2

// 

// Generators have a return(value) method that returns the given value and finished the generator itself 

