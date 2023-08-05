
///  
var o = {
    a: {
        b: 2,
        c: 3
    }
};

var o2 = {
    a: {}
};

var o3 = {}




// destructuring 

var {
    a: {
        b = 10, // should be here // if we do not have b, or c thier values will be undefined

        c = 20 //should be here
    } = { // if we do not have a at all default will be used, otherwise if we have a just an {} like 03 both b, c  will be undefined, so it is stongly recommended to give default values to the values like b, c to the main place not the default obj
        b: 10, // not here 
        c: 20 // not here 
    }
} = o3