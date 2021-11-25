const Topic = require("../models/topic");

const createTopic = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Name is required" });
  }

  try {
    const newTopic = new Topic({ name });
    await newTopic.save();
    return res
      .status(200)
      .json({ success: true, message: "success", newTopic });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createTopic,
};
