const express = require("express");
const { createAnswer } = require("../services/answer");
const router = express.Router();

router.post("/create", (req, res) => createAnswer(req, res));

module.exports = router;
