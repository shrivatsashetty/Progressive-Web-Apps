/* a simple javascript program to show the working of promises */

// create a new promise object
/* the Promise object takes a function(name or lambda) as a mandatory argument, 
   the function in turn takes a resolve object and a reject object as it's arguments  */
let p = new Promise((resolve, reject) => {
    let num = 1+2;
    if (num == 2){
        // the resolve object takes an argument which will be passes in it's body
        resolve("Success");
    }
    else{
        reject("Failure");
    }
});

// promises must always be handled with the help of a try-catch block
p.then((mssg) => {
    console.log(mssg);
}).catch((err) => { 
    console.log(err)
});