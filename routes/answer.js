const express = require("express");
const { createAnswer, loadAnswerByQuestion } = require("../services/answer");
const router = express.Router();

router.get(`/`, (req, res) => loadAnswerByQuestion(req, res));
router.post("/create", (req, res) => createAnswer(req, res));

module.exports = router;
