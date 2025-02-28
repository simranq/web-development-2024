const fs = require('fs');
function readFile() {
    try {
    const fileData = fs.readFileSync('data.json');
    }catch{
        console.log('An error has occurred.');
    }
    console.log(fileData);
    console.log('Hi there !');
};

readFile();

// Why not to use try catch for the whole program?
// Using try-catch blocks for the entire program can hide specific errors, making debugging difficult. 
// It also adds unnecessary performance overhead and makes your code harder to maintain.
//  It's better to handle errors locally where they occur.
// Also each nd every error has to be handled differently than the other.
// syntax -
// try {
//     somethingThatMightFail();
// } catch (error) {   // accept an "error parameter after catch
//     console.log(error.message);
// }

// function doSomething() {
//     // do smthng
//     throw { message: 'Something went wrong !'};
// }


//VARIABLE SCOPING
// const fs = require('fs');
function readFile() {
    let fileData;
    try {
     fileData = fs.readFileSync('data.json');
    }catch{
        console.log('An error has occurred.');
    }
    console.log(fileData);
    console.log('Hi there !');
};

//shadowing - same name like 
let outerVariable = 'outer';

function example() {
    let outerVariable = 'inner'; // This shadows the outerVariable
    console.log(outerVariable); // Outputs: 'inner'
}

example();
console.log(outerVariable); // Outputs: 'outer'
