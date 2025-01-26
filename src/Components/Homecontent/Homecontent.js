import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Typography, Box } from "@mui/material";

const Homecontent = () => {
  return (
    <Container fluid style={{  color: "#fff", padding: "2rem" }}>
      <Row className="text-center">
        <Col md={4}>
          <Box>
            <Typography variant="h5" style={{ color:"black" ,fontSize:"1.5rem",fontWeight:"bold" }}>
              A Clean House is a Happy Place!
            </Typography>
            <Typography variant="body1">
              Washla has met the demands of a growing world.
            </Typography>
          </Box>
        </Col>
        <Col md={4}>
          <Box>
            <Typography variant="body1">
              Washla customers have a tremendous opportunity to meet the critical logistics needs
              across the globe. As the affiliated state soybean associations representing all
              soybean-producing states.
            </Typography>
          </Box>
        </Col>
        <Col md={4}>
          <Box>
            <Typography variant="body1">
              World's leading non-asset-based supply chain management companies. We design and
              implement industry-leading solutions. We specialize in strategic & innovative
              research and believe in the power of partnerships to grow businesses.
            </Typography>
          </Box>
        </Col>
      </Row>
    </Container>
  );
};

export default Homecontent;