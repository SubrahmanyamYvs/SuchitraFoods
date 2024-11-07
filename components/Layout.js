// components/Layout.js
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useAnalytics } from '../lib/useAnalytics';
import ResponsiveAppBar from './AppBar';
import Banner from './Banner';
import Footer from './Footer';

const Layout = ({ children }) => {
  const router = useRouter();
  const { trackEvent } = useAnalytics();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100vw',
      }}
    >
      <ResponsiveAppBar />
      <Banner
        backgroundImage="/images/hero.jpg"
        title="Authentic Indian Home Spice Powders"
        description="Discover the authentic flavors of India with our handcrafted spice powders, carefully blended in small batches for maximum freshness and aroma."
        buttonText="Shop Now"
        buttonAction={() => {
          trackEvent({
            action: 'click',
            category: 'button',
            label: 'Shop Now',
          });
          router.push('/products');
        }}
      />
      {children}
      {/* Footer */}
      <Footer />
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
