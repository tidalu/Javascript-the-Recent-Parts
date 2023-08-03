// template strings 
// (interpolated literals)

// interpoliterals

// ES6 / ES2015

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

`` 

// we can break the line automatically, it allows us, like just quotes does not , in quotes we should put backslash at the end of the line to break the like 

// tagged templates

var amount = 12.3

var msg = 
        formatCurrency
    `The total for your order is ${amount}`;

    console.log(msg)
    
    // tag functions
function formatCurrency(strings, ...values) {
    var str = "";
    for(let i = 0; i < strings.length; i++) {
        if(i > 0) {
            if(typeof values[i-1] == "number" ) {
                str += `$${values[i-1].toFixed(2)}`;
            } else {
                str += values[i-1]
            }
        }
        str += strings[i]
    }
    return str;
}

// logger ~ console.log
