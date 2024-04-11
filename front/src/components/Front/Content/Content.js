import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HotTypeList from '../CategoryList/HotTypeList/HotTypeList';
import NewProducts from '../Products/NewProducts/NewProducts';
import ProductDetails from '../Products/ProductDetails/ProductDetails';

function Content() {
    return (
      <div className="container">
        <Routes>
          <Route path="/" element={
            <>
              <HotTypeList />
              <NewProducts />
            </>
          } />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    );
  }
  export default Content;
  