import React from 'react';
import Shop from '../shop/Shop';
import ProductList from '../Product/ProductList';

const Home = () => {
  return (
    <div className='mt-24 min-h-screen'>
      <div className="container mx-auto px-6 ">
        <Shop />

    <div className='py-16'>
      <ProductList/>
    </div>
      </div>
    </div>
  );
};

export default Home;
