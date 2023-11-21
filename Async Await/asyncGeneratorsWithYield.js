// async* .. yield await 

async function fetchURLs(urls) {
    var result = [];

    for (let url of urls) {
        let resp = await fetch( url );
        if(resp.status == 200) {
            let text = await resp.text();
            result.push( text.toUpperCase() );
        } else {
            result.push( undefined );
        }
    }

    return result;
}

/// switch to generator 

function *fetchURLs1(urls) {
    for(let url of urls) {
        let resp = yield fetch( url );
        if(resp.status == 200 ) {
            let text = yield resp.text();
            yield text.toUpperCase();
        } else {
            yield undefined;
        }
    };
};


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function*