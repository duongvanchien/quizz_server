const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  capacity: {
    type: Number,
    required: true,
    default: 20,
  },
  type: {
    type: String,
    require: true,
    enum: ["PUBLIC", "PRIVATE"],
    default: "PUBLIC",
  },
  avatar: {
    type: String,
    require: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("room", RoomSchema);
