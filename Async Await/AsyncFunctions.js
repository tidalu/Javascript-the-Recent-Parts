fetCurrentUser()
.then(function onUser(user){
    return Promise.all([
        fetchArchivedOrders( user.id ), 
        fetCurrentOrders( user.id )
    ]);
})
.then( function onOrders(
    [ archivedOrders, currentOrders]
){
    // ...
})

// we should replace this with >>>

runner(function *main(){
    var user = yield fetCurrentUser();

    var [archivedOrders, currentOrders] = 
        yield Promise.all([
            fetchArchivedOrders( user.id ), 
            fetCurrentOrders( user.id )
        ]);
    // ...
}); 

// co library: https://github.com/tj/co
// koa: https://koajs.com/
// bluebird: http://bluebirdjs.com/docs/getting-started.html

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

// more better way to control pause an such thing with just async function: ... 

async function main() {
    var user = await fetchCurrentUser();
    var [ archivedOrders, currentOrders] = 
        await Promise.all([
            fetchArchivedOrders( user.id ), 
            fetchCurrentUser( user.id )
        ]);
        // ..
    }
main();

// async functions are much more better that promise chains(.then(...))