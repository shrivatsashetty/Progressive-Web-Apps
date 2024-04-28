allGood = true;
// for sake of simplicity we wet the somethingWrong to opposite of whatever the value of allGood 
somethingWrong = !allGood;

/* here we define a function that uses Promise */
function myCallbackPromise() {
    /* this function returns a promise object which in turn returns a resolve object or a reject object based on some condition */
    return new Promise((resolve, reject) => {
        if (allGood) {
            /* the resolve can take an object as an argument, that will be passed along with the body of the resolve object */
            resolve({
                "name": "All Good",
                "emoji": ":)"
            });
        }
        else if (somethingWrong) {
            // thing to be put along with the body of the reject object
            reject({
                "name": "Something is Wrong",
                "emoji": ":("
            });
        }
    })
}

// calling the above function
myCallbackPromise().then((mssg) => {
    console.log(mssg.name + ", " + mssg.emoji);
}).catch((err) => {
    console.log(err.name + ", " + err.emoji);
})