// Description
// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to 
// associate handlers with an asynchronous action's eventual success value or failure reason. This lets 
// asynchronous methods return values like synchronous methods: instead of immediately returning the final 
// value, the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
// A pending promise can either be fulfilled with a value or rejected with a reason (error). When either 
// of these options happens, the associated handlers queued up by a promise's then method are called. If the 
// promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will
//  be called, so there is no race condition between an asynchronous operation completing and its handlers being 
//  attached.

// As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.

// Note: A promise is said to be settled if it is either fulfilled or rejected, but not pending. 

// Chained Promises
// The methods promise.then(), promise.catch(), and promise.finally() are used to associate further action with a
//  promise that becomes settled.

// The .then() method takes up to two arguments; the first argument is a callback function for the resolved 
// case of the promise, and the second argument is a callback function for the rejected case. Each .then()
//  returns a newly generated promise object, which can optionally be used for chaining

const newPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
      reject('foo')
    },1000)
  })
  
  const success = (data)=> console.log('.then data :',data)
  const failure = (error)=> console.log('.then 2nd data :',error) 


  newPromise
    .then(success,failure) // rejected promise will go in failure method but not in .catch
    .catch((error)=>{
    console.log('.cath error :',error)
  })


//   The promises of a chain are nested like Russian dolls, but get popped like the top of a stack. 
//   The first promise in the chain is most deeply nested and is the first to pop.

// (promise D, (promise C, (promise B, (promise A) ) ) )


const newPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
      reject('foo')
    },1000)
  })
  
  const success = (data)=> console.log('.then data :',data)
  const failure = (error)=> console.log('.then failure data :',error)
  const success2 = (data)=> console.log('2.then data :',data)
  const failure2 = (error)=> console.log('2.then failure data :',error) 

//both will run sequentiually.
const promiseB = newPromise.then(success,failure);
const promiseC = newPromise.then(success2,failure2);


// Note that promises are guaranteed to be asynchronous. Therefore, an action for an already "settled" 
// promise will occur only after the stack has cleared and a clock-tick has passed. The effect is much 
// like that of setTimeout(action,10).

const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
    resolutionFunc(777);
});
promiseA.then( (val) => console.log("asynchronous logging has val:",val) );
console.log("immediate logging");

