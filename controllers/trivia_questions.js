const express = require("express");
const router = express.Router();
const Question = require("../models/trivia_questions")

/////INDEX ROUTE 
router.get("/", (req, res) => {
    Question.find({}, (err, foundQuestions) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(foundQuestions);
    });
  });

  /////CREATE
router.post("/", (req, res) => {
    Question.create(req.body, (error, createdQuestion) => {
      if (error) {
        res.status(400).json({ error: error.message });
      }
      res.status(200).json(createdQuestion); 
    });
  });

  //////DELETE
router.delete("/:id", (req, res) => {
    Question.findByIdAndRemove(req.params.id, (err, deletedQuestion) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(deletedQuestion);
    });
  });


  
  ////UPDATE
router.put("/:id", (req, res) => {
    Question.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, updatedQuestion) => {
        if (err) {
          res.status(400).json({ error: err.message });
        }
        res.status(200).json(updatedQuestion);
      }
    );
  });
  
  module.exports = router;