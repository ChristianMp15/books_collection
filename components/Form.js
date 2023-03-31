import { Checkbox, FormLabel, TextField, Typography, Box, Button } from '@mui/material';
import React from 'react'
import { useState } from 'react'

const labelSx = {marginTop: "10px"}
const Form = ({ data, onSubmit }) => {
    const [inputs, setInputs] = useState(
        data ? {
            title: data.title,
            author: data.author,
            imageUrl: data.imageUrl,
            completed: data.completed,
        } 
        : {
            title: "",
            author: "",
            imageUrl: "",
            completed:false,
        }

    );
    const handleChange = (e) => {
        setInputs((prevState) =>({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputs);

    }

  return <form onSubmit={handleSubmit}
  style={{ width: "80%", height: "100%"}}>
    <Typography color={"#006400"} fontWeight="bold" textAlign="center">
        {data ? "Book Detail" : "Add New Book"}</Typography>
    <Box padding={3} display="flex" flexDirection="column">
        <FormLabel sx={labelSx}>Title</FormLabel>
        <TextField onChange={handleChange} value={inputs.title} name='title' margin='normal'/>
        <FormLabel  sx={labelSx}>Author</FormLabel>
        <TextField onChange={handleChange} value={inputs.author} name="author" margin='normal'/>
        <FormLabel sx={labelSx}>ImageUrl</FormLabel>
        <TextField onChange={handleChange} value={inputs.imageUrl} name="imageUrl" margin='normal'/>
        <FormLabel sx={labelSx}>Comment</FormLabel>
        <TextField onChange={handleChange} value={inputs.comment} name="comment" margin='normal'/>
        <FormLabel sx={labelSx}>Completed</FormLabel>
            <Checkbox onChange={(e)=>setInputs((prevState)=>({...prevState,completed: e.target.checked}))} 
            checked={inputs.completed} name='completed' sx={{ marginRight: "auto" }}/>
            <Button type='submit' variant='contained'>Submit</Button>
       
    </Box>

  </form>
}

export default Form
