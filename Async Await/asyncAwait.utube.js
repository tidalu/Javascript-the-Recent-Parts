function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to the ${location}`)

        if(location === "Google") {
            resolve("Google says hi!")
        } else {
            reject("we can only talk to Google")
        }
    })
}

function processRequest(responce) {
    return new Promise((resolve, reject) => {
        console.log("Processing responce");
        resolve(`Extra infromation:  ${responce}`)
    })
}

// makeRequest("FaceBook")
// .then((response) => {
//     console.log(`response has been recieved!`)
//     return processRequest(response)
// }).then(processedResponse => {
//     console.log(processedResponse);
// }).catch(err => {
//     console.log(err);
// })

// / convert to async await

async function doWork() {
    try {
        const response = await makeRequest("Google");
    console.log(`response has been recieved!`);
    var processedResponse = await processRequest(response);
    console.log(processedResponse)
    } catch (err) {
        console.log(err);
    }
    
}

doWork()