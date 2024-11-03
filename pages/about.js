import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography
          variant="h6"
          align="left"
          color="textSecondary"
          sx={{ mb: 2 }}
        >
          Welcome to Suchitra Foods, an exciting new addition to the Suchitra
          Industries family, which has been dedicated to quality and innovation
          since its founding in 2018. Suchitra Industries has grown to become a
          trusted provider of eco-friendly non-woven bags in Hyderabad, serving
          over 500+ happy clients worldwide. With the continued support of our
          valued customers, we are thrilled to expand into the world of homemade
          Indian foods.
        </Typography>
        <Typography
          variant="h6"
          align="left"
          color="textSecondary"
          sx={{ mb: 2 }}
        >
          Suchitra Foods brings the essence of Andhra and Telangana flavors to
          life in our handcrafted pickles and spice powders, each made with
          premium ingredients and traditional recipes. Committed to the highest
          standards of taste, freshness, and hygiene, we invite you to
          experience the rich, authentic taste of homemade
          goodness in every bite.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
