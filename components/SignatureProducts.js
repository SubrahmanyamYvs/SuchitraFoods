import React from 'react';
import {
  Box,
  Typography,
  Grid2 as Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material';

const products = [
  {
    id: 1,
    image: '/images/kandi.jpg',
    title: 'Product 1',
    description: 'Top selling product',
    price: '$20',
  },
  {
    id: 2,
    image: '/images/karam.jpg',
    title: 'Product 2',
    description: 'Best quality',
    price: '$30',
  },
  {
    id: 3,
    image: '/images/nuvulla.jpg',
    title: 'Product 3',
    description: 'Highly rated',
    price: '$25',
  },
  {
    id: 4,
    image: '/images/kandi.jpg',
    title: 'Product 4',
    description: 'Popular item',
    price: '$40',
  },
];

const SignatureProducts = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: { xs: '1em', md: '2em' },
        width: '100%',
        backgroundColor: '#E04F00',
      }}
    >
      <Box sx={{ padding: '2em', backgroundColor: '#fff' }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            marginBottom: '1em',
            textAlign: 'center',
            fontSize: { xs: '1.8rem' },
          }}
        >
          Top Selling Products
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ marginTop: '0.5em' }}
                  >
                    {product.price}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    padding: '1em',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                >
                  <Button variant="outlined">Add to Cart</Button>
                  <Button variant="text">View Details</Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SignatureProducts;
