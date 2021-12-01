const express = require("express");
const { createAnswer, loadAnswerByQuestion, getAnswers } = require("../services/answer");
const router = express.Router();

router.get(`/`, (req, res) => loadAnswerByQuestion(req, res));
router.post("/create", (req, res) => createAnswer(req, res));
router.post("/getAnswers", (req, res) => getAnswers(req, res));

module.exports = router;
