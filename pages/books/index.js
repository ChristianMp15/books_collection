import BookList from "@/components/BookList";
import { getCompletedBooks } from "@/connection/controllers/books_controller";

function BooksHome({ books }){
    return <BookList data={books}/>
}

export default BooksHome;

export const getStacticProps = async () => {
    const books = await getCompletedBooks();
    return {
        props: {
         books,   
        }
    }
}