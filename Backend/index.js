import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import bookRoute from "./route/book.route.js"
import cors from "cors"

import userRoute from "./route/User.route.js"
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000
const URI = process.env.MongoDBURI

//connect to mongDB
try{
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("connected to mongoDB");
} catch(error){
    console.log("Error: ", error);
}

// defining routes
app.use("/books", bookRoute)
app.use("/user", userRoute)
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})