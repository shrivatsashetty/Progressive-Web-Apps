const loveFailure = false;
const businessFailure = true;

// a callback is nothing but a function
function myCallbackFunc(callback, errorCallback){
    if(loveFailure){
        errorCallback({
            "name": "Love Failure",
            "cause": "Girlfriend Left"
        });
    }
    else if(businessFailure){
        errorCallback({
            "name": "Business Failure",
            "cause": "Business in loss"
        });
    }
    else{
        callback("No failures, only sucess!!");
    }
}


myCallbackFunc((mssg) => {
    console.log("Sucesss!!!");
    }, 
    (error) => {
        console.log(error.name + ", "  + error.cause); // log the name of the function to console
    }
)