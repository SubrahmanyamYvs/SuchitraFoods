// components/SignatureProducts.js
import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const products = [
  {
    id: 1,
    title: 'Order',
    description:
      'We offer free shipping on all orders over $50 within the continental US.',
    image: '/images/order_1.jpg', // Replace with your product image path
  },
  {
    id: 2,
    title: 'Free on orders over $50',
    description:
      'Orders are typically processed within 1-2 business days and shipped via USPS Priority Mail.',
    image: '/images/order_2.jpg', // Replace with your product image path
  },
  {
    id: 3,
    title: '3-5 business days',
    description:
      'You can expect to receive your order within 3-5 business days.',
    image: '/images/order_3.jpg', // Replace with your product image path
  },
  {
    id: 4,
    title: 'Protect freshness',
    description:
      'We use special packaging to ensure your spice powders arrive fresh and flavorful.',
    image: '/images/order_4.jpg', // Replace with your product image path
  },
];

const Order = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Box sx={{ backgroundColor: '#FFF', padding: '2em' }}>
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: '#FFF',
          padding: '2em',
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          align="center"
          sx={{
            color: '#3B3B3B',
            fontSize: '2.625rem',
            marginBottom: '1em',
          }}
        >
          Order, Shipping and Delivery
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{ display: 'flex', alignItems: 'stretch' }}
        >
          {products.map((product) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={product.id}
              sx={{ minWidth: 200, maxWidth: isLargeScreen ? 300 : 'none' }}
            >
              <Card
                key={product.id}
                sx={{
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: '100%', md: '100px' },
                    height: '100px',
                    objectFit: 'cover',
                  }}
                  image={product.image}
                  alt={product.title}
                />
                <CardContent sx={{ textAlign: 'left', flexGrow: 1 }}>
                  <Typography variant="h6" component="div" gutterBottom>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Order;
