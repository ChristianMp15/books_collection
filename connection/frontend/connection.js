import React from "react";
import axios from "axios"
export const getAllBooks = async () => {
const res = await axios.get("http://localhost:3000/api/books");
if (res.status != 200) {
    return new ("Internal Server Error")
}

//const data = await res.data?.books;
return res.data;
};
export const getCompletedBooks = async () => {
    const books = await getAllBooks();
   // console.log("getCompletedBooks", books[0])
    if (books.length == 0) {
        return [];
    }
    const completedBooks = books.filter((book)=> book.completed === true);
    return completedBooks;
};

export const sendBook = async (data) => {
    const res = await axios.post("http://localhost:3000/api/books", {
        title: data.title,
        author: data.author,
        imageUrl: data.imageUrl,
        comment: data.comment,
        completed: Boolean(data.completed),
    });
    if (res.status !== 201){
        return new Error("Request Rejected")
    };
    const resData = await res.data;
    return resData;
};

export const getBookFromId = async (id) => {
    const res = await axios.get(`http://localhost:3000/api/book/${id}`);
    if (res.status !== 200){
        return new Error("Unable to fetch")
    }
    const data = await res.data;
    return data.book;
}

