import express from "express";
const router = express.Router();
const bookController = require("./bookController");
 
router.post("/register", bookController.registerBook);
router.get("/list", bookController.getAllBook);
router.put("/update/:bookId", bookController.updateBook);
router.delete("/remove/:bookId", bookController.deleteBook);
router.get("/:bookId", bookController.getBook);