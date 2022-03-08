var internetAvailable = require("internet-available");

internetAvailable().then(function(){
    console.log("Internet available",internetAvailable);
}).catch(function(){
    console.log("No internet");
});

//If you are looking for an internet connection that have specifif dns adress.
//check out on stack overflow
