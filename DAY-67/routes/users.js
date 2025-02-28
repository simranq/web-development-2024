const express = require("express");
const multer = require("multer");


const db = require("../data/database");

//read below 
const storageConfig = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "images"); // expects 2 values here
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storageConfig });

const router = express.Router();

router.get("/", async function (req, res) {
  const users = await db.getDb().collection('users').find().toArray();
  res.render("profiles" , {users : users});
});

router.get("/new-user", function (req, res) {
  res.render("new-user");
});

router.post("/profiles", upload.single("image"), async function (req, res) {
  const uploadedImageFile = req.file;
  const userData = req.body;

  // console.log(uploadedImageFile);
  // console.log(userData);

  await db.getDb().collection("users").insertOne({
    name: userData.username,
    imagePath: uploadedImageFile.path,
  });

  res.redirect("/");
});

module.exports = router;