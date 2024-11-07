// Testimonials.js

import React from 'react';
import {
  Container,
  Typography,
  Grid2 as Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
} from '@mui/material';

const testimonials = [
  {
    name: 'John Doe',
    rating: 4,
    comment:
      'Absolutely loved the products! The quality is top-notch, and delivery was super quick.',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'Jane Smith',
    rating: 5,
    comment:
      'Amazing service and eco-friendly packaging! I’ll definitely order again.',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    name: 'Michael Lee',
    rating: 4.5,
    comment:
      'The products exceeded my expectations, especially the sustainability efforts.',
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
  {
    name: 'Sara Wilson',
    rating: 5,
    comment: 'Affordable prices and high-quality products. Highly recommended!',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
];

const Testimonials = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Customer Testimonials
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary">
        Hear from our satisfied customers!
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                p: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar
                alt={testimonial.name}
                src={testimonial.avatar}
                sx={{ width: 64, height: 64, mb: 2 }}
              />
              <Rating
                name="read-only"
                value={testimonial.rating}
                precision={0.5}
                readOnly
              />
              <CardContent>
                <Typography
                  variant="body1"
                  align="center"
                  color="text.secondary"
                  sx={{ mb: 2, maxWidth: '200px' }}
                >
                  {testimonial.comment}
                </Typography>
                <Typography variant="subtitle2" align="center" color="primary">
                  - {testimonial.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
