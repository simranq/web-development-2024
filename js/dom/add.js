const numbers = [1, 2, 3, 4, 5];

function insertNumber() {
  let input = parseFloat(prompt("Enter a no.: "));
  if (!isNaN(input) && input != 0) {
    if (input % 10 === 0) {
      {
        numbers.push(input);
        console.log("Number " + input + " added to array");
      }
    }
  } else {
    console.log("Invalid i/p");
  }
}

// insertNumber();

function sqrdarray(array) {
  let squaredArray = [];
  for (var i in numbers) {
    squaredArray[i] = array[i] * array[i];
  }
  console.log(squaredArray);
}

// sqrdarray(numbers);

function factorial(n) {
  if (n === 0) return 1;
  return Array.from({ length: n }, (_, i) => i + 1)
  .reduce(
    (acc, val) => acc * val
  );
}

let factorials = factorial(numbers);
console.log("Original array: " + numbers);
console.log("Factorial: " + factorials);
