//m destucturing 

// decomposing a structure into its individual Parts

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

var tmp = getSomeREcords();

var first = tmp[0];
var second = tmp[1];

var firstName = first.name;
var firstEmail = first.email !== undefined ? first.email : "nobody@none.tld";

var secondName = second.name;
var SecondEmail = second.email !== undefined ? second.email : "nobody@none.tld";


// using destructuring it can be done in this way

var [
    {
        name: firstName, 
        email: firstEmail = "nobody@none.tld"
    }, 
    {
        name: secondName, 
        email: SecondEmail = "nobody@none.tld"
    }
] = getSomeREcords();