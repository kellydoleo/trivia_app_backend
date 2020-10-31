const { Schema, model } = require("mongoose");

//Question SCHEMA
const questionSchema = new Schema(
  {
    question: { type: String },
    options: [{ type: String}],
    correct: { type: Number}
  },
  { timestamps: true }
);

//Question MODEL
const Question = model("question", questionSchema);

//EXPORT MODEL
module.exports = Question;
