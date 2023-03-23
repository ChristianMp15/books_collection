import mongoose from "mongoose";

export const connectToDabase = async () => {
    if (mongoose.connection[0]) {
        return;
    }
    await mongoose
    .connect(
        "mongodb+srv://admin:adminadmin@cluster0.abukmff.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("connected"))
    .catch((err) => console.log(err));
}