function lookupRecords(store = "person-records", id = -1) {
    // ...
}

function lookupRecords1({
    store = "person-records", 
    id = -1
}) {
     // ...
}

lookupRecords( {id: 42} ) // so it is recommended to use object parameter when we have more than 2 arguments in the function