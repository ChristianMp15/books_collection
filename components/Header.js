import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Box } from '@mui/material'
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    const[value, setValue] = useState();
    const handleChange = (e, val) => {
        setValue(val);
        
        if (val == 0){
            router.push("/")
        } else if (val == 1) {
            router.push("/books/add")
        } 
    };
  return (
    <AppBar position="sticky" sx={{bgcolor:"#006400"}}>
        <Toolbar>
        <Box display="flex" margin={"auto"}>
            <Tabs onChange={handleChange} value={value} textColor='inherit'>
                <Tab label="Home"/>
                <Tab label="Add New Book"/>
            </Tabs>
        </Box>   
        </Toolbar>
    </AppBar>
  )
}

export default Header
