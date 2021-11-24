const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: "Missing username and/or password" });
  try {
    const user = await User.findOne({ username });
    if (user)
      return res
        .status(400)
        .json({ success: false, message: "Account already exist" });

    const hashPassword = await argon2.hash(password);
    const newUser = new User({
      username,
      password: hashPassword,
    });
    await newUser.save();

    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    return res
      .status(200)
      .json({ success: true, message: "success", accessToken });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: "Username and password are required" });

  try {
    const user = await User.findOne({ username });
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect username" });

    const checkPassword = await argon2.verify(user.password, password);
    if (!checkPassword)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect password" });
    const accessToken = await jwt.sign(
      { userId: user.id },
      process.env.ACCESS_TOKEN_SECRET
    );
    return res
      .status(200)
      .json({ success: true, message: "success", user, accessToken });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
