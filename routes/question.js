const express = require("express");
const router = express.Router();
const { createQuestion } = require("../services/question");

router.post("/create", (req, res) => createQuestion(req, res));

module.exports = router;
