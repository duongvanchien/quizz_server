const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    require: false,
  },
});

module.exports = mongoose.model("topic", topicSchema);
