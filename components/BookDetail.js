import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { getBookFromId, updateBook } from '@/connection/frontend/connection';
import Form from './Form';


const BookDetail = () => {
        const [book, setBook] = useState()
    const router = useRouter();
    const id = router.query.id;
        useEffect(() => {
            getBookFromId(id)
            .then((data)=> setBook(data))
            .catch(err=>console.log(err));
        }, [router.query.id]);
        console.log(book);
const getFormData = (data) => {
  updateBook(id, data) 
    .then((value) => console.log(value)).then(() =>{
      router.push("/")
    })
    .catch((err) => console.log(err))
  };

  return (
    <div>
     {book ? (< Form data={book} onSubmit={ getFormData }  />) : <p> Loading...</p>}
    </div>
  )
};


export default BookDetail;
