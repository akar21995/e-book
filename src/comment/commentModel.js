import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  commentId: { type: String, require: true },
    bookId: { type: String, require: true },
    categoryId: { type: String, require: true },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
