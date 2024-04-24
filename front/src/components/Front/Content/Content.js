import React, { useEffect, useState } from 'react';
import marketApi from '../../../api/watchServerApi';
import { Routes, Route } from 'react-router-dom';
import NewProducts from '../Products/NewProducts/NewProducts';
import ProductDetails from '../Products/ProductDetails/ProductDetails';
import BrandList from '../CategoryList/BrandList/BrandList';
import './Content.css';

function Content() {

    const [titlePage, setTitlePage] = useState('Топ годинники');
    const [watches, setWatches] = useState([]);
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

    // Функция для загрузки и обновления списка часов
    //const fetchWatches = async () => {
    //    try {
    //        const watchesData = await marketApi.watch.getWatchList();
    //        setWatches(watchesData);
    //    } catch (error) {
    //        console.error('Failed to load watches:', error);
    //    }
    //};

    const onClickBrandEvent = async (brandId) => {
        try {
          const watchesData = await marketApi.watch.getWatchBrandList(brandId);
          console.log('wathc brand - ',watchesData);
          const brand = brands.find(brand => brand._id === brandId);
          const brandName = brand ? brand.name : 'Топ годинники';
        
          setTitlePage(`Годинники ${brandName}`); // Установка заголовка страницы
          setWatches(watchesData);
        } catch (error) {
            console.error('Failed to delete brand:', error);
        }
    };

    return (
      <div className="">
        <Routes>
          <Route path="/" element={
            <>
              <BrandList brands={brands} onClickBrand={onClickBrandEvent}/>
              <h1 className='container'>{titlePage}</h1>
              <NewProducts watches={watches}/>
            </>
          } />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    );
  }
  export default Content;
  