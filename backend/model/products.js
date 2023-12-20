const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
  },

  category: {
    type: String,
  },

  images: {
    type: Array,
  },

  quantity: {
    type: Number,
    min: 1,
    default: 0,
  },

  description: {
    type: String,
  },

  brand: {
    type: String,
  },

  price: {
    type: Number,
    min: 1,
  },

  details: {
    type: Array,
  },
});

const pro = mongoose.model("products", productSchema);

module.exports = { pro };
