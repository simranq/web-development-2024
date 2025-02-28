const express = require("express");
const bcrypt = require("bcryptjs");

const db = require("../data/database");
const session = require("express-session");

const router = express.Router();

router.get("/", function (req, res) {
  res.render("welcome");
});

router.get("/signup", function (req, res) {
  let sessionInputData = req.session.inputData;

  if (!sessionInputData) {
    sessionInputData = {
      hasError: false,
      email: "",
      confirmEmail: "",
      password: "",
    };
  }
  req.session.inputData = null; // flashing technique-just to flash value onto the session
  // for next request after a redirect and then cleared again
  res.render("signup", { inputData: sessionInputData });
});

router.get("/login", function (req, res) {
  let sessionInputData = req.session.inputData;

  if (!sessionInputData) {
    sessionInputData = {
      hasError: false,
      email: "",
      password: "",
    };
  }
  req.session.inputData = null;
  res.render("login", { inputData: sessionInputData });
});

router.post("/signup", async function (req, res) {
  const userData = req.body;
  const enteredEmail = userData.email; //userData['email'] also allowed
  const enteredConfirmEmail = userData["confirm-email"]; //since '-' char is present
  const enteredPassword = userData.password;

  if (
    !enteredEmail ||
    !enteredConfirmEmail ||
    !enteredPassword ||
    enteredPassword.trim().length < 6 ||
    enteredEmail !== enteredConfirmEmail ||
    !enteredEmail.includes("@")
  ) {
    req.session.inputData = {
      hasError: true,
      message: "Invalid input - please check your data.",
      email: enteredConfirmEmail,
      password: enteredPassword,
    };

    req.session.save(function () {
      res.redirect("/signup");
    });
    return;
    // return res.render("/signup");
  }

  const existingUser = await db
    .getDb()
    .collection("users")
    .findOne({ email: enteredEmail });

  if (existingUser) {
    req.session.inputData = {
      hasError: true,
      message: "User already exists!",
      email: enteredConfirmEmail,
      password: enteredPassword,
    };

    req.session.save(function () {
      res.redirect("/signup");
    });

    return;

    // console.log(
    //   "User already exists!! Please try again with a new email or try creating one with a different email"
    // );
  }

  const hashedPassword = await bcrypt.hash(enteredPassword, 12);

  const user = {
    email: enteredEmail,
    password: hashedPassword,
  };

  await db.getDb().collection("users").insertOne(user);
  res.redirect("/login");
});

router.post("/login", async function (req, res) {
  const userData = req.body;
  const enteredEmail = userData.email;
  const enteredPassword = userData.password;

  const existingUser = await db
    .getDb()
    .collection("users")
    .findOne({ email: enteredEmail });

  if (!existingUser) {
    req.session.inputData = {
      hasError: true,
      message: "Could not log you in - please check your credentials!",
      email: enteredEmail,
      password: enteredPassword,
    };
    req.save(function () {
      res.render("login");
    });
    return;
  }

  const passwordsAreEqual = await bcrypt.compare(
    enteredPassword,
    existingUser.password
  );

  if (!passwordsAreEqual) {
    req.session.inputData = {
      hasError: true,
      message: "Could not log you in - please check your credentials!",
      email: enteredEmail,
      password: enteredPassword,
    };
    return res.redirect("/login");
  }

  // console.log("User is authenticated successfully ! ");
  // session is defined in 'app.js'

  req.session.user = {
    id: existingUser._id,
    email: existingUser.email,
    // isAdmin: existingUser.isAdmin,
  }; // userdata in 'sessions' collection are authenticated

  req.session.isAuthenticated = true;
  req.session.save(function () {
    // res.redirect("/admin"); // since db opns are async opns
    res.redirect("/profile");
  });
});

router.get("/admin", async function (req, res) {
  // Check the user "ticket"

  if (!res.locals.isAuth) {
    // if (!req.session.user)
    return res.status(401).render("401");
  }

  if (!res.locals.isAdmin) {
    return res.status(403).render("403");
  }

  res.render("admin");
});

router.get("/profile", function (req, res) {
  // Check the user "ticket"

  if (!res.locals.isAuth) {
    // if (!req.session.user)
    return res.status(401).render("401");
  }
  res.render("profile");
});

router.post("/logout", function (req, res) {
  req.session.user = null;
  req.session.isAuthenticated = false;
  res.redirect("/");
});

module.exports = router;
