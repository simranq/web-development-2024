const path = require('path');
const express = require('express');
//imported path, express

const db = require('./data/database');
const discussionRoutes = require('./routes/discussion');
//imported db from root folder, route

const app = express();

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));
// folder with ejs files has been set

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
// static html, css files are set

app.use(discussionRoutes);
// routes decln

app.use(function(error, req, res, next) {
  console.log(error);
  res.render('500');
})

db.connectToDatabase().then(function () {
  app.listen(3000);
});
