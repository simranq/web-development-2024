const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {

    //   console.log(req.body.crypto);

    axios.get("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD");
    console.log(res);
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

// https://apiv2.bitcoinaverage.com/#price-symbols-historical
