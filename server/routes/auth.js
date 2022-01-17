const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");
const env = require("dotenv/config");
const User = require("../models/User");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const JWT_SECRET = "secretkeyforsession";

//defining the local storage location so that the files received from the client will be saved in the defined location.
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, "img" + "_" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

// AUTH ROUTES :
// Route1: signup
router.post("/signup", upload.single("img"), async (req, res) => {
  let success = false;
  try {
    //check whteher user with this email exists
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send({
        success,
        error: "Please give unique email value,  as email already registered",
      });
    }

    //hash password
    var salt = await bcrypt.genSalt(10);
    var secPass = await bcrypt.hash(req.body.password, salt);

    //if no user exists, then create new user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
      role: req.body.role,
      classsp: req.body.classsp,
      work: req.body.work,
      company: req.body.company,
      experience: req.body.experience,
      img: {
        data: fs.readFileSync(
          path.join(__dirname, `../uploads/${req.file.filename}`)
        ),
        contentType: "image/png",
      },
      subject: req.body.subject,
    });
    console.log(req.file);
    console.log(req.file.filename);
    const data = {
      session: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authToken, user });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      success,
      error: error.message,
    });
  }
});

//Route2: login: authenticate
router.post(
  "/login",
  body("email", "Enter a valid email").isEmail(),
  async (req, res) => {
    let success = false;
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      //check whether user with this email exists
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send({
          success,
          error: "Please try to login with correct credentials",
        });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).send({
          success,
          error: "Please try to login with correct credentials",
        });
      }
      const data = {
        session: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      console.log("login success");
      success = true;
      res.json({ success, authToken, user });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Oops internal server error occured");
    }
  }
);

// ROUTE3: Get logged in user details: login required
router.get("/getUser", fetchUser, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Oops internal server error occured");
  }
});

router.get("/getAllusers", fetchUser, async (req, res) => {
  try {
    const data = await User.find({ role: "mentor" });
    res.send(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Oops internal server error occured");
  }
});

module.exports = router;
