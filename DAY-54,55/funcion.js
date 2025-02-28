// function greetUser(name, age) {
//     console.log('Hi there!! ' + name + "\nMy age is: " + age);
// }
// greetUser('Simran', 19);
// greetUser();

// function sumUp(numbers) {
//     let result = 0;
//     for (const number of numbers){
//         result += number;
//     }
//     return result;
// }

// console.log(sumUp([1,3,4,44,55,2,3]));

// Now using rest args ...
function sumUp(...numbers) {
    let result = 0;
    for (const number of numbers){
        result += number;
    }
    return result;
}
inputNumbers = [1,3,4,44,55,2,3];
console.log(sumUp(...inputNumbers));
console.log(sumUp);
// sumUp.someProperty = 
// fxns are objects behind the scenes.
// TEMPLATE LITERALS
function greetUser(greetingPrefix, userName = 'Simran') {
    console.log(greetingPrefix + "! " + userName);
    console.log(`${greetingPrefix}! ${userName}`);          //using backticks(``) like f-sring in python

}
greetUser('Hey');