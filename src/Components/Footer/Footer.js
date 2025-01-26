import React from "react";
import { Grid22, Typography, TextField, Button, Link, Grid2 } from "@mui/material";

const Footer = () => {
  return (
    <div style={{  padding: "40px 20px",backgroundColor:"#eeeee4" }}>
      <div className="container">
        <Grid2 container spacing={6}>
          {/* Logo and Description */}
          <Grid2 item xs={12} sm={3}>
            <Typography variant="h6" color="green" style={{ fontWeight: "bold" }}>
              amiso
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{ marginTop: "10px" }}
            >
              We help customers take a<br/>
              tremendous opportunity to 
              answer the call
              of tasks.
            </Typography>
          </Grid2>

          {/* Get in Touch */}
          <Grid2 item xs={12} sm={3}>
            <Typography variant="h6" color="green" style={{ fontWeight: "bold" }}>
              Get in Touch
            </Typography>
            <Typography variant="body2" color="textSecondary">
              8733 NW 50th ST, Miami, <br/>Florida, 33195, United States
            </Typography>
            <Typography variant="body2" color="textSecondary">
              info@amiso.com
            </Typography>
            <Typography variant="body2" color="textSecondary">
              665-401-1923
            </Typography>
          </Grid2>

          {/* Quick Links */}
          <Grid2 item xs={12} sm={3}>
            <Typography variant="h6" color="green" style={{ fontWeight: "bold" }}>
              Quick Links
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit" underline="none">
                Home
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit" underline="none">
                About
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit" underline="none">
                Services
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit" underline="none">
                Gallery
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit" underline="none">
                FAQ
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit" underline="none">
                Contact Us
              </Link>
            </Typography>
          </Grid2>

          {/* Newsletter */}
          <Grid2 item xs={12} sm={3}>
            <Typography variant="h6"color="green" style={{ fontWeight: "bold" }}>
              Our Newsletter
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{ marginBottom: "10px", marginTop: "10px" }}
            >
              Subscribe to our newsletter to receive
              the latest updates about
              our services.
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Your email address"
              style={{ marginBottom: "10px" }}
            />
            <Button variant="contained" color="primary">
              Sign Up
            </Button>
          </Grid2>
        </Grid2>

        {/* Footer Bottom */}
        <div
          style={{
            borderTop: "1px solid #e0e0e0",
            marginTop: "30px",
            paddingTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="textSecondary">
            © 2023 amiso. All rights reserved.
          </Typography>
          <div>
            <Link href="#" color="inherit" style={{ marginRight: "10px" }}>
              <i className="fab fa-facebook"></i>
            </Link>
            <Link href="#" color="inherit" style={{ marginRight: "10px" }}>
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" color="inherit">
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;