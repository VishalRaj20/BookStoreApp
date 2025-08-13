import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import cors from "cors";
import userRoute from "./route/User.route.js";
import paymentRoutes from "./route/payment.route.js";

dotenv.config(); // Load environment variables early

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
console.log(URI);

if (!URI) {
    console.error("MongoDB URI is missing in environment variables.");
    process.exit(1); // Stop execution if no URI
}

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit if unable to connect
});

// Define routes
app.get("/",(req,res)=>{
    res.send("Hello");
})
app.use("/books", bookRoute);
app.use("/user", userRoute);
app.use("/payment", paymentRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
