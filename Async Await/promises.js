let p = new Promise((resolve, reject) => {
    let a = 1 + 2

    if(a == 2) {
        resolve("Success")
    } else {
        reject("Failed")
    }
})

// console.log(p)

p.then((message) => {
    console.log(`this is in the then ${message}`)
}).catch((message) => {
    console.log(`THis is the catch : ${message}`)
})

const userLeft = true ;
const userWatchingCatMeme = false ;

function watchTutorialCallback(callback, errorCallback) {
    if(userLeft) {
        errorCallback({
            name: "User left", 
            message: ":("
        })
    } else if(userWatchingCatMeme) { 
        errorCallback({
            name: "User watching cat meme", 
            message: "WebDevSimplified < Cat"
        })
    } else {
        callback('Thumbs up and Subscribe')
    }
}

watchTutorialCallback((message) => {
    console.log(`Success: ${message}`)
}, (error) => {
    console.error(`${error.name} ${error.message}`)
})

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if(userLeft) {
            reject({
                name: "User left", 
                message: ":("
            })
        } else if(userWatchingCatMeme) { 
            reject({
                name: "User watching cat meme", 
                message: "WebDevSimplified < Cat"
            })
        } else {
          resolve('Thumbs up and Subscribe')
        }
    })
    
}

watchTutorialPromise()
.then((message) => {
    console.log(`Success: ${message}`)
})
.catch((error) => {
    console.error(`${error.name} ${error.message}`)
})