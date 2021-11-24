const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  question: {
    type: Schema.Types.ObjectId,
    ref: "question",
  },
  text: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false,
  },
  is_correct: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("answer", answerSchema);
