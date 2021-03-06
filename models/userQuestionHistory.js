const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userQuestionHistorySchema = new Schema({
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
  score: {
    type: Number,
    require: true,
    default: 0,
  },
});

module.exports = mongoose.model("userQuestionHistory", userQuestionHistorySchema);
