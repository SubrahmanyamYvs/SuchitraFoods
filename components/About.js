import React from 'react';
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useAnalytics } from '../lib/useAnalytics';

const AboutUs = () => {
  const router = useRouter();
  const { trackEvent } = useAnalytics();
  const handleLearnMore = () => {
    trackEvent({
      action: 'click',
      category: 'button',
      label: 'About Us | Learn More',
    });
    router.push('/about'); // Adjust the path based on your routing setup
  };
  return (
    <Box
      sx={{
        backgroundColor: '#f4f4f4',
        padding: { xs: '2em 1em', md: '2em 2em' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          maxWidth: '1000px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: 'white',
        }}
      >
        {/* Image Section */}
        <CardMedia
          component="img"
          image="/images/SuchitraFoods.svg"
          alt="About Us"
          sx={{
            width: { md: '50%' },
            height: { xs: '200px', md: '350px' },
            padding: { xs: '1em', md: '2em' },
            objectFit: 'cover',
          }}
        />

        {/* Text Content Section */}
        <CardContent
          sx={{
            padding: { xs: '2em', md: '3em' },
            paddingTop: { xs: '0' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '0.5em',
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#555',
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            Welcome to Suchitra Foods, an exciting new venture by Suchitra
            Industries, established in 2018. With a strong reputation for
            quality and innovation, we proudly serve over 500 clients globally
            through our eco-friendly Non-Woven bags. Now, we’re bringing that
            same commitment to excellence into authentic homemade spice powders,
            capturing the authentic flavors of Andhra and Telangana. Each
            product is crafted with premium ingredients to bring you the rich
            and traditional taste of Indian cuisine, straight from our kitchen
            to your table.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleLearnMore}
            sx={{
              alignSelf: { xs: 'center', md: 'flex-start' },
              marginTop: { xs: '1em', md: '0' },
              padding: '0.5em 2em',
              backgroundColor: '#E04F00',
              color: 'white',
              '&:hover': {
                backgroundColor: '#c43d00',
              },
            }}
          >
            Learn More
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AboutUs;
