import React, { useEffect, useState } from 'react';
import marketApi from '../../../api/watchServerApi';
import { Routes, Route } from 'react-router-dom';
import NewProducts from '../Products/NewProducts/NewProducts';
import ProductDetails from '../Products/ProductDetails/ProductDetails';
import BrandList from '../CategoryList/BrandList/BrandList';

function Content() {

    const [brands, setBrands] = useState([]);
    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const brandsData = await marketApi.brandApi.getBrandList();
                setBrands(brandsData);
            } catch (error) {
                console.error('Failed to load brands:', error);
            }
        };

        fetchBrands();
    }, []); 

    const onClickBrandEvent = async (brandId) => {

    };

    return (
      <div className="">
        <Routes>
          <Route path="/" element={
            <>
              <BrandList brands={brands} onClickBrand={onClickBrandEvent}/>
              <NewProducts />
            </>
          } />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    );
  }
  export default Content;
  