const Room = require("../models/room");

const createRoom = async (req, res) => {
  const { name, capacity, type } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Name is required" });
  }

  try {
    const newRoom = new Room({ name, capacity, type });
    await newRoom.save();
    return res.status(200).json({ success: true, message: "success", newRoom });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const loadPublicRooms = async (req, res) => {
  try {
    const publicRooms = await Room.find({ type: "PUBLIC" });
    return res
      .status(200)
      .json({ success: true, message: "success", publicRooms });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createRoom,
  loadPublicRooms,
};
