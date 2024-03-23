let prm = new Promise((resolve, reject) =>{
    let a=1+1;
    if(a==2){
        resolve("Sucess") // on some condtn throws success obj i.e. reolve()
    }else{
        reject("Failure") // on some other condtn throws failure obj i.e. reject()
    }
})

prm.then((mssg) => {
    console.log(mssg + "!!!");
} ).catch((mssg) => {
    console.log(mssg + "!!!")
})