import express from "express";
const router = express.Router();
const userController = require("./userController");
 
router.post("/register", userController.registerUser);
router.get("/list", userController.getAllUser);
router.put("/update/:userId", userController.updateUser);
router.delete("/remove/:userId", userController.deleteUser);
router.get("/:userId", userController.getUser);