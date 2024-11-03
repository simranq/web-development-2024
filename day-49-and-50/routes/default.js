const express = require('express');
const router = express.Router();   //Router is JS object that works a bit like app but is different internally

router.get("/", function (req, res) {
    res.render("index"); 
  });

router.get("/about", function (req, res) {
    res.render("about");
  });
  
module.exports = router;