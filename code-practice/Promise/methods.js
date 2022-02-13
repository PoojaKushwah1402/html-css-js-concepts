
// Constructor
// Promise()
// Creates a new Promise object. The constructor is primarily used to wrap functions that do not already 
// support promises.

// Static methods
// Promise.all(iterable)

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]

// This method can be useful for aggregating the results of multiple promises. It is typically used when 
// there are multiple related asynchronous tasks that the overall code relies on to work successfully — 
// all of whom we want to fulfill before the code execution continues.

// Promise.all() will reject immediately upon any of the input promises rejecting
// It is possible to change this behavior by handling possible rejections:

var p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('p1_delayed_resolution'), 1000);
  });
  
  var p2 = new Promise((resolve, reject) => {
    reject(new Error('p2_immediate_rejection'));
  });
  
  Promise.all([
    p1.catch(error => { return error }),
    p2.catch(error => { return error }),
  ]).then(values => {
    //console.log(values[0]) // "p1_delayed_resolution"
    //console.error(values[1]) // "Error: p2_immediate_rejection"
    return values
  })
  .then((data)=>{
    console.log(data) //["p1_delayed_resolution", [object Error] { ... }]
  })
  .catch((err)=>{
    console.log(err,'errpr')
  })



// # Promise.allSettled()
// The Promise.allSettled() method returns a promise that resolves after all of the given promises have either 
// fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

// It is typically used when you have multiple asynchronous tasks that are not dependent on one another to
//  complete successfully, or you'd always like to know the result of each promise.

//  In comparison, the Promise returned by Promise.all() may be more appropriate if the tasks are dependent
//   on each other / if you'd like to immediately reject upon any of them rejecting.

let p1 = Promise.resolve('Pooja')
let p2 = Promise.reject('Gopish');
let p3 = new Promise((res, rej)=>{
  setTimeout(res,1000,'faltu')
})

Promise.allSettled([p1,p2,p3])
  .then((data)=>{
    
    data.forEach((item)=>console.log(item,'data'))
    /* 
        [object Object] {
            status: "fulfilled",
            value: "Pooja"
        }
        "data"
        [object Object] {
            reason: "Gopish",
            status: "rejected"
        }
        "data"
        [object Object] {
            status: "fulfilled",
            value: "faltu"
        }
        "data"
    */
})
  .catch((error)=>{
    console.log(error,'error')
})

// or use await to proceed only after fullfilling everyone
const asyncfunc = async () => {
    console.log('in')
    let p1 = Promise.resolve('Pooja')
    let p2 = Promise.reject('Gopish');
    let p3 = new Promise((res, rej)=>{
      setTimeout(res,1000,'faltu')
    })
    
    let all = await Promise.allSettled([p1,p2,p3])
    console.log(all)
  }
  
  asyncfunc()
  


  //Promise.any()

//   Promise.any() takes an iterable of Promise objects. It returns a single promise that resolves as soon as 
//   any of the promises in the iterable fulfills, with the value of the fulfilled promise. If no promises in 
//   the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected 
//   with an AggregateError, a new subclass of Error that groups together individual errors.

const p1 = Promise.reject('goo');
const p2 = new Promise((res,rej)=>{
  setTimeout(res,1000,'quick')
})
const p3 = new Promise((res,rej)=>{
  setTimeout(res,2000,'slow')
})

Promise.any([p1,p2,p3])
  .then((data)=>console.log(data,'data'))// quich data
.catch((error)=>console.log(error,'error'))


//rejection 
const p1 = Promise.reject('goo');
const p2 = new Promise((res,rej)=>{
  setTimeout(rej,1000,'quick')
})
const p3 = new Promise((res,rej)=>{
  setTimeout(rej,2000,'slow')
})

Promise.any([p1,p2,p3])
  .then((data)=>console.log(data,'data'))
.catch((error)=>console.log(error,'error'))//AggregateError: All promises were rejected 'error'

//This method rejects upon receiving an empty iterable, since, truthfully, the iterable contains no items that fulfill.


//# Promise.race(iterable)
// Wait until any of the promises is fulfilled or rejected.

// If the returned promise resolves, it is resolved with the value of the first promise in 
// the iterable that resolved.

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });
  
  Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
  });
  // expected output: "two"
  

//# Promise.reject(reason)
// Returns a new Promise object that is rejected with the given reason.

//# Promise.resolve(value)
// Returns a new Promise object that is resolved with the given value. If the value is a thenable 
// (i.e. has a then method), the returned promise will "follow" that thenable, adopting its eventual state; 
// otherwise, the returned promise will be fulfilled with the value.