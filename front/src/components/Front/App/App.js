import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';

function AppMarket() {
  return (
    <div className='fix-foot d-flex flex-column h-100'>
        <Header />
        <Content />
        <Footer />
    </div>
  );
}
export default AppMarket;