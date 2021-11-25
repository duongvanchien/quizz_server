const Answer = require("../models/answer");

const createAnswer = async (req, res) => {
  const { question, text, url, is_correct } = req.body;
  if (!question) {
    return res
      .status(400)
      .json({ success: false, message: "Question is required" });
  }

  try {
    const newAnswer = new Answer({
      question,
      text,
      url,
      is_correct,
    });
    await newAnswer.save();
    return res
      .status(200)
      .json({ success: true, message: "success", newAnswer });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createAnswer,
};
