import { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid2 as Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Link,
} from '@mui/material';
import PropTypes from 'prop-types';

const Recommendations = ({ products }) => {
  // Ensure component only renders on client
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Avoid rendering until client-side
  if (!isMounted) return null;
  const reduceAndShuffle = (arr, n) => {
    arr.splice(n); // reduce array
    arr.sort(() => 0.5 - Math.random()); // shuffle array
    return arr;
  };
  return (
    <Box sx={{ mt: 6, backgroundColor: '#f9f9f9', p: 4 }}>
      <Typography variant="h5" gutterBottom align="center">
        Recommended for You
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {reduceAndShuffle(products, 4).map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.product_id}>
            <Card sx={{ height: '100%' }}>
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
                  sx={{ mb: 1, maxWidth: '300px' }}
                >
                  {product.product_description}
                </Typography>
                {/* Display Quantities and Prices */}
                <Box sx={{ marginTop: '1em' }}>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Available Quantities:</strong>
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
                        {/* Show Original Price with Strikethrough if Discounted Price is Available */}
                        {product?.discountedPrices[quantity] ? (
                          <>
                            {/* Display Launch Offer Label if Discounted */}
                            <Chip
                              label="Launch Offer"
                              color="primary"
                              sx={{ alignSelf: 'start', marginBottom: '0.5em' }}
                              size="small"
                            />
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5em',
                              }}
                            >
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ textDecoration: 'line-through' }}
                              >
                                ₹{product.prices[quantity]}
                              </Typography>
                              <Typography variant="body2" color="primary">
                                ₹{product.discountedPrices[quantity]}
                              </Typography>
                            </Box>
                          </>
                        ) : (
                          <Typography variant="body2" color="primary">
                            ₹{product.prices[quantity]}
                          </Typography>
                        )}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </CardContent>
              <Box sx={{ p: 2, textAlign: 'center' }}>
                <Button
                  variant="outlined"
                  fullWidth
                  component={Link}
                  href={`/product/${product.product_id}`}
                >
                  View Product
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

Recommendations.propTypes = {
  products: PropTypes.array,
};
export default Recommendations;
