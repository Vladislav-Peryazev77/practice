'use strict';
function runCode() {
  console.log('before promise');
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Zero Promise');
      resolve();
    }, 0);
  });
}
setTimeout(() => {
  console.log('Zero');
}, 0);
runCode().then(() => console.log('Zero Promise Invoked'));
console.log('One1');

// before promise
//one
//zero
//zero promise
//zero promise invoked

// const getData = (callback) => {
//   fetch('https://jsonplaceholder.typicode.com/users/1')
//       .then((response) => response.json())
//       .then((user) => {
//         console.log('Success');
//         callback(user);
//      })
//       .catch((error) => {
//         console.log(error);
//       });
//     }

// getData(() => {
//   console.log('user received');
//   const promise = new Promise((resolve) => {
//      setTimeout(() => {
//       resolve('promise resolved');
//     }, 500);
//   console.log('in promise');
//   setTimeout(() => {
//     console.log('last set timeout');
//     }, 400);
//   });

//   promise.then((result) => {
//     console.log(result);
//   })
// });
// console.log('End')

//end
// success
// user received
// in promise
// last set timeout
// promise resolved
