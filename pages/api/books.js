import mongoose from "mongoose"
import { connectToDabase } from "@/connection/database"
import { addBook, getAllBooks } from "@/connection/controllers/books_controller";
export default async function handler(req, res) {
    await connectToDabase ();

    if(req.method === "GET") {
   return getAllBooks(req, res);
}else if(req.method === "POST") {
    return addBook(req, res);
}

}
