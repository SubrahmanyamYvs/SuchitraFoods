import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Button } from '@mui/material';

const Banner = ({
  backgroundImage,
  title,
  description,
  buttonText,
  buttonAction,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: { xs: '300px', md: '300px' },
        width: '100vw', // Ensures the banner stretches across the full viewport width
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        padding: { xs: '20px', md: '40px' },
        flexDirection: 'column',
        overflow: 'hidden', // Prevents horizontal scroll if content overflows slightly
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better text visibility
          padding: { xs: '10px', md: '20px' },
          borderRadius: '8px',
          maxWidth: '90%', // Constrains the overlay text width, but you can adjust as needed
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontSize: { xs: '24px', md: '36px' }, fontWeight: 'bold' }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{ fontSize: { xs: '14px', md: '18px' }, marginTop: '8px' }}
        >
          {description}
        </Typography>

        {buttonText && (
          <Button
            variant="contained"
            color="primary"
            onClick={buttonAction}
            sx={{
              marginTop: '16px',
              fontSize: { xs: '12px', md: '16px' },
              padding: { xs: '8px 16px', md: '10px 24px' },
            }}
          >
            {buttonText}
          </Button>
        )}
      </Box>
    </Box>
  );
};

Banner.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  buttonAction: PropTypes.func,
};

export default Banner;
