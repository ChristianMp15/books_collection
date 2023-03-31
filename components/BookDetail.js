import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { getBookFromId } from '@/connection/frontend/connection';

const BookDetail = () => {
        const [book, setBook] = useState(second)
    const router = useRouter();
    const id = router.query.id;
        useEffect(() => {
            getBookFromId()
            .then((data)=> setBook(data))
            .catch(err=>console.log(err));
        }, [router.query.id]);
        console.log(book);
const getFormData = (data) => {};

}        

  return (
    <div>
     {book ? <Form data={book} onSubmit={getFormData}  /> : <p> Loading...</p>}
    </div>
  );

export default BookDetail;
