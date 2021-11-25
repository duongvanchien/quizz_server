const Answer = require("../models/answer");

const loadAnswerByQuestion = async (req, res) => {
  const { question_id } = req.query;
  if (!question_id) {
    return res
      .status(400)
      .json({ success: false, message: "question_id is required" });
  }
  try {
    //https://viblo.asia/p/tim-hieu-ve-populate-trong-mongoogse-GrLZDvpE5k0
    const listAnswer = await Answer.find({
      question: question_id,
    }).populate({
      path: "question",
      populate: {
        path: "topic",
      },
    });

    return res
      .status(200)
      .json({ success: true, message: "success", listAnswer });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

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
  loadAnswerByQuestion,
  createAnswer,
};
