import React from 'react';
import { Box, Container, Typography, Grid2 as Grid, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <Box
      sx={{
        position: 'relative', // Ensures that the overlay is positioned correctly relative to the Box
        backgroundImage: 'url(/images/contactus.jpg)', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: 6,
        minHeight: '250px', // Sets a minimum height for the footer
        color: '#fff',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black overlay with 50% opacity
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Grid container spacing={2} alignItems="center" sx={{ mt: 1 }}>
              <Grid item>
                <EmailIcon />
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  Email: support@suchitrafoods.com
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center" sx={{ mt: 1 }}>
              <Grid item>
                <PhoneIcon />
              </Grid>
              <Grid item>
                <Typography variant="body2">+91 73311 30990</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center" sx={{ mt: 1 }}>
              <Grid item>
                <LocationOnIcon />
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  11-125, Bapu Nagar, Ramanthapur, Hyderabad, Telangana, 500013,
                  India
                </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" sx={{ mt: 1 }}>
              <Grid item>
                <Typography variant="body2">
                  You can chat with us on our WhatsApp by direct messaging us
                  between 9am - 9 pm IST.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} columnSpacing={2}>
            <Typography variant="h6" gutterBottom>
              Useful Links
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Link
                href="/privacy-policy"
                variant="body2"
                sx={{
                  display: 'block',
                  color: 'inherit',
                  textDecoration: 'none',
                  mb: 1,
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/shipping"
                variant="body2"
                sx={{
                  display: 'block',
                  color: 'inherit',
                  textDecoration: 'none',
                  mb: 1,
                }}
              >
                Shipping & Delivery
              </Link>
              <Link
                href="/cancellations"
                variant="body2"
                sx={{
                  display: 'block',
                  color: 'inherit',
                  textDecoration: 'none',
                  mb: 1,
                }}
              >
                Cancellations & Returns
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
