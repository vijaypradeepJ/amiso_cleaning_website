import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Box, Typography, Card, CardContent,Grid2,Paper } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import team1 from "../../assets/team1.jpg"
import { MdCleaningServices } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { IoMdSpeedometer } from "react-icons/io";


const Services = () => {
  const services = [
    {
      
      title: "Home Cleaning",
      description: "Homes and thoroughly launder them between uses.",
    },
    {
     
      title: "Windows Cleaning",
      description: "We clean windows according to safety and health standards.",
    },
    {
      
      title: "Office Cleaning",
      description: "Prevent the spread of seasonal flu and maintain cleanliness.",
    },
  ];

  return (
    <div>
      {/* Section 1 */}
      <Box sx={{ backgroundColor: "#f5faff", padding: "4rem 0", position: "relative" }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Section: Image */}
          <Col xs={12} md={6} className="text-center">
            <Box
              component="img"
              src={team1} 
              alt="Cleaning Service"
              sx={{
                width:"120%",
                borderRadius: "10px",
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                backgroundColor:"blue"
              }}
            />
          </Col>

          {/* Right Section: Overlapping Cards */}
          <Col xs={12} md={6}>
            <Box position="relative" sx={{marginBottom:"40px",height:"100%"}}>
              {/* First Card */}
              <Paper
                elevation={3}
                sx={{
                  padding: "2rem",
                  borderRadius: "10px",
                  backgroundColor: "#ffffff",
                  zIndex: 2,
                  position: "relative",
                  marginBottom: "-4rem",
                }}
              >
                <Typography
                  variant="overline"
                  
                >
                  MAID FOR YOU
                </Typography>
                <Typography
                  variant="h4"
                  color="green"
                  sx={{
                    fontWeight: "bold",
                    
                    margin: "0.5rem 0",
                  }}
                >
                  A Cleaner Place is a Safer Place.
                </Typography>
                <Typography variant="body1" >
                  We are dedicated to giving our customers back the time they
                  deserve to enjoy the things they love.
                </Typography>
                <Grid2 container spacing={2}>
                  <Grid2 item xs={12} sm={6}>
                    <Box display="flex" alignItems="flex-start" gap={2}>
                      <Box
                        sx={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "white",
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "white",
                        }}
                      >
                        <FaPaintBrush color="#76b5c5"/>
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          color="green"
                          sx={{ fontWeight: "bold" }}
                        >
                          Professional Cleaning
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                        >
                          Housekeeping is responsible for interior security
                          and tidiness.
                        </Typography>
                      </Box>
                    </Box>
                  </Grid2>
                  <Grid2 item xs={12} sm={6}>
                    <Box display="flex" alignItems="flex-start" gap={2}>
                      <Box
                        sx={{
                          width: "40px",
                          height: "40px",
                          backgroundColor:"white",
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "white",
                        }}
                      >
                        <IoMdSpeedometer color="#76b5c5"/>
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle1" color="green"
                          sx={{ fontWeight: "bold" }}
                        >
                          Fast and Efficient
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                        >
                          Save time with fast, efficient service and a clean
                          home.
                        </Typography>
                      </Box>
                    </Box>
                  </Grid2>
                </Grid2>
              </Paper>

              {/* Second Card */}
              <Paper
                elevation={3}
                sx={{
                  padding: "2rem",
                  borderRadius: "10px",
                  backgroundColor: "#ffffff",
                  position: "absolute",
                  top: "6rem",
                  left: "1rem",
                  zIndex: 1,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  Why Choose Us?
                </Typography>
                <Typography variant="body2">
                  Our team provides reliable and efficient cleaning services
                  that exceed expectations.
                </Typography>
                <Typography variant="body2">
                  Your satisfaction is our priority, ensuring your space is
                  clean and welcoming.
                </Typography>
              </Paper>
            </Box>
          </Col>
        </Row>
      </Container>
    </Box>

      {/* Section 2 */}
      <Box sx={{ backgroundColor: "#76b5c5", padding: "3rem 0" }}>
        <Container>
        <Typography variant="body1" color="white" align="center" gutterBottom>
            Why Choose Us
          </Typography>
          <Typography variant="h4" color="green" align="center" gutterBottom>
            Our Great Service
          </Typography>
          <Typography variant="body1" align="center" color="white"gutterBottom>
            Restoring the beauty and freshness of all your <br/>upholstered fabrics and taking the work out of housework for you.
          </Typography>
          <Row className="mt-4">
            {services.map((service, index) => (
              <Col key={index} md={4} className="d-flex justify-content-center mb-3">
                <Card sx={{ maxWidth: 345, textAlign: "center" ,backgroundColor:"#2596be" }}>
                  <CardContent>
                    <Box sx={{ fontSize: "3rem", marginBottom: "1rem" }}>
                      <MdCleaningServices color="white"/>
                    </Box>
                    <Typography variant="h6" color="white" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="white">{service.description}</Typography>
                  </CardContent>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Box>
    </div>
  );
};

export default Services;