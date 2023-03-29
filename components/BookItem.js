import React from 'react'
import { Card,  CardContent, CardActions, Typography, Button} from '@mui/material';
import Link from 'next/link';


const BookItem = ({ id, title, author, imageUrl, comment, completed}) => {
  return (
    <Card sx={{ width:"100%", 
    height: "100%", 
    borderRadius: 3,
    boxShadow:"5px 5px 10px #ccc",
    ":hover": {
      boxShadow:"10px 10px 20px #ccc"
    },
    }}>
      <div style={{width: "100%", height: "65%", position:"relative"}}>
        { completed && <div style={{ position:"absolute" ,
        top:"0", 
        background:"#006400", 
        width: "70px", 
        padding: "2px", 
        color:"white"}}>
        completed
        </div>}
      <img src={imageUrl} alt={title} width={"100%"} height="100%" />
      </div>
        <CardContent sx={{ width: "100%", height: "25%"}}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {comment}
          </Typography>
        </CardContent>
      <CardActions>
        <Link href={`/books/${id}`}>
        <Button size="small" color="primary">
          Edit
        </Button>
        </Link>
        <Link href={`/books/${id}`}>
        <Button size="small" color="primary">
          Delete
        </Button>
        </Link>
        
      </CardActions>
    </Card>
  );
}

export default BookItem
