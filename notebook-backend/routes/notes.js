const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchUser");
const Note = require("../models/Note");


//Route 1 => Get all the stored Notes :GET "/api/notes/fetchnotes".
router.get("/fetchnotes",fetchuser , async (req, res) => {
  try {
     const notes = await Notes.find({ user: req.user.id });
     res.json(notes);
    
  } catch (error) {
    //Catches error if any their
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
 
});


//Route 2 => Add New note using :POST "/api/notes/addnote".Login Required
router.post("/addnote", fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description","Description must be atleast 5 charcters").isLength({ min: 5 }),
  ],
   async (req, res) => {
    try {
          const { title, description, tag } = req.body;
          const errors = validationResult(req);
          //If their are error in input return errors 
          if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
          //Create a new object and store the note and save it and return the same response
          const note = new Note({
            title,
            description,
            tag,
            user: req.user.id,
          });
          const savedNote = await note.save();
          res.json(savedNote);
      
    } catch (error) {
      //Catches error if any their
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }

});


module.exports = router;