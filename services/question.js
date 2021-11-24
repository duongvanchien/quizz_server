const Question = require("../models/question");

const createQuestion = async (req, res) => {
  const { topic, text, url } = req.body;
  if (!topic) {
    return json
      .status(400)
      .json({ success: false, message: "Topic is required" });
  }

  if (!text) {
    return json
      .status(400)
      .json({ success: false, message: "Text is required" });
  }

  try {
    const newQuestion = new Question({
      topic,
      text,
      url,
    });
    await newQuestion.save();
    res.status(200).json({ success: true, message: "success", newQuestion });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createQuestion,
};
