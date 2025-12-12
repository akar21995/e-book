import express from "express";
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const userRoute = require("./src/user/userRoute");
const authenticateUser = require("./common/jwtToken");

app.use(express.json());

// Define your allowed origins
const allowedOrigins = ['http://localhost:3000'];

const corsOptions = {
  origin: function (origin, callback) {
    // Check if the origin is in the allowed list or if it's a same-origin request (origin is undefined for same-origin)
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200 // some legacy browsers choke on 204
};


app.use(cors(corsOptions));

connectDB();

app.use("/api/user", authenticateUser, userRoute);

app.listen(() => {
    console.log(`listing on port: ${PORT}`);
});