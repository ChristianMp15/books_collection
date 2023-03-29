import BookList from "@/components/BookList";
import { getAllBooks } from "@/connection/controllers/books_controller";

function BooksHome({books}) {
return <BookList data={books}/>
}
export default BooksHome;

export const getStaticProps = async () => {
    const books = await getAllBooks ();
    return {
        props: {

        }
    }
}