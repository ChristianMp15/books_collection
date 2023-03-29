import React from 'react'
import { Grid } from "@mui/material";
import BookItem from './BookItem';

const BookList = ({ data }) => {

  return (
    <div>
        <Grid padding={1} spacing={2} container>
            {data.map((book) => (
                <Grid xs={6} sm={4} md={3} lg={2} height={"500px"} width={"100%"} item key={book._id} >
                    <BookItem  
                    title={book.title} 
                    author={book.author} 
                    id={book._id}
                    imageUrl={book.imageUrl} 
                    comment={book.comment}
                    completed={book.completed}/>
                    
                    
                </Grid>
                

            ))}
        </Grid>
    </div>
  )
}

export default BookList
