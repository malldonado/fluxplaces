import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Search from '../components/search/search';

const Page: React.FC = () => {
  return (
    <>
      <Navbar />
      <Search/>
      <Footer />
    </>
  );
}

export default Page;
