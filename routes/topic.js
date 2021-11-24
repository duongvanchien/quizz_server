const express = require("express");
const router = express.Router();
const { createTopic } = require("../services/topic");

router.post("/create", (req, res) => createTopic(req, res));

module.exports = router;
