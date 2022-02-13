// #Promise.prototype.catch()
// Appends a rejection handler callback to the promise, and returns a new promise resolving to the return 
// value of the callback if it is called, or to its original fulfillment value if the promise is instead 
// fulfilled.

// #Promise.prototype.then()
// Appends fulfillment and rejection handlers to the promise, and returns a new promise resolving to the return 
// value of the called handler, or to its original settled value if the promise was not handled (i.e. if the 
//     relevant handler onFulfilled or onRejected is not a function).



//# Promise.prototype.finally()
// The finally() method returns a Promise. When the promise is finally either fulfilled or rejected, the 
// specified callback function is executed. This provides a way for code to be run whether the promise was 
// fulfilled successfully, or instead rejected.

let isloading = false
function checkMail() {
  isloading = true
  return new Promise((resolve, reject) => {
      resolve('ress')
      reject('rejjj')
  });
}
console.log(isloading,'initial'); //false
checkMail()
  .then((mail) => {
    console.log(mail,'1');
    //return 'new data'
  })
  .then((mail) => {
    console.log(isloading,'2nd'); //true
  })
  .catch((err) => {
    console.error(err,'er');
  })
  .finally((data) => {
  isloading = false
  console.log(isloading,'final'); //false
    console.log(data,'Experiment completed');
  });


//   The finally() method can be useful if you want to do some processing or cleanup once the promise is
//    settled, regardless of its outcome.