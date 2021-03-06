const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userRoomSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: "room",
  },
  score: {
    type: Number,
    require: true,
    default: 0,
  },
});

module.exports = mongoose.model("userRoom", userRoomSchema);
