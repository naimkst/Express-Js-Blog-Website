const router = require("express").Router();
const Post = require("../models/Posts");
const bcrypt = require("bcrypt");

//Create Post
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
router.put("/post/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatePost);
  } catch (error) {
    res.status(400).json(error);
  }
});

//Delete
router.delete("/post/:id", async (req, res) => {
  try {
    const deletePost = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json(deletePost);
  } catch (error) {
    res.status(400).json(error);
  }
});

//Get User By ID
router.get("/post/:id", async (req, res) => {
  try {
    const getPost = await Post.findById(req.params.id);
    res.status(200).json(getPost);
  } catch (error) {
    res.status(400).json(error);
  }
});

//Get all Post
router.get("/posts", async (req, res) => {
  const cat = req.query.cat;
  try {
    let posts;
    if (cat) {
      posts = await Post.find({
        categories: {
          $in: [cat],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(200).json(error);
  }
});

module.exports = router;
