import React from 'react';
import { Container, Box, Typography, Link } from '@mui/material';
import Head from 'next/head';

const ContactUs = () => {
  return (
    <>
      <Head>
        <title> Contact Us | Suchitra Foods</title>
        <meta name="description" content={`Suchitra Foods Contact Us`} />
        <meta property="og:title" content={`Contact Us | Suchitra Foods`} />
        <meta property="og:description" content={`Suchitra Foods Contact Us`} />
        <meta
          property="og:url"
          content={`https://www.suchitrafoods.com/contact-us`}
        />
      </Head>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>

          <Typography variant="body1">
            Welcome to suchitrafoods.com (“Site”). The domain{' '}
            <Link href="https://suchitrafoods.com" target="_blank">
              https://suchitrafoods.com
            </Link>{' '}
            is owned by Suchitra Industries, Hyderabad. By visiting this Site,
            you accept the following conditions. Please read them carefully.
          </Typography>

          <Typography variant="body1">
            At Suchitra Foods, we respect your privacy and are committed to
            protecting your personal information. This policy outlines how we
            collect, use, and safeguard your data.
          </Typography>

          <Typography variant="h6" gutterBottom>
            1. Information Collection
          </Typography>
          <Typography variant="body1">
            We collect information when you visit our website, place an order,
            or communicate with us. This may include your name, contact
            information, and payment details.
          </Typography>

          <Typography variant="h6" gutterBottom>
            2. Use of Information
          </Typography>
          <Typography variant="body1">
            We use your information to process orders, communicate updates, and
            improve our services. We may also send promotional offers if you
            opt-in.
          </Typography>

          <Typography variant="h6" gutterBottom>
            3. Data Sharing
          </Typography>
          <Typography variant="body1">
            We do not sell or rent your data. We may share your information with
            trusted third parties for payment processing, shipping, and
            compliance with legal requirements.
          </Typography>

          <Typography variant="h6" gutterBottom>
            4. Security
          </Typography>
          <Typography variant="body1">
            We implement industry-standard security measures to protect your
            data. However, no method of transmission over the internet is
            completely secure.
          </Typography>

          <Typography variant="h6" gutterBottom>
            5. Cookies
          </Typography>
          <Typography variant="body1">
            Our website uses cookies to enhance your browsing experience. You
            can manage cookie settings through your browser.
          </Typography>

          <Typography variant="h6" gutterBottom>
            6. Your Rights
          </Typography>
          <Typography variant="body1">
            You may request to access, correct, or delete your personal
            information by contacting us.
          </Typography>

          <Typography variant="h6" gutterBottom>
            7. Policy Updates
          </Typography>
          <Typography variant="body1">
            We may update this policy periodically. Changes will be posted on
            our website.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" gutterBottom>
            For any privacy-related questions, please reach out to us at{' '}
            <Link href="mailto:connect@suchitrafoods.com">
              connect@suchitrafoods.com
            </Link>
            .
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default ContactUs;
