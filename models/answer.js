const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false,
  },
  is_correct: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("answer", answerSchema);
