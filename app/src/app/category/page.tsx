import React from 'react';
import Navbar from '../components/navbar/navbar';
import Category from '../components/category/category';
import Footer from '../components/footer/footer';

const Page: React.FC = () => {
  return (
    <>
      <Navbar />
      <Category/>
      <Footer />
    </>
  );
}

export default Page;
