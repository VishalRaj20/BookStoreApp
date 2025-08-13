import mongoose from "mongoose";

const PurchasedBookSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
    paymentId: String,
    date: { type: Date, default: Date.now }
});

const PurchasedBook = mongoose.model("PurchasedBook", PurchasedBookSchema);

export default PurchasedBook;
