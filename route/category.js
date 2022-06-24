const router = require("express").Router();
const Post = require("../models/Posts");
const bcrypt = require("bcrypt");

//Create Category
router.post("/post", async (req, res) => {
  console.log(req.body);
  // const newPost = await new Post(req.body);
  try {
    const postSave = await new Post(req.body).save();
    res.status(200).json(postSave);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Post Update


//Delete

//Get User By ID

module.exports = router;
