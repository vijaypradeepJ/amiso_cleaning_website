import React from "react";
import { Grid2, Typography, Card, CardContent ,CardMedia,Box} from "@mui/material";
import team1 from "../../assets/team1.jpg";
import team2 from "../../assets/team2.jpg";
import team3 from "../../assets/team3.jpg";
const news = [
    {
      date: "12 Nov",
      title: "Temporary Ruling Issued",
      description:
        "Wasteful has met the demands of a growing word ",
      author: "Martina Smith",
      role: "Visual CEO",
      img:team1
    },
    {
      date: "11 Nov",
      title: "The Expands California",
      description:
        "Welcomed and very well-adjusted services into newer partnerships.",
    author: "Laura Jones" ,
      author: "Laura Jones",
      role: "Advisor",
      img:team2
    },
    {
      date: "10 Nov",
      title: "Temporary Ruling Issued",
      description:
        "Wasteful has met the demands of a growing world in the cleaning industry.",
      author: "Matt Ryan",
      role: "Lawyer",
      img:team3
    },
  ];
  
  const RecentNews = () => {
    return (
      <div className="container my-5">
        <Typography variant="body1" gutterBottom className="text-center">
           Why Choose Us
        </Typography>
        <Typography variant="h4"  color="green"gutterBottom className="text-center">
          Recent News
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          className="text-center"
        >
          We specialize in intelligent & effective cleaning solutions.<br/>
          Homes and thoroughly launder them between uses.
        </Typography>
        <div className="postion-relative mt-4">
  
        <Grid2 container spacing={4} justifyContent="center">
                {news.map((news, index) => (
                  <Grid2 item xs={12} sm={4} md={4} key={index}>
                    <div className="position-relative" style={{ height: "400px", width: "300px" }}>
      {/* First Card */}
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
          image={news.img} 
          alt="Person"
        />
        <Box
          className="bg-primary text-white text-center"
          style={{
            position: 'absolute',
            top: '2px',
            right: '2px',
            width: '50px',
            height: '80px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {news.date}<br />
        </Box>
      </Card>

      {/* Second Card */}
      <Card
        className="position-absolute text-center"
        style={{
          width: "100%",
          bottom: "20px",
          zIndex: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <CardContent>
          <Typography variant="h6" color="green" component="div">
            {news.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {news.description}
          </Typography>
          <Typography variant="h6" color="green">
            {news.author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {news.role}
          </Typography>
        </CardContent>
      </Card>
    </div>
                  </Grid2>
                ))}
              </Grid2>
              </div>
              
              
      </div>
    );
  };
  
  export default RecentNews;