const express = require("express");
const router = express.Router();
const { createQuestion, loadQuestions } = require("../services/question");

router.post("/create", (req, res) => createQuestion(req, res));
router.get("/loadQuestions", (req, res) => loadQuestions(req, res));

module.exports = router;
