// pages/index.js
import React from 'react';
import About from '../components/About';

import SignatureProducts from '../components/SignatureProducts';
const Home = () => {
  return (
    <>
      <SignatureProducts />
      <About />
      {/*
      <Special />
      <Order />
      <ContactUs /> */}
    </>
  );
};

export default Home;
