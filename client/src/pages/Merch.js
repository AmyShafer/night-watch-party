import React from 'react';
import ProductList from '../components/merch/ProductList/index.js';
import CategoryMenu from '../components/merch/CategoryMenu/index.js';
import Cart from '../components/merch/Cart/index.js';

const Merch = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Merch;