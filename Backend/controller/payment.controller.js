import Razorpay from "razorpay";
import crypto from "crypto";
import dotenv from "dotenv";
import PurchasedBook from "../Model/purchasedBook.model.js";

dotenv.config();

// Debug: Log the keys to verify they're loaded (remove in production)
console.log("Razorpay Key ID exists:", !!process.env.RAZORPAY_KEY_ID);

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

export const createOrder = async (req, res) => {
    try {
        const { amount, userId, bookId } = req.body;

        if (amount <= 0) {
            await PurchasedBook.create({ userId, bookId, paymentId: "FREE" });
            return res.json({ success: true, free: true });
        }

        const options = {
            amount: amount * 100,
            currency: "INR",
            receipt: `receipt_${Date.now()}`
        };
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (err) {
        console.error("Create order error:", err); // helpful debug
        res.status(500).json({ error: err.message });
    }
};



export const verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId, bookId } = req.body;

        const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
        hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
        const digest = hmac.digest("hex");

        if (digest !== razorpay_signature) {
            return res.status(400).json({ success: false, message: "Payment verification failed" });
        }

        await PurchasedBook.create({ userId, bookId, paymentId: razorpay_payment_id });
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getPurchasedBooks = async (req, res) => {
    try {
        const books = await PurchasedBook.find({ userId: req.params.userId }).populate("bookId");
        res.json(books.map(b => b.bookId));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const removePurchasedBook = async (req, res) => {
  try {
    const { userId, bookId } = req.params;
    await PurchasedBook.findOneAndDelete({ userId, bookId });
    res.json({ success: true, message: "Book removed from your library" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
