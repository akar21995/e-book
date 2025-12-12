import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  bookId: { type: String, require: true },
  name: { type: String, require: true },
  discription: { type: String, require: true },
  status: { type: String, require: true, default: "DRAFT" },
  comment: { type: String, require: false },
  rating: { type: Number, require: false, max: [10] },
  categoryId: { type: String, require: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
