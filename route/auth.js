const router = require("express").Router();
const User = require("../models/Users");

//Register
router.post("/register", async (req, res) => {
  
  try {
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
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

module.exports = router;
