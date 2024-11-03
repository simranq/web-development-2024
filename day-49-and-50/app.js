const express = require("express");
const path = require("path");

const defaultRoutes = require('./routes/default'); //refactored
const restRoutes = require('./routes/restaurants'); //refactored

const app = express();

//CONFIGURES SETTINGS FOR EXPRESS APPLICATIONS

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Register a special middleware as css files & js files are static. To return these (css & js)

app.use(express.static("public")); // has obj like properties
app.use(express.urlencoded({ extended: false }));

app.use('/', defaultRoutes);    // for all incoming requests
app.use('/', restRoutes);       // SENDING HTML FILES AS RESPONSES (as dynamic)

                                          //we are gonna create a custom middleware here and not add next to the other middleware
                                          //right before we listen at the bottom..why at the bottom??-> because requests are basically funnelled through
                                          // (up-to-down) all these functions and all these routes
                                          //So, if a new request reaches our server then first it funnels through these middlewares and then it checks all the
                                          // routes and which one should handle it!
                                          //404 error handling below

app.use(function(req, res){
  res.status(404).render('404'); 
});

                                          //middleware that'll be exec if any error occurs
                                          //function() here is different with 4 parameters(error, req, res, next) as it signals to express that this is 
                                          // that special default error handler middleware fxn
                                          // next is applicable for all mwares but it is a lil adv concept, next()..

app.use(function(error, req, res, next){
  res.status(500).render('500');   //refer 404 error handling

});

app.listen(3000);