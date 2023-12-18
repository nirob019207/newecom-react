// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './components/layout/Layout';
import ProductList from './components/Product/ProductList';
import Cart from './components/cart/Cart';

function App() {
  return (
    <div className="min-h-screen">
      <Layout>
       <div className='container mx-auto px-6'>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList/>} />
          <Route path="/cart" element={<Cart/>} />
          {/* Add more routes as needed */}
        </Routes>
       </div>
      </Layout>
    </div>
  );
}

export default App;
