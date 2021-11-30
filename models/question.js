const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  topic: {
    type: Schema.Types.ObjectId,
    ref: "topic",
  },
  text: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false,
  },
  answers: [
    {
      type: Schema.Types.ObjectId,
      ref: "answer",
    },
  ],
});

module.exports = mongoose.model("question", questionSchema);
