import React from "react";
import { Button, Grid2, Typography, Card, CardContent } from "@mui/material";

const stats = [
  { label: "Happy Customers", value: 385 },
  { label: "Homes Cleaned", value: 842 },
  { label: "Awards Received", value: 489 },
  { label: "Cities Cleaned", value: 1344 },
];

const CTASection = () => {
  return (
    <div className="text-center p-5" style={{ backgroundColor: "#E5F6FB" }}>
      <Typography variant="h4" gutterBottom>
        Need Help With Cleaning?
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" paragraph>
        Cleaning your worries away
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Request Call Back
      </Button>

      <Grid2 container spacing={3} justifyContent="center" className="mt-5">
        {stats.map((stat, index) => (
          <Grid2 item xs={6} sm={3} key={index}>
            <Card elevation={0}>
              <CardContent>
                <Typography variant="h5" color="primary">
                  {stat.value}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  {stat.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default CTASection;