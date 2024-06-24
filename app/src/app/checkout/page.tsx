import React from 'react';
import Navbar from '../components/navbar/navbar';
import Check from '../components/checkout/checkout';
import Footer from '../components/footer/footer';

const Checkbox: React.FC = () => {
  return (
    <>
      <Navbar />
      <Check/>
      <Footer />
    </>
  );
}

export default Checkbox;
