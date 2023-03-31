import { deleteBook, updateBook } from "@/connection/controllers/books_controller";
import { connectToDabase } from "@/connection/database";

export default async function handler(req, res) {
    await connectToDabase();
    if(req.method === "PUT") {
        return updateBook(req, res);
        
    } else if(req.method === "DELETE"){
        return deleteBook(req, res);

    } else if (req.method === "GET") {
        return getBookFromId(req, res)
    }
}