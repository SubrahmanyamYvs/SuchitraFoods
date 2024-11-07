import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Head from 'next/head';

const Cancellations = () => {
  return (
    <>
      <Head>
        <title> Cancellations | Suchitra Foods</title>
        <meta name="description" content={`Suchitra Foods Cancellations`} />
        <meta property="og:title" content={`Cancellations | Suchitra Foods`} />
        <meta
          property="og:description"
          content={`Suchitra Foods Cancellations`}
        />
        <meta
          property="og:url"
          content={`https://www.suchitrafoods.com/cancellations`}
        />
      </Head>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Returns and Cancellations
          </Typography>
          <Box my={2}>
            <Typography variant="h6">Returns:</Typography>
            <Typography variant="body1">
              Generally not accepted post-delivery. For damaged goods, contact
              us with photos for a replacement or refund.
            </Typography>
          </Box>
          <Box my={2}>
            <Typography variant="h6">Order Cancellation:</Typography>
            <Typography variant="body1">
              Cancellations before dispatch carry a small payment gateway fee.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Cancellations;
