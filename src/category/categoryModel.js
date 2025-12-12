import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  categoryId: { type: String, require: true },
  name: { type: String, require: true },
  discription: { type: String, require: true },
  status: { type: String, require: true, default: "DRAFT" },
  category: { type: String, require: true },
  bookExist: { type: Number, require: false },
  bookId: { type: String, require: true },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
