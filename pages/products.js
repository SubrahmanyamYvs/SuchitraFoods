import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid2 as Grid,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    image: '/images/kandi.jpg',
    title: 'Product 1',
    description: 'This is a description of product 1.',
    price: 29.99,
    available: 10,
  },
  {
    id: 2,
    image: '/images/karam.jpg',
    title: 'Product 2',
    description: 'This is a description of product 2.',
    price: 49.99,
    available: 5,
  },
  {
    id: 3,
    image: '/images/nuvulla.jpg',
    title: 'Product 3',
    description: 'This is a description of product 3.',
    price: 49.99,
    available: 5,
  },
  {
    id: 4,
    image: '/images/karam.jpg',
    title: 'Product 4',
    description: 'This is a description of product 4.',
    price: 49.99,
    available: 5,
  },
  {
    id: 5,
    image: '/images/kandi.jpg',
    title: 'Product 1',
    description: 'This is a description of product 1.',
    price: 29.99,
    available: 10,
  },
  {
    id: 6,
    image: '/images/karam.jpg',
    title: 'Product 2',
    description: 'This is a description of product 2.',
    price: 49.99,
    available: 5,
  },
  {
    id: 7,
    image: '/images/nuvulla.jpg',
    title: 'Product 3',
    description: 'This is a description of product 3.',
    price: 49.99,
    available: 5,
  },
  {
    id: 8,
    image: '/images/karam.jpg',
    title: 'Product 4',
    description: 'This is a description of product 4.',
    price: 49.99,
    available: 5,
  },
  // More products...
];

const handleAddToCart = (productId) => {
  console.log(`Added product ${productId} to cart.`);
};

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    // Fetch the saved view mode from localStorage on component mount
    const savedViewMode = window.localStorage.getItem('viewMode');
    if (savedViewMode) {
      setViewMode(savedViewMode);
    }
  }, []);

  useEffect(() => {
    // Save the view mode to localStorage whenever it changes
    window.localStorage.setItem('viewMode', viewMode);
  }, [viewMode]);

  const handleViewToggle = (event, newViewMode) => {
    if (newViewMode !== null) {
      setViewMode(newViewMode);
    }
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ margin: '.5em 0', textAlign: 'center' }}>
        All Products
      </Typography>
      {/* Toggle Button for Grid/List View Switch */}
      <ToggleButtonGroup
        value={viewMode}
        exclusive
        onChange={handleViewToggle}
        aria-label="view mode"
        sx={{ marginBottom: 4 }}
      >
        <ToggleButton value="grid" aria-label="grid view">
          Grid
        </ToggleButton>
        <ToggleButton value="list" aria-label="list view">
          List
        </ToggleButton>
      </ToggleButtonGroup>
      <Grid container spacing={3} sx={{ justifyContent: 'center', mb: 2 }}>
        {products.map((product) => (
          <Grid
            item
            xs={12}
            sm={viewMode === 'grid' ? 6 : 12}
            md={viewMode === 'grid' ? 4 : 12}
            key={product.id}
          >
            <ProductCard
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              available={product.available}
              onAddToCart={() => handleAddToCart(product.id)}
              viewMode={viewMode}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsPage;
