import React from 'react';
import { Card, CardContent, Typography, Grid2 ,CardMedia} from '@mui/material';
import team1 from "../../assets/team1.jpg";
import team2 from "../../assets/team2.jpg";
import team3 from "../../assets/team3.jpg";

const teamMembers = [
  {
    name: "Monica Gordon",
    role: "House Cleaning",
    img: team1, 
  },
  {
    name: "Laura Jones",
    role: "Cleaner",
    img: team2, 
  },
  {
    name: "Sara Ryan",
    role: "House Cleaner",
    img: team3, 
  },
];

const Team = () => {
  return (
    <div className="container text-center my-5">
      <Typography variant="h6" align="center" color="">Meet Our</Typography>
      <Typography variant="h4" align="center" color="green" gutterBottom>
                  Our Team
    </Typography>
      <Typography variant="body1" color="textSecondary" >
        The members of our highly experienced team are dedicated <br/>to providing you with only the best service.
      </Typography>

      <Grid2 container spacing={6} justifyContent="center" className="mt-4">
        {teamMembers.map((member, index) => (
          <Grid2 spacing={12} item xs={12} sm={6} md={4} key={index}>
            <div className="position-relative" style={{ height: "400px", width: "300px" }}>
      <Card
        className="position-absolute"
        style={{
          width: "100%",
          height: "300px",
          top: "0px",
          zIndex: 1,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={member.img} 
          alt="Person"
        />
      </Card>

      {/* Second Card */}
      <Card
        className="position-absolute text-center"
        style={{
          width: "80%",
          height: "100px",
          bottom: "20px",
          left: "10%",
          zIndex: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <CardContent>
          <Typography variant="h6" color='green' component="div">
            {member.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {member.role}
          </Typography>
        </CardContent>
      </Card>
    </div>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default Team;