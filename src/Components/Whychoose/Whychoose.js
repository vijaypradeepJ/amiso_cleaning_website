import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Box, Typography } from "@mui/material";
import { LuTimer } from "react-icons/lu";
import { MdLocalPostOffice } from "react-icons/md";
import { TbGauge } from "react-icons/tb";
const WhyChoose = () => {
  const features = [
    {
      icon: <MdLocalPostOffice color="#76b5c5"/>, 
      title: "Professional Team",
      description: "Our team uses a sanitizing solution  to wipe-down light switches and doorknobs.",
    },
    {
      icon: <LuTimer color="#76b5c5"/>, 
      title: "24/7 Services",
      description: "We encourage our customers to let us know in advance of an appointment.",
    },
    {
      icon: <TbGauge color="#76b5c5"/>, 
      title: "Service Guarantee",
      description: "We are telling our team members to switch out all cleaning cloths and mop heads.",
    },
  ];

  return (
    <Box py={5} bgcolor="#f9f9f9">
      <Container>
        <Typography variant="h6" align="center">Why Choose us</Typography>
        <Typography variant="h4" align="center" color="green" gutterBottom>
          Tradition of Trust
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          We specialize in intelligent & effective Search and <br/>believe in the power of partnerships to grow businesses.
        </Typography>
        <Row className="mt-4" spacing={3}>
          {features.map((feature, index) => (
            <Col md={4} sm={12} key={index} spacing={4}  className="text-center mb-4 ">
              <Box fontSize="48px" mb={2}>
                {feature.icon}
              </Box>
              <Typography variant="h6" color="green" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2" className="px-10">{feature.description}</Typography>
            </Col>
          ))}
        </Row>
      </Container>
    </Box>
  );
};

export default WhyChoose;