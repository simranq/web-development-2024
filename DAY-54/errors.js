const fs = require('fs');
function readFile() {
    const fileData = fs.readFileSync('data.json');
    console.log('Hi there !');
};
readFile();