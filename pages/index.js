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
      <Order />
      <Special />
      <ContactUs /> */}
    </>
  );
};

export default Home;
