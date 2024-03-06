// const fetchPromise = fetch(
//   "http://localhost:4500/products.json"
// );

// fetchPromise.then((response) => {
//   const jsonPromise = response.json();
//   jsonPromise.then((data) => {
//     console.log(data[0].name)
//   })
// })

// fetchPromise
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data[0].name);
//   });

const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

const alice1Anima = alice1.animate(aliceTumbling, aliceTiming);
// const alice2Anima = alice2.animate(aliceTumbling, aliceTiming);
// const alice3Anima = alice3.animate(aliceTumbling, aliceTiming);

const finishedPromise = Animation.finished
console.log(finishedPromise);

// finishedPromise
//   .then((result) => alice2.animate(aliceTumbling, aliceTiming))
//   .then((result2) => alice3.animate(aliceTumbling, aliceTiming))






// function doStep1(callback) {
//   const result = alice1.animate(aliceTumbling, aliceTiming);
//   callback(result);
// }

// function doStep2(callback) {
//   const result = alice2.animate(aliceTumbling, aliceTiming);
//   callback(result);
// }

// function doStep3(callback) {
//   const result = alice3.animate(aliceTumbling, aliceTiming);
//   callback(result);
// }

// function doOperation() {
//   doStep1((result1) => {
//     doStep2(result1, (result2) => {
//       doStep3(result2, (result3) => {
//         result3;
//       })
//     })
//   })
// }

// doOperation();

// alice1.animate(aliceTumbling, aliceTiming);