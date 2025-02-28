const path = require("path");

const express = require("express");
const session = require("express-session");

const sessionConfig = require("./config/session");
const db = require("./data/database");

const Post = require('.//model/post')
const authMiddleWare = require("./middleware/auth-middleware");
const authRoutes = require("./routes/auth");
const blogRoutes = require("./routes/blog");

const mongoDBSessionStore = sessionConfig.createSessionStore(session);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(session(sessionConfig.createSessionConfig(mongoDBSessionStore)));

// app.use(csrf());

app.use(authMiddleWare);

app.use(blogRoutes);
app.use(authRoutes);

// app.use(function(error, req, res, next) {
//   res.render('500');
// })

db.connectToDatabase().then(function () {
  app.listen(3000);
});
