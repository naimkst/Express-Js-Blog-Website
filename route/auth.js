const router = require("express").Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");

//Register
router.post("/register", async (req, res) => {
  const password = await bcrypt.hash(req.body.password, 10);
  try {
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: password,
      profilePic: req.body.profilePic,
    });
    console.log(newUser);
    const saveUser = await newUser.save();
    res.status(200).json(saveUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).json("Wrong credentials!");
    } else {
      const checkPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      !checkPassword && res.status(400).json("Wrong credentials!");
      const { password, ...userData } = user._doc;
      res.status(200).json(userData);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
