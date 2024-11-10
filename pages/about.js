import React from 'react';
import {
  Container,
  Typography,
  Grid2 as Grid,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  useTheme,
  Avatar,
  Button,
  CardMedia,
} from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
import GroupIcon from '@mui/icons-material/Group';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SpaIcon from '@mui/icons-material/Spa';
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import GrassIcon from '@mui/icons-material/Grass';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import GrainIcon from '@mui/icons-material/Grain';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import SetMealIcon from '@mui/icons-material/SetMeal';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import StarIcon from '@mui/icons-material/Star';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

export default function AboutUs() {
  const theme = useTheme();

  const offerings = [
    {
      name: 'Kandi Podi',
      description: 'A protein-packed delight',
    },
    {
      name: 'Nuvvula Podi',
      description: 'Sesame seed goodness',
    },
    {
      name: 'Palli Podi',
      description: 'Peanut perfection',
    },
    {
      name: 'Karapodi',
      description: 'Spicy and flavorful',
    },
    {
      name: 'Kobbari Podi',
      description: 'Coconut charm',
    },
    {
      name: 'Putnalu Podi',
      description: 'Roasted gram deliciousness',
    },
    {
      name: 'Kura Podi',
      description: 'Vegetable magic',
    },
  ];
  const comingSoon = [
    {
      name: 'Nalla Karam',
      description: 'A fiery favorite',
      icon: <WhatshotIcon sx={{ color: theme.palette.success.main }} />,
    },
    {
      name: 'Sambar Podi',
      description: 'Classic comfort',
      icon: <SoupKitchenIcon sx={{ color: theme.palette.success.main }} />,
    },
    {
      name: 'Pudina Podi',
      description: 'Minty freshness',
      icon: <GrassIcon sx={{ color: theme.palette.success.main }} />,
    },
  ];
  const whyChooseUs = [
    {
      title: 'Authentic Taste',
      description: 'Rich, homemade goodness',
      icon: <RestaurantIcon sx={{ color: theme.palette.success.main }} />,
    },
    {
      title: 'Premium Quality',
      description: 'Committed to the highest standards',
      icon: <SpaIcon sx={{ color: theme.palette.success.main }} />,
    },
    {
      title: 'Hygienic Process',
      description: 'Ensuring your safety and satisfaction',
      icon: <SanitizerIcon sx={{ color: theme.palette.success.main }} />,
    },
  ];
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Header Section */}
      <Box mb={6} textAlign="center">
        <Typography variant="h3" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: '800px', mx: 'auto' }}
        >
          At Suchitra Foods, we are passionate about bringing the authentic
          flavors of Andhra and Telangana to your table. Our handcrafted spice
          powders, made with premium ingredients and time-honored recipes,
          capture the true essence of regional Indian cuisine.
        </Typography>
      </Box>

      <Box mb={6}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
        >
          <LocalDiningIcon color="primary" />
          Our Offerings
        </Typography>
        <Grid container spacing={3}>
          {offerings.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-5px)' },
                }}
              >
                <CardHeader title={item.name} />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Coming Soon Section */}
      <Box mb={6}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
        >
          <NewReleasesIcon color="primary" />
          Coming Soon
        </Typography>
        <Grid container spacing={3}>
          {comingSoon.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-5px)' },
                }}
              >
                <CardHeader title={item.name} />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Why Choose Us Section */}
      <Box mb={6}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
        >
          <EmojiFoodBeverageIcon color="success" />
          Why Choose Us?
        </Typography>
        <Grid container spacing={3}>
          {whyChooseUs.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-5px)' },
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: 'transparent' }}>{item.icon}</Avatar>
                  }
                  title={item.title}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box mb={6}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
        >
          <TimelineIcon color="primary" />
          Our Journey
        </Typography>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="body1">
            Our journey from eco-friendly non-woven bags to culinary delights
            reflects our unwavering dedication to quality. With over 500 happy
            clients globally through Suchitra Industries, we bring that same
            commitment to excellence to the realm of traditional Indian flavors.
          </Typography>
        </Paper>
      </Box>

      {/* Final Message Section */}
      <Box>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
        >
          <GroupIcon color="primary" />
          Join Us
        </Typography>
        <Paper
          elevation={3}
          sx={{ p: 4, borderRadius: 2, bgcolor: theme.palette.primary.light }}
        >
          <Typography variant="body1" color="white">
            Savor the rich, comforting taste of homemade spice powders and
            pickles, crafted with care and authenticity in every batch.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}
