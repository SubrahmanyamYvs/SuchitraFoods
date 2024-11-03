// components/SignatureProducts.js
import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid2';

const products = [
  {
    id: 1,
    title: 'Handcrafted Blends',
    description:
      'Our spice powders are carefully crafted in small batches using a traditional method passed down through generations. This ensures that every blend captures the true essence of Indian flavors and preserves the highest quality ingredients.',
    image: '/images/special.jpg', // Replace with your product image path
  },
  {
    id: 2,
    title: 'Freshness and Aroma',
    description:
      'We source only the freshest, locally-grown spices to create our blends. This ensures that our customers experience the vibrant aroma and freshness that makes our products so special.',
    image: '/images/special_2.jpg', // Replace with your product image path
  },
  {
    id: 3,
    title: 'Naturally Healthy',
    description:
      'TOur spice powders are not only delicious, but also naturally healthy. We avoid using any artificial flavors, colors, or preservatives, so you can enjoy the authentic taste of India without any added chemicals.',
    image: '/images/special_3.jpg', // Replace with your product image path
  },
];

const Special = () => {
  return (
    <Box
      sx={{ backgroundColor: '#000000', padding: '50px 0', display: 'flex' }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 4em',
          backgroundColor: '#000',
          padding: '0 4em 2em',
          displa: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          align="left"
          sx={{
            color: 'white',
            fontSize: '2.625rem',
            margin: '.5em 0 .5em 0',
          }}
        >
          What makes us special
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ flexWrap: 'nowrap' }}
        >
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ boxShadow: 3, borderRadius: '8px' }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
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

export default Special;
