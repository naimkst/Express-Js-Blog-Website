const router = require("express").Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");

//Update
router.put("/user/:id", async (req, res) => {
  console.log(req.body);
  if (req.body.userId == req.params.id) {
    if (req.body.password) {
      const hasPassword = await bcrypt.hash(req.body.password, 10);
    }
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("You can update only your account!");
  }
});

//Delete

module.exports = router;
