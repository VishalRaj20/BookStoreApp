import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name:String,
    price:String,
    category:String,
    image:String,
    title:String,
    content:{
        type:String,
        // default:"https://kvongcmehsanalibrary.wordpress.com/wp-content/uploads/2021/07/harrypotter.pdf"
    }
});
const Book = mongoose.model("Book", bookSchema);

export default Book;