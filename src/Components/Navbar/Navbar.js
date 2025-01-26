import React from "react";
import { AppBar, Toolbar, Typography, Box, Button, Grid2, IconButton } from "@mui/material";
import logo from "../../assets/logo.jpg"
import { CiMenuBurger } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";


const Navbar = () => {
  return (
    <>
    <Box>
      {/* Top Contact Bar */}
      <Box sx={{ padding: "5px 20px" }}>
        <Grid2 container justifyContent="space-between" alignItems="center">
          <Grid2 item xs={12} md={6}>
            <Typography variant="body2" color="white" textAlign={{ xs: "center", md: "left" }}>
              +123-456-789 | info@yourdomain.com
            </Typography>
          </Grid2>
          <Grid2 item xs={12} md={6}>
            <Box textAlign={{ xs: "center", md: "right" }}>
              <IconButton size="small" color="inherit">
              <CiTwitter color="white"/>
              </IconButton>
              <IconButton size="small" color="inherit">
                <CiFacebook color="white"/>
              </IconButton>
              <IconButton size="small" color="white">
                <CiLinkedin color="white"/>
              </IconButton>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar className="Nav">
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="Amiso" style={{ height: "70px" }} />
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button  color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">FAQs</Button>
            <Button color="inherit">Gallery</Button>
            <Button color="inherit">Blog</Button>
            <Button color="inherit">Contact</Button>
          </Box>
          <IconButton edge="start" color="inherit" sx={{ display: { md: "none" } }}>
          <CiMenuBurger/>
            
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          marginRight:"40px",
          padding: { xs: "50px 20px", md: "100px 20px" },
        }}
      >
         <Typography variant="body1" color="white" sx={{ }}>
          Renew Your Look
        </Typography>
        <Typography variant="body1" color="white" sx={{ fontWeight: "bold",fontSize:"3rem" }}>
          A TRADITION OF <br/>QUALITY CLEANING
        </Typography>
        <Button variant="outlined" color="white" style={{marginTop:"30px"}}>
          Contact Us
        </Button>
      </Box>
    </Box>
    
  </>
  );
};

export default Navbar;