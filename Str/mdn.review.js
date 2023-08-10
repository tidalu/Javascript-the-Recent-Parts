// `string text`

//     `string text line 1
//     string text line 2`

//     `string text ${expression} string text`

// tagFunction`string text ${expression} string text`


// to escape a backtick in a template literal put a backslash before the backtick

console.log(`\`` === "`")

// dollar sign also can be taken by this backslash 
console.log(`\${1}` === "${1}"); // true

//m multiline strings

// using normal strings , we could get new line like this 
console.log("string text line 1 \n" + "string text line 2");
// "string text line 1
// string text line 2"
// using backslash \n 


// using template string we can do break the line whenever we want it works 
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"



// string interpolation

// without template literals , when we want to combine output from expression with string , we could concatenate them

const a = 5;
const b = 10;
console.log("fifft is " + (a + b) + " and\nnot" + (2 * a + b) + ".")



// easy with template literals :
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);

// nesting templates

// without template literals, if you wanted to return a certain values based on a particular :
function isLargeScreen() { };
var item = {
    isCollapsed() {

    }
}
let classes = "header";
classes += isLargeScreen()
    ? ""
    : item.isCollapsed
        ? " icon-expander"
        : " icon-collapsed";

// but it is not good idea


const classes1 = `header ${isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapsed"
    }`;

// but  by nesting templates we can do this 

const classes2 = `header ${isLargeScreen() ? "" : `icon=${item.isCollapsed ? "expander" : "collapsed"}`
    }`;


// tagged templates 

const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
    const str0 = strings[0]; // "That "
    const str1 = strings[1]; // " is a "
    const str2 = strings[2]; // "."

    const ageStr = ageExp > 99 ? "centenarian " : "youngster";

    // w cn even return a string built using a template literal 
    return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}`;

console.log(output);


// the tag does not have to be a plain identifier. we can use any expression with precedence(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) greater than 16, which includes property access(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors), function call, new expression, or even another tagged template literal;

console.log`Hello , work`;
console.log.bind(1, 2)`Hello`

new Function("console.log(arguments)")`Hello`

function recursive(string, ...values) {
    console.log(string, values);
    return recursive;
}

recursive`hello${5 * 5}``fantastic ${5}lik`

// while technically permitted by the syntax, untagged template literals are strings and will throw an typeerror when chained .

// console.log(`h``w`)

// the only exception is optional chaining which will throw a syntax error.

// console.log?.`Hello`
// console?.log`Hello`

// still a syntax error

const aq = console?.log
// `hello`

// tag functions do not even need to return a string

function template(strings, ...values) {
    return (...values) => {
        const dict = values[values.length - 1] || {};
        const result = [strings[0]];
        strings.forEach((key, i) => {
            const value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, strings[i + 1])
        });
        return result.join("")
    };
}

const t1Closure = template`${0}${1}${0}!`;
console.log(t1Closure("Y", "A"));

// the first argument received by the tag function is an array of strings, for any template literal  it's length is equal to the number of substitutions (occurrences of ${}) plus one, and is therefore always non-empty

// for any particular tagged template literal expression the tag function will always be called with the exact same literal way , no matter how many times the literal is evaluated


const callHistory = [];

function tag(strings, ...values) {
    callHistory.push(strings);
    // return a freshly made object 
    return {}
}


function evaluateLiteral() {
    return tag`Hello, ${"world"}!`
}

console.log(evaluateLiteral() === evaluateLiteral()); // false, cuz each time tag is called it returns new object , and both objects addresses will be different so false

console.log(callHistory[0] === callHistory[1]);

// this allows  the tag to cache the result based on the identity its first argument , to further ensure the array values's stability, the first argument  and its raw property are both frozen , so you cannot mutate them in any way 

// raw string

// the special raw property available ob the first argument to the tag function, allows you to access the raw string as they were entered without processing escape sequence(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings)

function tage(strings) {
    console.log(strings.raw[0])
}

tage`string text line 1 \n string text line 2`;


// in addition , the String.raw method exists tp create raw strings just like the default template function a string concatenation

const str = String.raw`Hi\n${2 + 3}!`

str.length;
// 6

Array.from(str).join(",");
// "H,i,\\,5,!"

// String.raw functions lik an "identity" tag if the literal does not contain any escape sequence. In case you want an actual identity tag that always worked as if the literal is untagged, you can  ,make a custom function that passes the "cooked" (i.e escape sequence are processed) literal array to String.raw, pretending they are raw strings

const identity = (string, ...values) => {
    return String.raw({ raw: string }, ...values);
}

console.log(identity`Hi\n${2 + 3}!`);

// this is useful for many tools which gave  special treatment to literals tagged by a particular name

const html = (string, ...values) => String.raw({ raw: string }, ...values);

// some formatters will format this literal's content as Html

const doc = html`<!doctype html>
    <html lang="en-US">
        <head>
            <title>Hello</title>
        </head>
        <body>
            <h1>Hello world!</h1>
        </body>
    </html>`

console.log(doc);

// tagged templates and escape sequences

// in normal template literals, the escape sequences in string literals are allowed
// \ followed by any decimal digit other than 0, or \0 followed by a decimal digit  for example \9 and \07 ( which is deprecated syntax)  

// \x followed by fewer than two hex digit (including none,); ex \xz


// \u not followed  by { and followed by fewer than fou r hex digits (including none); ex: \uz

// \u{} enclosing an invalid unicode print - it contains a non-hex digit , or its value is greater than 10ffff; for example \u{110000} and \u{z};

// however this is problematic for tagged templates, which is addition to the "cooked" literal, also have access to the raw literals

// tagged templates should allow the embedding of languages (for examples DSls or Latex), where other escapes sequences are common. therefore , the syntax restriction of well formed escape sequence is removed from tagged templates 


// console.log(latex`\unicode`);
// throws  in older Ecmascript version 
// syntax error: malformed unicode character escape sequence 

// however , illegal escape sequence must still be represented in the "cooked" representation. they will show up as undefined element in the " cooked" array:

function latex(str) {
    return { cooked: str[0], raw: str.raw[0] };
}
console.log(latex`\unicode`);
// { cooked: undefined, raw: '\\unicode' }

// note that the escape-sequence restriction is only dropped from tagged templates, but not from untagged template literals

// const bad = `bad escape sequence: \unicode`; 
// ignore  after this line 
var arr = [3, 2, 1];
var withArr = arr.with(2, 3) 
console.log(arr.toSorted())
console.log(arr)
console.log(withArr)

// ignore stops here





