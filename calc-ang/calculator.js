const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html"); //__dirname: grabs hold of the location of current file at any given point of time
});

app.post("/", function (req, res) {
  var firstNumber = Number(req.body.firstNumber);
  var secondNumber = Number(req.body.secondNumber);

  var result = firstNumber + secondNumber;

  res.send(`The result is ${result}`);
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname +"/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  //   var result = weight / Math.pow(height,2);
  var bmi = weight / (height * height);

  res.send(`Your BMI is: ${bmi}`);
});

app.listen(3000, function () {
  console.log("Server is running at port 3000");
});
