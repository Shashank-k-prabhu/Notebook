const express = require("express");
const router = express.Router();
const user = require("../models/User");
const { body, validationResult } = require("express-validator");

//Create a user using :POST "/api/auth/createuser".
router.post(
  "/",
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
      //Creates a new user  in DB
      User = await user.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      res.json(User);
    } catch (error) {
      //Catches error if any their
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);
module.exports = router;
