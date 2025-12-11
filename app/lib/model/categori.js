import mongoose from "mongoose";

const categoriModel = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
}, { 
  timestamps: true,
  collection: "categories" 
});

export const categoryis = mongoose.models.categories || mongoose.model("categories", categoriModel, "categories");