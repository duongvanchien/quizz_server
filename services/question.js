const Question = require("../models/question");
const _ = require("lodash");

const loadQuestions = async (req, res) => {
  const { limit } = req.query;
  try {
    const questions = await Question.find()
      .populate("answers", ["_id", "text"])
      .populate("topic");
    return res.status(200).json({
      success: true,
      message: "success",
      questions: _.sampleSize(questions, limit),
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

const createQuestion = async (req, res) => {
  const { topic, text, url, answers } = req.body;
  if (!topic) {
    return res
      .status(400)
      .json({ success: false, message: "Topic is required" });
  }

  if (!text) {
    return res
      .status(400)
      .json({ success: false, message: "Text is required" });
  }

  try {
    const newQuestion = new Question({
      topic,
      text,
      url,
      answers,
    });
    await newQuestion.save();
    res.status(200).json({ success: true, message: "success", newQuestion });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createQuestion,
  loadQuestions,
};
