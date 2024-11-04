const fs = require('fs');
function readFile() {
    let fileData;

    fileData = fs.readFile('NOTES.txt' , function() {
        console.log('File parsing done ! ');
    });
    console.log('An error has occurred.');
    
    console.log(fileData.toString());
    console.log('Hi there !');
};

readFile();