import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userId: { type: String, require: true },
    name: { type: String, require: true },
    email: { type: String, require: true },
    phone_number: { type: String, require: false },
    readingList: { type: Array[{
        bookId: { type: String, require: true },
        comment: { type: String, require: false },
        rating: { type: Number, require: false, max: [10] }
    }], require: true },
    library: {
        type: Array[{
            bookId: { type: String, require: true },
            status: { type: String, require: true, default: "DRAFT" },
        }]
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;