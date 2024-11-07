// FAQ.js

import React from 'react';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
  // Sample FAQs
  const faqs = [
    {
      question: 'What is the estimated delivery time?',
      answer:
        'Delivery times vary by location, but most orders are delivered within 3-5 business days.',
    },
    {
      question: 'Are your products suitable for vegetarians?',
      answer:
        'Yes, all of our products are made from vegetarian-friendly ingredients.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards, debit cards, and digital payment options.',
    },
    {
      question: 'How do I track my order?',
      answer:
        'Once your order ships, we’ll send you a tracking link via email or SMS.',
    },
    {
      question: 'Can I return a product?',
      answer:
        'Yes, we offer a 30-day return policy. Please contact customer support for more details.',
    },
    {
      question: 'What is your commitment to sustainability?',
      answer:
        'We prioritize environmentally-friendly practices in our product development and packaging to reduce our carbon footprint.',
    },
    {
      question: 'What materials are used in packaging?',
      answer:
        'Our packaging is eco-friendly, biodegradable, and designed to minimize environmental impact while ensuring product quality.',
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Box>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ backgroundColor: '#f9f9f9', my: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      {/* Sustainability Section */}
      <Box
        sx={{ mt: 6, p: 2, backgroundColor: '#FFF6E5', borderRadius: '8px' }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Our Commitment to Sustainability
        </Typography>
        <Typography variant="body1" align="center">
          We are committed to minimizing our environmental footprint. Our
          products are crafted with sustainability in mind, using responsibly
          sourced materials. Our goal is to reduce waste, conserve resources,
          and contribute to a healthier planet.
        </Typography>
      </Box>

      {/* Packaging Information Section */}
      <Box
        sx={{ mt: 6, p: 2, backgroundColor: '#E7F6E7', borderRadius: '8px' }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Packaging Information
        </Typography>
        <Typography variant="body1" align="center">
          We use eco-friendly packaging that is biodegradable and recyclable.
          Each product is packaged with care to ensure minimal environmental
          impact while maintaining quality and freshness.
        </Typography>
      </Box>
    </Container>
  );
};

export default Faq;
