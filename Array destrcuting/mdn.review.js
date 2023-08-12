// the destructing assignment syntax is a Javascript expressions that makes it possible yto unpack values from arrays, or properties from object, into distinct variables!

let a, b, rest;

[a, b, ...rest] = [20, 30, 40, 50, 60];

console.log(`a: ${a}, b: ${b}, rest: ${rest}(array)`);
console.log(rest[1]);


const [c, d] = rest;
console.log(c, d);

const [s, , e] = rest;
console.log(e);

const [h = aDefault, j] = rest;
const [t, y, ...rost] = rest;

const [p, o, ...{ pop, push }] = rest;
const [q, w, ...[ten, bet]] = rest;

const { he, me } = rest;
const { a4: a12, b4: b12 } = rest;

// 
// const { a, b } = obj;
// const { a: a1, b: b1 } = obj;
// const { a: a1 = aDefault, b = bDefault } = obj;
// const { a, b, ...rest } = obj;
// const { a: a1, b: b1, ...rest } = obj;
// const { [key]: a } = obj;

// let a, b, a1, b1, c, d, rest, pop, push;
// [a, b] = array;
// [a, , b] = array;
// [a = aDefault, b] = array;
// [a, b, ...rest] = array;
// [a, , b, ...rest] = array;
// [a, b, ...{ pop, push }] = array;
// [a, b, ...[c, d]] = array;


// ({ a, b } = obj); // brackets are required
// ({ a: a1, b: b1 } = obj);
// ({ a: a1 = aDefault, b = bDefault } = obj);
// ({ a, b, ...rest } = obj);
// ({ a: a1, b: b1, ...rest } = obj);


// the object and array literal expressions provide an easy way to create ad hoc packages of data.


const x = [1, 2, 3, 4, 5];

// the destructing assignment uses similar syntax, but on the left hand side of the assignment to define what values to unpack from the sources variable

const [mm, nn] = x;
console.log("mm, nn: " + mm, nn); // 1, 2

// similarly, you can destructure objects on the left hand side of the assignment 


const abj = { a: 1, c: 2 };
const { tt, yy } = abj; // { abj.a, abj.c }

// this capability is similar to features present in languages such as perl and python

// binding and assignment


// for both array and object destructing, there are two kinds of destructing patterns: binding pattern and assignment pattern, with slightly different syntaxes.

// in binding patterns the pattern starts with a declaration keyword(var, let or const). then , ech individual property must be either be found to a variable or further destructed



const ob = { z: 1, b: { c: 2 } };

const {
    z,
    b: {
        c: f
    } = {}
} = ob
// there are two variables are bound: z and f

// All variables share the same declaration, so if you want some variables to be re-assignable but others to be ready only, you may have to destructure twice - once with let, once with const


const { temp } = ob; // temp here is z
let {
    b: {
        c: f1
    } = {}
} = ob // f1 here is re-assignable 

// in assignment patterns, the pattern does not start with a keyword. Each destructured property is assigned to a target of assignment which may either be declared beforehand with var or let , or is a property of another object - in general,anything that can appear on the left hand side of an assignment expression


const numbers = [];
const object = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = object);
// the properties 'a' and 'b' are assigned tp properties of 'numbers'


// { a, b } = { a: 1, b: 2 } is not a valid syntax stand alone syntax, as the { a, b} on the left hand side is considered a block and not an object literal. However, ({ a, b } = { a: 1, b: 2 }) is valid, as is const { a, b } = { a: 1, b: 2 };

// if your coding style does not include trailing semicolons, the ( ... ) expression need to be preceded by a semicolon, or it may be used to execute a function on the previous line.

// note that the equivalent binding pattern of the code above is not valid syntax: 


// default value

// each destructuring values has default value,  it is used when the property is not present which is returned undefined ,but it is not used when the property has value null.

const [alpha = 1] = []; // a is 1
const { delta = 2 } = { b: undefined }; // b is 2 which is default 
const { gamma = 2 } = { b: null }; // c is null here


// default value cam be any expression, it will only be evaluated when necessary

const { tee = console.log("hey") } = { b: 2 };
// if we call b, nothing will be logged, cuz b is defined and there is no need for default value


// rest property 

// you can end a destructuring pattern with a rest property ...rest. this pattern will store all remaining properties of the object or array into a new object or array


const { first: r, ...others } = { ttt: 1, b: 3, t: 5 };
console.log(others)

const [first, ...other] = [1, 2, 3];
console.log(other);

// the rest property must be the last in the pattern, and should not have any trailing commas.

// const [trrrr, ...tema, ] = [ 1, 2, 3,];  // as here we cannot put comma after rest operator, it will cuz an syntax error

// destructuring patterns with other syntaxes

// in many syntaxes where the language binds a variable for you, you can use a destructuring pattern as well. These includes 
// the looping variables : for...in and for...of loops
// function parameters
// the catch binding variables 

// examples with array destructuring

var foo = [" one ", "two", "three"];

const [red, greed, yellow] = foo;
console.log(red, greed, yellow);


// destructuring with more elements that the source 

var foo = ['one', "two"];

const [a1, a2, a3, a4] = foo;
console.log(a1, a2, a3, a4);
// if the values are less that variables[];
// the rest will be undefined;

// swapping variables
// two variables can be swapped in one destructuring expression.

// without destructuring assignment, swapping two values requires a temporary variable( or, in some low level languages, the XOR-swap trick);

let left = 1;
let right = 4;
let third = 3

[left, right] = [right, left];
console.log(left, right);



const arrq = [1, 2, 3];
[arrq[2], arrq[1]] = [arrq[1], arrq[2]]
console.log(arrq);


// parsing an array returned from a function

function f11() {
    return [1, 2];
}

const [one, two] = f11();
console.log(one, two);

// ignoring some returned values;

// we can ignore all returned values: 
[, ,] = f11();

// using a binding pattern as the rest property;
// the rest property of array destructuring assignment can be another array or object binding pattern. The inner destructuring destructure from the array created after collecting the rest elements, so you cannot access any properties present on the original iterable in this way 


const [tr, tr1, ...{ length }] = [1, 2, 3];
console.log(tr, tr1, length + " : this one"); // 1, 2, 1 // 


const [qw, qr, ...[we, wt]] = arrray = [1, 2, 3, 4];
console.log(qw, qr, we, wt);
console.log(arrray[2]);

// these biding patterns can even be nested, as long as each rest property is the last in the list 

const [pl, ml, ...[ok, ol, ...[ef, fe]]] = [1, 2, 3, 4, 5, 6];
console.log(pl, ml, ok, ol, ef, fe);

// on the other hand , object destructuring can only have an identifier as the rest property: like in array we can have [a, ...[b]], but in object destructuring we cannot have {a, ...{b}} will return syntaxerror

// unpacking values from a regular expression match

// when the regular expression exec() method finds a match, it returns an array containing first the entire matched portion of the string and then the proportions of the string that matched each parenthesized allows you to unpack the parts out of this array easily, ignoring the full match it is not needed 


function parseprotocol(url) {
    const parsedUrl = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(url);
    if (!parsedUrl) {
        return false;
    }
    console.log(parsedUrl);

    const [, protocol, fullhost, fullpath,] = parsedUrl;
    return protocol;

}
console.log(
    parseprotocol("https://developer.mozilla.org/en-US/docs/Web/JavaScript"),
);

// using array destructuring on any iterable ####

// Array destructuring calls the iterable protocol of the right-hand side,therefore , any iterable , not necessarily arrays, van be destructured

const [rm, em] = new Map([
    [1, 2],
    [3, 4]
]);

console.log(rm, em); // [1, 2]. [3, 4]

// non-iterables cannot be destructured as arrays

const obje = { 0: "a", 1: "b", length: 2 };
// const [first1, second ] = obje;
// typeerror object is not iterable 


// iterables are only until all bindings are assigned;

const iter = {
    *[Symbol.iterator]() {
        for (const v of [0, 1, 2, 3]) {
            console.log(v);
            yield v;
        }
    },
};

const [el1, el2, ...reshta] = iter;
// 0, 1


// the rest binding is eagerly evaluated and creates a new array, instead of using the old iterable
console.log(reshta);

// object destructuring

//basic assignment 

const user = {
    id: 42,
    isVerified: true,
};

const {
    id, isVerified
} = user;


console.log(id, isVerified)
// assigning to new variable names
// a property can be unpacked from an object and assigned to a variable with a different name than the object property.

const o1 = { tel: 43, pq: true };
const {
    tel: foo1 = "copy",
    pq: bar = "second"
} = o1;

console.log(foo1, bar);
// here for example . const { p: foo } = o from the object o the property  named p and assigns it to a local variable named foo

// Assigning to new iterable names and providing default values

const ist = { p9: Number("98"), q9: false };
const { p9: foobar, q9: barfoo } = ist;

console.log(foobar, barfoo)

// here , for example , const { p : foobar } = ist takes from the object ist the property named p and assigns it to local variable named foobar.

// Assigning to new variable name
// unpacked from an object and assigned to a variable with a different name.
// Assigned a default value in case the unpacked value is undefined

const { alfan: omega = 10, arfan: deltan = 5 } = { alfan: 3 };

console.log(omega, deltan, ":  this")


// unpacking properties from objects passed as a function parameter 

const user1 = {
    id4: 52,
    nickname: "jdoe",
    fullName: {
        firsName: "Joe",
        lastName: "Doe"
    },
};
// ---------------
const {
    id4 = "age",
    nickname = "nickname",
    fullName: {
        firsName = "Name",
        lastName = "LastName"
    },
} = user1;
// ---------------

function userId({ id4 }) {
    return id4;
}
console.log(userId(user1));

// you can defined the name of the unpacked variable . Here we unpack the property named nickname  and rename it to dname for use within the function body

function userDisplayName({
    nickname: dname
}) {
    return dname;
};

console.log(userDisplayName(user1))

// Nested objects also can be unpacked , the example below shows the property fullName.firstName being unpacked into a variable called name 

function whois({ nickname, fullName: { firsName: name } }) {
    return `${nickname} is ${name}`
}

console.log(whois(user1));

// setting  a function parameter's default value 

// default values can be specified using =, and will be used as variable values if a specified property does not exist in the passed object.

// below we show a function where the default size is 'big', default co-ordinates are x: 0, yy: 0 and default radius is 25.

function drawChart({
    size = "big",
    coords = { x: 0, y: 0 },
    radius = 25,
} = {}) {
    return `${size}, ${Object.values(coords)}, ${radius} `;
    // do some chart drawing 
}

console.log(drawChart({
    coords: { x: 18, y: 30 },
    radius: 30,
}));


// in the function signature for drawChart above, the destructured left hand side has a default value of an empty object = {};


// nested object and array destructuring 

const metadata = {
    title: "Scratpad",
    translation: [
        {
            locale: "de",
            localizationTags: [],
            lastEdit: "2014-04-14T08:43:37",
            url: "/de/docs/Tools/Scratchpad",
            title: "JavaScript-Umgebung",
        },
    ],
    url: "/en-US/docs/Tools/Scratchpad",
};

const {
    title: englishTitle, // rename 
    translation: [
        {
            title: localeTitle,// rename 
        },
    ],
} = metadata;

console.log(englishTitle);
console.log(localeTitle);

// for of iteration and destructuring

const people = [
    {
        name: "mike smith",
        family: {
            mother: "jane smith",
            father: "harry smith",
            sister: "smama smith",
        },
        age: 55,
    },
    {
        name: "Tom Jones",
        family: {
            mother: "Norah Jones",
            father: "Richard Jones",
            brother: "Howard Jones",
        },
        age: 25,
    },
];

for( const {
    name: n,
    family: {father: f}, 
} of people) {
    console.log(`Name: ${n}, Father: ${f}`);
};


// computed object property names and destructuring 

// computed  property names, like on object literals, can be with destructuring

const key = "z";
const { [key]: football } = { z: "bar" };

console.log(football); // 'bar;

// invalid javascript identifier as a property name

// destructuring can be used with property names that are not valid js identifiers by providing an alternative identifier that is valid.

const base = { "fizz-buzz": true };
const { "fizz-buzz": fizzBuzz } = base;

console.log(fizzBuzz);  // true

// destructing primitive values 

const { teddy, toFixed } = 1;
console.log(teddy, toFixed); // undefined f toFixed()  { [ native code ] };

// same as accessing properties , destructuring null of undefined throws a TypeError.


// const { emi } = undefined;

// const { trump } = null;

// this happens when the pattern is empty

// const {} = null; // TypeError: Cannot destructure 'null' as it is null.

// the prototype chain is looked up when the object is deconstructed

// when deconstructing an object. if a property is not accessed in itself, it will continue to look up along the prototype chain.

const obj = {
    self: "123", 
    __proto__: {
        prot: "456", 
    },
};

const { self, prot } = obj;
console.log(self, prot);

