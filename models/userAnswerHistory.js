const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userAnswerHistorySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: "room",
  },
  question: {
    type: Schema.Types.ObjectId,
    ref: "question",
  },
  answer: {
    type: Schema.Types.ObjectId,
    ref: "answer",
  },
});

module.exports = mongoose.model("userAnswerHistory", userAnswerHistorySchema);
