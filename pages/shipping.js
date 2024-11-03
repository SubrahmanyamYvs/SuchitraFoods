import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const Shipping = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box>
        <Typography variant="h4" gutterBottom>
          Shipping and Delivery
        </Typography>
        <Box my={2}>
          <Typography variant="h6">Processing Time:</Typography>
          <Typography variant="body1">
            Orders are processed within 1-2 business days.
          </Typography>
        </Box>
        <Box my={2}>
          <Typography variant="h6">Shipping Options:</Typography>
          <Typography variant="body1">
            Partnering with trusted logistics providers, we aim for 5-7 business
            days for delivery. You’ll receive notifications as soon as your
            order is dispatched.
          </Typography>
        </Box>
        <Box my={2}>
          <Typography variant="h6">Shipping Charges:</Typography>
          <Typography variant="body1">
            Calculated at checkout; free delivery on orders meeting the minimum
            value.
          </Typography>
        </Box>
        <Box my={2}>
          <Typography variant="h6">Order Tracking:</Typography>
          <Typography variant="body1">
            Tracking details sent via WhatsApp upon dispatch.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Shipping;
