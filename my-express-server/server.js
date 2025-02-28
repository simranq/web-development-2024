const express = require("express");

const app = express();

app.get("/", function (request, response) {
  //   console.log(response); //callback fxn
  //   console.log(request);
  response.send("<h1>Simran </h1>");
});

app.get("/simran", function (req, res) {
  res.send("Queen bee");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at : qsimran08@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("My name is <b>Simran Qureshi</b> and I love life");
});

app.listen(3000, function () {
  console.log("Server started at port 3000");
});
