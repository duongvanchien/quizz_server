const express = require("express");
const { createRoom, loadPublicRooms } = require("../services/room");
const router = express.Router();

router.get("/loadPublicRooms", (req, res) => loadPublicRooms(req, res));
router.post("/create", (req, res) => createRoom(req, res));

module.exports = router;
