const express = require("express");
const router = express.Router();
const user = require('../models/User');
const { body, validationResult } = require("express-validator");


//Create a user using :POST "/api/auth/".Doesn't require Auth.
router.post(
  "/",
  [
    body("name","Enter a valid name").isLength({ min: 3 }),
    body("email","Enter a valid email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    user.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
    .then((user) => res.json(user))
    .catch((err)=>console.log(err))
    res.json({
      error:"Please enter a unique email address"
    })
   
  }
);
module.exports = router;