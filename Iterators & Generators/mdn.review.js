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


function makeRangeIterator( start = 0, end = Infinity, step = 1 ) {
    let nextIndex = start;
    let iterationCount = 0; 

    const rangeIterator = {
        next() {
            let result; 
            if(nextIndex < end) {
                result = { value: nextIndex, done: false };
                nextIndex += step;
                iterationCount++;
                return result;
            }
            return { value: iterationCount, done: true}
        }, 
    };
    return rangeIterator;
}