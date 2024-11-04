const { error } = require('console');
const fs = require('fs/promises');
function readFile() {
    let fileData;

    fs.readFile('NOTES.txt').then (function (fileData) {
    console.log('File parsing done ! ');
    console.log(fileData.toString());
    //return anotherAsyncOperation;
});
    //.then(function (){});
    //.catch( function (error) {
        // console.log(error);
    // })
    //then() of promises takes an anonymous / predefined function which might get some value
    
    console.log('Hi there !');
};

readFile();
//same o/p but advantage is more structured code, you can add more async opns like line 8-9 above.
//errors could occur, we can't use try, catch, callback function here. Instead use error parameter in async
//for errors in promises catch