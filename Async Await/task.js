function getFile(file) {
	return new Promise(function(resolve){
		fakeAjax(file,resolve);
	});
}

async function loadFiles(files) {
	// request all files concurrently
    var prs = files.map(getFile);


    // prs.forEach(function out(pr){
        // console.log(await pr)
    // })
    for(let pr of prs) {
        console.log(await pr);
    }
    // var pr1 =  getFile(files[0])
    // var pr2 =  getFile(files[1])
    // var pr3 =  getFile(files[2])

	// print in order, sequentially
}

loadFiles(["file1","file2","file3"]);


// **************************************


function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}
