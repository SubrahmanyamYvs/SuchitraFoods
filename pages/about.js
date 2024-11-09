import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title> About Us | Suchitra Foods</title>
        <meta name="description" content={`Suchitra Foods About Us`} />
        <meta property="og:title" content={`About US | Suchitra Foods`} />
        <meta property="og:description" content={`Suchitra Foods About Us`} />
        <meta
          property="og:url"
          content={`https://www.suchitrafoods.com/about`}
        />
      </Head>
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
            At Suchitra Foods, we are passionate about bringing the authentic
            flavors of Andhra and Telangana to your table. With handcrafted
            spice powders, each made using premium ingredients and time-honored
            recipes, we aim to capture the true essence of regional Indian
            cuisine. Committed to the highest standards of taste, freshness, and
            hygiene, our offerings provide the unmistakable richness of homemade
            goodness. We currently offer Kandi Podi, Nuvvula Podi, Palli Podi,
            Karapodi, Kobbari Podi, Putnalu Podi, and Kura Podi, with exciting
            products like Nalla Karam, Sambar Podi, and Pudina Podi coming soon.
          </Typography>
          <Typography
            variant="h6"
            align="left"
            color="textSecondary"
            sx={{ mb: 2 }}
          >
            Our journey from eco-friendly non-woven bags to culinary delights
            reflects our dedication to quality across industries. With over 500
            happy clients globally in our original venture, Suchitra Industries,
            we bring that same commitment to excellence as we expand into the
            realm of traditional Indian flavors. Join us in savoring the rich,
            comforting taste of homemade spice powders and pickles, crafted with
            care and authenticity in every batch.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default About;
