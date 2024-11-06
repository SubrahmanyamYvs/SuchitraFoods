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
    product_id: 'SF-01',
    product_image: '/images/kandi.jpg',
    product_name: 'Kandi Podi',
    product_description:
      'Our Kandi Podi blends high-quality lentils with rich, savory flavor. Perfect with mango, tomato, or Gongura pickles, it enhances rice and ghee with a comforting taste.',
    best_used_for:
      'Mixing with rice, ghee, and pickles or as a flavorful topping for dosa and idli.',
    quantities_available: ['100gms', '200gms'],
    prices: {
      '100gms': 125,
      '200gms': 145,
    },
  },
  {
    product_id: 'SF-02',
    product_image: '/images/nuvulla.jpg',
    product_name: 'Nuvvula Podi',
    product_description:
      'Finely ground from roasted sesame seeds, this podi adds a nutty richness and health benefits. A sprinkle transforms simple dishes with depth and a hint of sesame.',
    best_used_for:
      'Mixing with rice, seasoning salads, or adding richness to curries.',
    quantities_available: ['100gms', '200gms'],
    prices: {
      '100gms': 125,
      '200gms': 145,
    },
  },
  {
    product_id: 'SF-03',
    product_image: '/images/karam.jpg',
    product_name: 'Nalla Karapodi/Idli Karam',
    product_description:
      'Spicy and smoky, this chili powder packs an intense flavor, ideal for adding heat. Made in a clean environment, it’s a delicious way to spice up your breakfast dishes or curries.',
    best_used_for: 'Pairing with ghee on idli, dosa, or upma.',
    quantities_available: ['100gms', '200gms'],
    prices: {
      '100gms': 125,
      '200gms': 145,
    },
  },
  {
    product_id: 'SF-04',
    product_image: '/images/karam.jpg',
    product_name: 'Kura Podi',
    product_description:
      'A special blend of spices, Kura Podi infuses curries and vegetable dishes with warmth and depth. This spice mix captures the traditional flavors of Andhra and Telangana.',
    best_used_for:
      'Flavoring vegetable curries, enhancing gravies, and adding aroma to stir-fries.',
    quantities_available: ['100gms', '200gms'],
    prices: {
      '100gms': 125,
      '200gms': 145,
    },
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
          Signature Products
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
                  image={product.product_image}
                  alt={product.product_name}
                />
                <CardContent>
                  <Typography variant="h6">{product.product_name}</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginBottom: '1em', maxWidth: '300px' }}
                  >
                    {product.product_description}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{ maxWidth: '300px' }}
                  >
                    Best used for: {product.best_used_for}
                  </Typography>
                  {/* Display Quantities and Prices */}
                  <Box sx={{ marginTop: '1em' }}>
                    <Typography variant="body2" color="text.secondary">
                      Available Quantities:
                    </Typography>
                    <Box sx={{ marginTop: '0.5em' }}>
                      {product.quantities_available.map((quantity) => (
                        <Box
                          key={quantity}
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '0.5em 0',
                            borderBottom: '1px solid #eee',
                          }}
                        >
                          <Typography variant="body2" color="text.primary">
                            {quantity}
                          </Typography>
                          <Typography variant="body2" color="primary">
                            ₹{product.prices[quantity]}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </CardContent>
                {/* <Box
                  sx={{
                    padding: '1em',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                >
                  <Button variant="outlined">Add to Cart</Button>
                  <Button variant="text">View Details</Button>
                </Box> */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SignatureProducts;
