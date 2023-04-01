import React from 'react'
import Form from './Form'
import axios from 'axios';
import { sendBook } from '@/connection/frontend/connection';
import { useRouter } from 'next/router';

const Add = () => {
  const router = useRouter();

  const getFormData = (data) => {
    sendBook(data)
    .then((value) => console.log(value)).then(() =>{
      router.push("/")
    })
    .catch((err) => console.log(err));

  };
  return (
    <div>
      <Form onSubmit={getFormData}/>
    </div>
  )
}

export default Add;
