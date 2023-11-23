const express = require("express");
const router = express.Router();
const user = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken");
const fetchuser = require("../middleware/fetchUser");
require("dotenv").config({ path: "../.env" });
const JWT_SECRET = process.env.JWT_SECRET;



//Route 1 => Create a user using :POST "/api/auth/createuser".
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  //If therir are error send the errors as outpkut
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      //Checks whethever the user email already exists if esists then sends an error as the funcitons are async as it the other await remains as it is
      let User = await user.findOne({ email: req.body.email });
      if (User) {
        return res
          .status(400)
          .json({ error: "User with the same email already exists" });
      }
      //Securing the password and adding salt to it
      const salt = await bcrypt.genSaltSync(10);
      const secPass= await bcrypt.hash(req.body.password,salt);
      //Creates a new user  in DB
      User = await user.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      //JWT token authentication
      const data={
        user:{
          id:User.id
        }
      }
      const authtoken=jwt.sign(data,JWT_SECRET)
      //res.json(User);
      res.json({authtoken});
    } catch (error) {
      //Catches error if any their
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);



//Route 2 =>  Authenticating a user
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password","Password cannot be blank").exists()
  ],
  //If therir are error send the errors as outpkut
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email,password} =req.body;
    try {
      //Checks if the user exists in the databse through email
      let User = await user.findOne({ email });
      if (!User) {
        return res
          .status(400)
          .json({ error: "Please try again with correct Credentials" });
      }
      //Checks for password verfication
      const comparePassword = await bcrypt.compare(password, User.password);
      if (!comparePassword) {
        return res
          .status(400)
          .json({ error: "Please try again with correct Credentials" });
      }
      //JWT token authentication
      const data = {
        user: {
          id: User.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ authtoken });
    } catch (error) {
      //Catches error if any their
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
})



//Route 3 =>  Getting  user details after logging in
router.post(
  "/getuser",
  fetchuser,
  async (req, res) => {
    try {
     const userId=req.user.id;
     const User = await user.findById(userId).select("-password")
     res.send(User) 
    } catch (error) {
      //Catches error if any their
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
})



module.exports = router;
