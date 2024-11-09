import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid2 as Grid,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import Head from 'next/head';
import ProductCard from '../components/ProductCard';

export const products = [
  {
    product_id: 'SF-01',
    product_name: 'Kandi Podi',
    product_image: '/images/kandi.jpg',
    product_description:
      'Our Kandi Podi blends high-quality lentils with rich, savory flavor. Perfect with mango, tomato, or Gongura pickles, it enhances rice and ghee with a comforting taste.',
    best_used_for:
      'Mixing with rice, ghee, and pickles or as a flavorful topping for dosa and idli.',
    quantities_available: ['100gms', '250gms', '500gms', '1KG'],
    prices: {
      '100gms': 150,
      '250gms': 175,
      '500gms': 300,
      '1KG': 575,
    },
    discountedPrices: {
      '100gms': 125,
      '250gms': 150,
      '500gms': 275,
      '1KG': 525,
    },
    ingredients: [
      'Lentils',
      'Chili powder',
      'Salt',
      'Cumin seeds',
      'Garlic powder',
    ],
    nutritionalInfo: {
      calories: '50 kcal',
      protein: '4g',
      fat: '1g',
      carbohydrates: '8g',
      fiber: '2g',
      sodium: '150mg',
    },
  },
  {
    product_id: 'SF-02',
    product_name: 'Nuvvula Podi',
    product_image: '/images/nuvulla.jpg',
    product_description:
      'Finely ground from roasted sesame seeds, this podi adds a nutty richness and health benefits. A sprinkle transforms simple dishes with depth and a hint of sesame.',
    best_used_for:
      'Mixing with rice, seasoning salads, or adding richness to curries.',
    quantities_available: ['100gms', '250gms', '500gms', '1KG'],
    prices: {
      '100gms': 150,
      '250gms': 175,
      '500gms': 300,
      '1KG': 575,
    },
    discountedPrices: {
      '100gms': 125,
      '250gms': 150,
      '500gms': 275,
      '1KG': 525,
    },
    ingredients: [
      'Lentils',
      'Chili powder',
      'Salt',
      'Cumin seeds',
      'Garlic powder',
    ],
    nutritionalInfo: {
      calories: '50 kcal',
      protein: '4g',
      fat: '1g',
      carbohydrates: '8g',
      fiber: '2g',
      sodium: '150mg',
    },
  },
  {
    product_id: 'SF-03',
    product_name: 'Palli Podi',
    product_image: '/images/kandi.jpg',
    product_description:
      'Bold, nutty, and packed with flavor, our Palli Podi uses premium peanuts ground to perfection. It brings a satisfying crunch and a touch of protein to any meal.',
    best_used_for:
      'Rice dishes, chutneys, or as a crunchy side for breakfast dishes like idli and dosa.',
    quantities_available: ['100gms', '250gms', '500gms', '1KG'],
    prices: {
      '100gms': 150,
      '250gms': 175,
      '500gms': 300,
      '1KG': 575,
    },
    discountedPrices: {
      '100gms': 125,
      '250gms': 150,
      '500gms': 275,
      '1KG': 525,
    },
    ingredients: [
      'Lentils',
      'Chili powder',
      'Salt',
      'Cumin seeds',
      'Garlic powder',
    ],
    nutritionalInfo: {
      calories: '50 kcal',
      protein: '4g',
      fat: '1g',
      carbohydrates: '8g',
      fiber: '2g',
      sodium: '150mg',
    },
  },
  {
    product_id: 'SF-04',
    product_name: 'Karam Podi/Idli Karam',
    product_image: '/images/karam.jpg',
    product_description:
      'Spicy and smoky, this chili powder packs an intense flavor, ideal for adding heat. Made in a clean environment, it’s a delicious way to spice up your breakfast dishes or curries.',
    best_used_for: 'Pairing with ghee on idli, dosa, or upma.',
    quantities_available: ['100gms', '250gms', '500gms', '1KG'],
    prices: {
      '100gms': 150,
      '250gms': 175,
      '500gms': 300,
      '1KG': 575,
    },
    discountedPrices: {
      '100gms': 125,
      '250gms': 150,
      '500gms': 275,
      '1KG': 525,
    },
    ingredients: [
      'Lentils',
      'Chili powder',
      'Salt',
      'Cumin seeds',
      'Garlic powder',
    ],
    nutritionalInfo: {
      calories: '50 kcal',
      protein: '4g',
      fat: '1g',
      carbohydrates: '8g',
      fiber: '2g',
      sodium: '150mg',
    },
  },
  {
    product_id: 'SF-05',
    product_name: 'Kobbari Podi',
    product_image: '/images/nuvulla.jpg',
    product_description:
      'Sun-dried coconut creates this creamy, naturally sweet podi. Bringing tropical flavors of South India, it enriches every bite with a homemade touch.',
    best_used_for:
      'Adding depth to rice, curries, vegetable dishes, or topping idli and dosa.',
    quantities_available: ['100gms', '250gms', '500gms', '1KG'],
    prices: {
      '100gms': 150,
      '250gms': 175,
      '500gms': 300,
      '1KG': 575,
    },
    discountedPrices: {
      '100gms': 125,
      '250gms': 150,
      '500gms': 275,
      '1KG': 525,
    },
    ingredients: [
      'Lentils',
      'Chili powder',
      'Salt',
      'Cumin seeds',
      'Garlic powder',
    ],
    nutritionalInfo: {
      calories: '50 kcal',
      protein: '4g',
      fat: '1g',
      carbohydrates: '8g',
      fiber: '2g',
      sodium: '150mg',
    },
  },
  {
    product_id: 'SF-06',
    product_name: 'Putnalu Podi',
    product_image: '/images/karam.jpg',
    product_description:
      'Lightly nutty and made from roasted chickpeas, this podi is packed with protein and crunch, making healthy eating delicious and easy.',
    best_used_for:
      'Mixing with rice and ghee or topping your favorite breakfast dishes.',
    quantities_available: ['100gms', '250gms', '500gms', '1KG'],
    prices: {
      '100gms': 150,
      '250gms': 175,
      '500gms': 300,
      '1KG': 575,
    },
    discountedPrices: {
      '100gms': 125,
      '250gms': 150,
      '500gms': 275,
      '1KG': 525,
    },
    ingredients: [
      'Lentils',
      'Chili powder',
      'Salt',
      'Cumin seeds',
      'Garlic powder',
    ],
    nutritionalInfo: {
      calories: '50 kcal',
      protein: '4g',
      fat: '1g',
      carbohydrates: '8g',
      fiber: '2g',
      sodium: '150mg',
    },
  },
  {
    product_id: 'SF-07',
    product_name: 'Kura Podi',
    product_image: '/images/nuvulla.jpg',
    product_description:
      'A special blend of spices, Kura Podi infuses curries and vegetable dishes with warmth and depth. This spice mix captures the traditional flavors of Andhra and Telangana.',
    best_used_for:
      'Flavoring vegetable curries, enhancing gravies, and adding aroma to stir-fries.',
    quantities_available: ['100gms', '250gms', '500gms', '1KG'],
    prices: {
      '100gms': 150,
      '250gms': 175,
      '500gms': 300,
      '1KG': 575,
    },
    discountedPrices: {
      '100gms': 125,
      '250gms': 150,
      '500gms': 275,
      '1KG': 525,
    },
    ingredients: [
      'Lentils',
      'Chili powder',
      'Salt',
      'Cumin seeds',
      'Garlic powder',
    ],
    nutritionalInfo: {
      calories: '50 kcal',
      protein: '4g',
      fat: '1g',
      carbohydrates: '8g',
      fiber: '2g',
      sodium: '150mg',
    },
  },
];

const handleAddToCart = (productId) => {
  console.log(`Added product ${productId} to cart.`);
};

const ProductsPage = () => {
  // const [viewMode, setViewMode] = useState('grid');
  const viewMode = 'grid';
  // useEffect(() => {
  //   // Fetch the saved view mode from localStorage on component mount
  //   const savedViewMode = window.localStorage.getItem('viewMode');
  //   if (savedViewMode) {
  //     setViewMode(savedViewMode);
  //   }
  // }, []);

  // useEffect(() => {
  //   // Save the view mode to localStorage whenever it changes
  //   window.localStorage.setItem('viewMode', viewMode);
  // }, [viewMode]);

  // const handleViewToggle = (event, newViewMode) => {
  //   if (newViewMode !== null) {
  //     setViewMode(newViewMode);
  //   }
  // };

  return (
    <>
      <Head>
        <title> Products| Suchitra Foods</title>
        <meta name="description" content={`Suchitra Foods`} />
        <meta property="og:title" content={`Products | Suchitra Foods`} />
        <meta property="og:description" content={`Suchitra Foods`} />
        <meta
          property="og:url"
          content={`https://www.suchitrafoods.com/products`}
        />
      </Head>
      <Container>
        <Typography variant="h4" sx={{ margin: '.5em 0', textAlign: 'center' }}>
          All Products
        </Typography>
        {/* Toggle Button for Grid/List View Switch */}
        {/* <ToggleButtonGroup
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
        </ToggleButtonGroup> */}
        <Grid container spacing={3} sx={{ justifyContent: 'center', mb: 2 }}>
          {products.map((product) => (
            <Grid
              item
              xs={12}
              sm={viewMode === 'grid' ? 6 : 12}
              md={viewMode === 'grid' ? 4 : 12}
              key={product.id}
            >
              <ProductCard product={product} viewMode={viewMode} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ProductsPage;
