const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true, },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  rating: { type: Number, required: true },
  // size: "S" | "M" | "L",
  // color: "red" | "green" | "black",
  details: Object,
  image: {type: String, required: true},
  images: {type: [String], required: true},
} , {timestamps: true});


exports.Product = new mongoose.model("Product", productSchema);

const cartSchema = new Schema({
  items: { type: [productSchema], required: true, },
  userId: {type: Number, default: 1 }
} , {timestamps: true});

exports.Cart = new mongoose.model("Cart", cartSchema)