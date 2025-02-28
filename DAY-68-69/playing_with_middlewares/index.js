const fs = require("fs");
const path = require("path");

const bodyParser = require('body-parser');

const express = require("express");
const app = express();

//middleware 1

app.use ((req, res, next) => {
    // res.send('Hacked by Middleware 1');
    next();
    
    });
    
    //middleware 2
    
app.use ((req, res, next) => {
    res.send('Hacked by Middleware 2');
    next();
});

app.get('/', (req,res) => {
    console.log('Hello World')
})

app.get('/about', (req,res) => {
    console.log('about us')
})


app.get('/contact', (req,res) => {
    console.log('Hello contact')
})

app.listen(3000);
