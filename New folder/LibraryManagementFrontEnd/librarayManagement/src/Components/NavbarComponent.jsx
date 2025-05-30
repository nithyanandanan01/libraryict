import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MatchingNavbar = () => {
  return (
    <Box sx={{ flexGrow: 1 , width: '100vw'}}>
      <AppBar position="static" sx={{width:"100vw", backgroundColor: "#17a2b8", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}>
  <Toolbar>
    <Typography variant="h6" sx={{ flexGrow: 1, color: "black", fontSize: "30px", fontWeight: "6" ,mr:2}}>
      LIBRARYMANAGEMENT
    </Typography>
    <Link to="/getBook" style={{ textDecoration: "none" }}>
      <Button sx={{ fontSize: "18px", color: "white", border: "1px solid black", borderColor: "black", mr: 2 }}>
        View Books
      </Button>
    </Link>
    <Link to="/addBook" style={{ textDecoration: "none" }}>
      <Button sx={{ fontSize: "18px", color: "white", border: "1px solid black", borderColor: "black", mr: 2 }}>
        Add Books
      </Button>
    </Link>
    <Link to="/getAuthors" style={{ textDecoration: "none" }}>
      <Button sx={{ fontSize: "18px", color: "white", border: "1px solid black", borderColor: "black", mr: 2 }}>
        View Authors
      </Button>
    </Link>
    <Link to="/addAuthors" style={{ textDecoration: "none" }}>
      <Button sx={{ fontSize: "18px", color: "white", border: "1px solid black", borderColor: "black", mr: 2 }}>
        Add Authors
      </Button>
    </Link> 
  </Toolbar>
</AppBar>
    </Box>
  );
};

export default MatchingNavbar;
