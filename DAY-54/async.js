const fs = require('fs');
function readFile() {
    let fileData;

    fileData = fs.readFileSync('NOTES.txt').toString();
 
    console.log('An error has occurred.');
    
    console.log(fileData);
    console.log('Hi there !');
};

readFile();