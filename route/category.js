const router = require("express").Router();
const Category = require("../models/Category");
const bcrypt = require("bcrypt");

//Create Category
router.post("/category", async (req, res) => {
  try {
    const postSave = await new Category(req.body).save();
    res.status(200).json(postSave);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Post Update
router.put('/category/:id', async (req, res) => {
  try {
    const categoryUpdate = await Category.findByIdAndUpdate(req.params.id, req.body,  { new: true});
    res.status(200).json(categoryUpdate);
  } catch (error) {
    res.status(400).json(error);
  }
});

//Delete
router.delete('/category/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteCategory);
  } catch (error) {
    res.status(400).json(error);
  }
});

//Get User By ID

module.exports = router;
