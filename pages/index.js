import BookList from "@/components/BookList";
import { getAllBooks } from "@/connection/frontend/connection";


function Home({ books }) {
  return <BookList data={books}/>
}
export default Home;
// Fetch the books

export const getStaticProps = async () => {
  const books = await getAllBooks();

  return {
    props: {
      books,
    }
  }
};
