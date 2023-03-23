import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: false,
    },
    completed: {
        type: Boolean,
     }

});

export default mongoose.models.Book || mongoose.model("Book", bookSchema);