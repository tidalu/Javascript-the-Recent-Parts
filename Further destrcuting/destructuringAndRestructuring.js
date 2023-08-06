
// the most common approach

var defaults = {
    url: "https://some.base.url.api",
    method: "post",
    headers: [
        "Content-Type: text/plain"
    ]
};

console.log(defaults)

// ***********************

var settings = {
    url: "https://some.other.url.api",
    data: 42,
    callback: function (resp) {
        // ...
    }
};

// underscore extend(..)
// ajax( _.extend({}, defaults, settings) );
// or: ajax( Object.assign({}, defaults, settings) );


// 3:27 L:n stopped
// this line started to make ajax function
async function ajax(options) {
    try {
        const response = await fetch(options.url, {
            method: options.method,
            body: options.data ? JSON.stringify(options.data) : undefined,
            headers: options.headers.reduce((acc, header) => {
                const [key, value] = header.split(": ");
                acc[key] = value;
                return acc;
            }, {}),
        });

        const responseData = await response.json();
        options.callback(responseData);
    } catch (error) {
        console.error("Error:", error);
    }
}

// this line ended

function ajaxOptions({
    url = "https://some.base.url/api",
    method = "post",
    data,
    callback,
    headers: [
        headers0 = "Content-Type: text/plain",
        ...otherHeaders
    ] = []
} = {}) {
    return {
        url, method, data, callback,
        headers: [
            headers0,
            ...otherHeaders
        ]
    };
}// =============================


// with no arguments m returns the defaults

// as an object if necessary 
var defaults = ajaxOptions()

console.log(defaults)


// ******************

var settings1 = {
    url: "http://localhost:3000/", 
    data: 42,
    callback: function (responseData) {
        console.log("Response Data:", responseData);
    },
};

// with an argument, mixes in the settings
// w/ the settings

ajax ( ajaxOptions ( settings1 ) ) ;;

