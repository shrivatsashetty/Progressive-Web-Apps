/* a simple javasript program to demonstrate the methods of Promise object */

// here we create a Promise object which will resolve the Promise
const pr1 = new Promise((resolve, reject) => {
    resolve("Promise 1 resolved");
})

// here we create a Promise object which will resolve the Promise
const pr2 = new Promise((resolve, reject) => {
    resolve("Promise 2 resolved");
})

// at last we create a promise object which gets rejected 
const pr3 = new Promise((resolve, reject) => {
    reject("Promise 3 rejected");
})

// here lets see a demo of different methods of promises

/* 
out of the array of promises being passed to the Promise.all() method
if even a single promise returns a reject object, then the method itself will return the reject object
in this case the control will go to the catch part or else if all the promises in the array are resolved,
the method Promises.all() returns a reslove object, i.e. the control goes to the then() part 
*/
Promise.all([pr1, pr2, pr3]).then((promises) => {
    console.log(promises);
}).catch((err) => {
        console.log(err);
    }
); // Promise 3 rejected

/** the Promise.allSetteled method returns the status of all the promise objects taken as input
 *  irrespective of wether the promise was resolved or rejected
 */
Promise.allSettled([pr1, pr2, pr3]).then((promises) => {
    console.log(promises);
}).catch((err) => {
        console.log(err);
    }
);

/* this method returns a single promise object  */ 
Promise.race([pr1, pr2, pr3]).then((promise) => {
    console.log(promise);
}).catch((err) => {
        console.log(err);
    }
);