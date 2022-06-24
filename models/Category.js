const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    thumbnail: {
      type: String,
      require: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
