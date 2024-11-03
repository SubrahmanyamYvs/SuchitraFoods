import React from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

const ProductCard = ({
  image,
  title,
  description,
  price,
  available,
  onAddToCart,
  viewMode,
}) => {
  const isListMode = viewMode === 'list';
  return (
    <Card
      sx={{ display: 'flex', flexDirection: isListMode ? 'row' : 'column' }}
    >
      <CardMedia
        component="img"
        sx={{
          width: isListMode ? 160 : '100%',
          height: isListMode ? 160 : 140,
        }}
        image={image}
        alt={title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="h6" color="text.primary">
            ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Available: {available}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={onAddToCart}>
            Add to Cart
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default ProductCard;
