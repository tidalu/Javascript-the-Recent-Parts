// [Symbol.iterator] -> a zero argument function that returns an object, conforming the iterator protocol

// satisfies both the iterator protocol and iterable 
const mtIter = {
    next() {
        //..  
    }, 
    [Symbol.iterator]() {
        return this;
    },
};


const aGeneratorObject = (function* () {
    yield 1;
    yield 2;
    yield 3;
})();

console.log(typeof aGeneratorObject.next);

const a = aGeneratorObject[Symbol.iterator](); // this is a function that has a next() method

//


const myObj = {};

console.log(new WeakSet(
    (function* () {
        yield {};
        yield myObj;
        yield {};
    }) (), 
).has(myObj)); // true


// 


[a1, b, c] = new Set(["a", "b", "d"]);
console.log(a1, b, c);


const obj2 = {
    [Symbol.iterator]() {
        let i = 0;
        return {
            next() {
                i++;
                console.log("Returning ", i );
                if ( i === 3 ) return { done: true, value: i };
                return { done: false, value: i };
            }, 
            return() {
                console.log("closiing");
                return { done: true };
            },
        };
    },
};


const [p] = obj2;
const [w, g, t] = obj2
console.log(p, w, g, obj2.return);

// user-defined iterables 

const myiterar = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    },
};

console.log([...myiterar]);

// Simple iterator 

// iterators are stateful by nature, if you do not define it as a generator function(as the example above shows), you would likely want to encapsulate the state in a closure

function makeIt (array) {
    let nextIndex = 0;
    return  {
        next() {
            return nextIndex < array.length 
                ? {
                    value: array[nextIndex++], 
                    done: false, 
                }
                : { 
                    done : true,
                };
        },
    };
};

const iterp = makeIt(['o', 'i']);

console.log(iterp.next().value);
console.log(iterp.next().value);
console.log(iterp.next().value);
console.log(iterp.next().done);

// infinite iterator 

function idMaker() {
    let index = 0;
    return {
        next() {
            return
        }
    }
}