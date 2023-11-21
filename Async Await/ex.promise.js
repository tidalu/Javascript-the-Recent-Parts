const recordVideoOne = new Promise((resolve, reject) => {
    resolve("Video 1 recorded")
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve("Video 2 recorded")
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve("Video 3 recorded")
})

// Promise.all([
//     recordVideoOne, 
//     recordVideoTwo, 
//     recordVideoThree
// ]).then((message) => {
//     console.log(message)
// })
Promise.race([  // returns only returs the first done
    recordVideoOne, 
    recordVideoTwo, 
    recordVideoThree
]).then((message) => {
    console.log(message)
})





// wheather api function

const fetchWeatherAPI1 = () => {
    return new Promise((resolve, reject) => {
        // simulating an async api call
        setTimeout(() => {
            const wheatherData = {
                temprature: 25, 
                condition: "sunny"
            };

            // simulating a 90% chnace of success
            Math.random() < 0.9 ? resolve(wheatherData): resolve("APi 1 failed");
        }, Math.random() * 3000); // random delay to simulate network latency
    });
};

fetchWeatherAPI1()
.then((wheatherData) => {
    console.log(wheatherData)
}).catch((error) => {
    console.error(error)
})