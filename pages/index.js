import { getCompletedBooks } from "@/connection/frontend/connection";

function Home({ books }) {
  console.log(books);
  return<div>Home</div>
}
export default Home;
// Fetch the books

export const getStaticProps = async () => {
  const books = await getCompletedBooks();

  return {
    props: {
      books,
    }
  }
};