// This promise is going to take one parameter which is a function which gets pased two  variables of resolve and reject.
// So we have a resolve parameter and reject parameter and then we need to actually create the definition of that function inside.

let p = new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a == 2) {
    // resolve method - in this case, with a message (we came up with this name of "message", used below) parameter
    resolve("Success");
  } else {
    // reject method - in this case with a message parameter
    reject("failed");
  }
});


// Anything with a ".then" is going to run for a resolve.".then" takes a method and has a single parameter, since we're passing a single parameter to RESOLVE above.
// ".catch" is going to run for a reject

//.then will be called on resolve and .catch will be called upon .reject
p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => {
  console.log("This is in the catch " + message);
})

// // USING CALLBACKS
// const userLeft = false;
// const userWatchingCatMeme = false;

// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: "User Left",
//       message: ":("
//     })
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: "User Watching Cat Meme",
//       message: "WebDevSimplified < Cat"
//     })
//   } else {
//     callback("Thumbs up and Subscribe")
//   }
// }

// watchTutorialCallback((message) => {
//   console.log("Succes: " + message)
// }, (error) => {
//   console.log(error.name + " " + error.message)
// })


// // USING PROMISES
// const userLeft = false;
// const userWatchingCatMeme = false;
// function watchTutorialPromise() {
//   return new Promise((resolve, reject) => {
//     if (userLeft) {
//       reject({
//         name: "User Left",
//         message: ":("
//       })
//     } else if (userWatchingCatMeme) {
//       reject({
//         name: "User Watching Cat Meme",
//         message: "WebDevSimplified < Cat"
//       })
//     } else {
//       resolve("Thumbs up and Subscribe")
//     }
//   })
// }

// watchTutorialPromise().then((message) => {
//   console.log("Succes: " + message)
// }).catch((error) => {
//   console.log(error.name + " " + error.message)
// })

// // Another Example using "Promise.all"
// const recordVideoOne = new Promise((resolve, reject) => {
//   resolve('Video 1 Recorded')
// })

// const recordVideoTwo = new Promise((resolve, reject) => {
//   resolve('Video 2 Recorded')
// })

// const recordVideoThree = new Promise((resolve, reject) => {
//   resolve('Video 3 Recorded')
// })

// Promise.all([
//   recordVideoOne,
//   recordVideoTwo,
//   recordVideoThree
// ]).then(messages => {
//   console.log(messages)
// })

// // Another Example using "Promise.race"
// const recordVideoOne = new Promise((resolve, reject) => {
//   resolve('Video 1 Recorded')
// })

// const recordVideoTwo = new Promise((resolve, reject) => {
//   resolve('Video 2 Recorded')
// })

// const recordVideoThree = new Promise((resolve, reject) => {
//   resolve('Video 3 Recorded')
// })

// Promise.race([
//   recordVideoOne,
//   recordVideoTwo,
//   recordVideoThree
// ]).then(message => {
//   console.log(message)
// })
