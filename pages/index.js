// pages/index.js
import React from 'react';
import About from '../components/About';

import SignatureProducts from '../components/SignatureProducts';
import Offers from '../components/Offers';
import Faqs from '../components/Faqs';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <SignatureProducts />
      <About />
      <Offers />
      <Faqs />
      <Testimonials />
      {/*
      <Special />
      <ContactUs /> */}
    </>
  );
};

export default Home;
