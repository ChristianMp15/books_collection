import axios from "axios"
export const getAllBooks = async () => {
const res = await axios.get("http://localhost:3000/api/books");
if (res.status !== 200) {
    return new ("Internal Server Error")
}
console.log(res.data, "books")
//const data = await res.data?.books;
return res.data;
};
export const getCompletedBooks = async () => {
    const books = await getAllBooks();
    console.log("getCompletedBooks", books[0])
    if (books.length == 0) {
        return [];
    }
    const completedBooks = books.filter((book)=> book.completed === true);
    return completedBooks;
}