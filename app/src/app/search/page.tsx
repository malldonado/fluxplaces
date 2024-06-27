import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Search from '../components/search/search';

const SearchPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Search/>
      <Footer />
    </>
  );
}

export default SearchPage;
