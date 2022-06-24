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
router.delete('/user/:id', async (req, res) => {
  console.log(req.body.userId, req.params.id);
  if(req.body.userId == req.params.id){
    try {
      const deleteUser = await User.findByIdAndDelete(req.params.id);
      res.status(200).json(deleteUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }else{
    res.status(400).json("Oppss something is wrong!");
  }
});

//Get User By ID
router.get('/user/:id', async (req, res) => {
  try {
    const getUser = await User.findById(req.params.id);
    const { password, ...withoutPassword } = getUser._doc;
    res.status(200).json(withoutPassword);
  } catch (error) {
    res.status(400).json(error);
  }
});


module.exports = router;
