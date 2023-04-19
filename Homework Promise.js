// Write a function that accepts two promises as arguments and returns a new promise
// that resolves with the sum of their values. For example, if you call the function with
// promises that resolve to 3 and 5, respectively, the new promise should resolve to 8.

function sum(promise1, promise2) {
  return Promise.all([promise1, promise2]).then((results) => {
    let sum = results.reduce((acc, val) => acc + val, 0);
    return Promise.resolve(sum);
  });
}

const promise1 = Promise.resolve(3);
const promise2 = Promise.resolve(5);

sum(promise1, promise2).then((sum) => console.log(sum));

// Implement a function that accepts an array of promises and returns a new promise that
// resolves with an array of their resolved values. For example, if you call the function
// with an array containing promises that resolve to 3, 5, and 7, respectively, the new promise
// should resolve to an array containing the values 3, 5, and 7.


//1 

function resolveAll(promises) {
    return new Promise((resolve, reject) => {
      const results = [];
  
      promises.forEach(promise => {
        promise.then(value => {
          results.push(value);
  
          if (results.length === promises.length) {
            resolve(results);
          }
        }).catch(reject);
      });
    });
  }

const promises0 = [Promise.resolve (5), Promise.resolve (10), Promise. resolve (3)]

resolveAll (promises0)
.then (result => console.log (result))


//2

function resolveAll (promises) {
    return Promise.all (promises)
}
const promises = [Promise.resolve (3), Promise.resolve (5), Promise.resolve (7)]

resolveAll (promises) 
.then (result => 
    console.log (result)
)



// Write a function that accepts a number and returns a promise that resolves after that
// number of seconds has elapsed. For example, if you call the function with 5, the promise
// should resolve after 5 seconds.

function delay(seconds) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, seconds * 1000);
    });
  }

  delay(5).then(() => {
    console.log(5);
  });


