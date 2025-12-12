import mongoose from "mongoose";

const mongoUri = process.env.MONGO_URL || "";

const connectDB = async() => {
    try {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("mongodb connected!");
    } catch(err) {
        throw new Error("Database connection faild!");
    }
}

module.exports = connectDB;