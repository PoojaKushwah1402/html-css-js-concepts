"use strict";
let promiseCount = 0;

function testPromise() {
  let thisPromiseCount = ++promiseCount;
  let log = document.getElementById('log');
  // begin
  log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Started<br>');

  let p1 = new Promise((resolve, reject) => {

    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise constructor<br>');

    window.setTimeout(function() {

        resolve(thisPromiseCount);
    }, Math.random() * 2000 + 1000);
  });


  
  p1.then(function(val) {

    log.insertAdjacentHTML('beforeend', val + ') Promise fulfilled<br>');
  }).catch((reason) => {

    console.log(`Handle rejected promise (${reason}) here.`);
  });

  log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise made<br>');
}

if ("Promise" in window) {
  let btn = document.getElementById("make-promise");
  btn.addEventListener("click",testPromise);
} else {
  log = document.getElementById('log');
  log.textContent = "Live example not available as your browser doesn't support the <code>Promise<code> interface.";
}