import express from "express";
import { createOrder, verifyPayment, getPurchasedBooks, removePurchasedBook } from "../controller/payment.controller.js";
const router = express.Router();

router.post("/order", createOrder);
router.post("/verify", verifyPayment);
router.get("/my-books/:userId", getPurchasedBooks);
router.delete("/my-books/:userId/:bookId", removePurchasedBook);


export default router;
