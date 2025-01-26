import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./Card.css"
import { MdCleaningServices } from "react-icons/md";
import { IoBusinessOutline } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";

const features = [
  {
    title: "Professional Cleaning",
    description: "Housekeeping is responsible for minor security in the hotel ecosystem for food and cleaner through.",
    icon: <MdCleaningServices color='#76b5c5'/>, 
  },
  {
    title: "Fast and Efficient",
    description: "Our aim is to keep the house clean. Your aim will help through digital innovation world summit.",
    icon: <FaShippingFast color='#76b5c5'/>, 
  },
  {
    title: "Renew Your Look",
    description: "Both of us take a lot of time in getting cleaned and beautified clean homes. Professional service.",
    icon: <IoBusinessOutline color='#76b5c5'/>, 
  },
];

const Cards = () => {
  return (
    <>
    <Container className="my-2">
      <Row>
        {features.map((feature, index) => (
          <Col key={index} md={4} sm={12} className="mb-4">
            <Card
              sx={{
                textAlign: 'center',
                borderRadius: 3,
                boxShadow: 3,
                height: '100%',
                padding: 2,
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    fontSize: '40px',
                    color: '#007bff',
                    marginBottom: '15px',
                  }}
                >
                 {feature.icon}
                </Box>
                <Typography variant="h6" color='green' component="div" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
    
  );
};

export default Cards;