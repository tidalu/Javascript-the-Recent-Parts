// const FA = require('fasy')
// const CAF = require('caf');
// const { sign } = require('crypto');
// const caf = require('caf');
// async function loadFiles(files) {
//     var prs = files.map(getFile);


//     // prs.forEach(function out(pr) {
//     //     console.log(await pr)
//     // })

// }
// // https://github.com/getify/fasy
// // async function problems

// async function fetchFiles(files) {
//     var prs = await FA.concurrent.map( getFile, files );

//     await  FA.serial.forEach( async function each(pr){
//         console.log( await pr );
//     }, prs )

// }

// // some problems 

// // 1. await ONly Promise
// // await keyword only knows what to do with real promises

// // 2. Scheduling (starvation)

// // https://en.wikipedia.org/wiki/Communicating_sequential_processes


// // 3. External cancelation
// // https://www.youtube.com/watch?v=VDaKLQE03ss
// // https://github.com/getify/caf


// var token = new CAF.cancelToken();

// var main = CAF( function *main(signal, url){
//     var resp = yield fetch( url, { signal } );
//     // ...

//     return resp
// } ); 

// main( token.signal, "https://some.tld/other" )
// .then( onResponse, OnCancelOrError );

// // only waits 5 seconds for the request

// setTimeout( function onElapced(){
//     token.abort( "Request took too long!");
// }, 5000);




// var timeOutToken = CAF.timeout( 5000, "took too long!" );

// var main = CAF( function *main(signal, url){
//     var resp = yield fetch( url, { signal } );
//     // ...

//     return resp;
// } );

// main( timeOutToken, "https://some.tld/other" )
// .then( onResponse, OnCancelOrError );


const asyncIterabl = (async function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
})();

(async () => {
  for await (const value of asyncIterabl) {
    console.log(value)
  }
})();
