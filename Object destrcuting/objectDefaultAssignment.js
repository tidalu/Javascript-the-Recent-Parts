function data() {
	/* return { a: 1, b:2, c:3, d:4 } */;
    return;  // even if we so not return anything, in all references there will occur some type error
}

var tmp = data() || {}; // to avoid type error we should provide backup default value: empty object
var first = tmp.a;
var second = tmp.b;

// somehow if we are gonne name the source and targed  the same as obj key names, there willl be no problems 
var a = tmp.a
var b = tmp.b





// ------------------
// destructuring equavalent

function data() {
    //return { a: 1, b:2, c:3, d:4 };
    return;
}

var {
    a: first,
    b: second, // if the source and targets are the same name just write once like arrays ::
    // a, 
    // b  --< like this , but it is valid the name is only one word ,otherwise there will have some err


} = data() || {}; // the same is also here, we should provide backup to avoid type err when nothing is returned