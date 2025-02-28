const path = require("path");

const express = require("express");
const session = require("express-session");
const mongoDbStore = require("connect-mongodb-session");

const db = require("./data/database");
const demoRoutes = require("./routes/demo");

const MongoDBStore = mongoDbStore(session);

const app = express();

const sessionStore = new MongoDBStore({
  uri: "mongodb://localhost:27017",
  databaseName: "auth-demo",
  collection: "sessions",
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "super-secret",
    resave: false, // false indicates session is updated only in db
    saveUninitialized: false, // session is really ony stored in db
    store: sessionStore, // where session data is to be stored is specified
    // cookie: {
    //   maxAge: 30 * 24 * 60 * 60 * 1000 // maxage takes in milliseconds - setting expiration for 30 days
    // },
  })
);

//custom middleware to setup data nd exposed to all templates automatically
//order of these middleware fxns matter! we access req.session in this mware, hence it has to be added after the mware whr the session package is initialized for the incoming request
app.use(async function (req, res, next) {
  const user = req.session.user;
  const isAuth = req.session.isAuthenticated;

  if (!user || !isAuth) {
    return next(); //forwards to next route or mware in queue i.e to demoRoutes
  }

  const userDoc = await db.getDb().collection("users").findOne({_id:user.id});
  const isAdmin = userDoc.isAdmin;

  // data of isAuth, isAdmin from all templates is stored here, sets global values in thiss req,res cycle
  res.locals.isAuth = isAuth;
  res.locals.isAdmin = isAdmin;

  next();
});

app.use(demoRoutes);

app.use(function (error, req, res, next) {
  res.render("500");
});

db.connectToDatabase().then(function () {
  app.listen(3000);
});
