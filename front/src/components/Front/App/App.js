import React from 'react';
import './App.css';
//import Header from '../Header/Header';
import HeaderLight from '../HeaderLight/HeaderLight';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';

function AppMarket() {
  return (
    <div className=''>
        <HeaderLight />
        <hr />
        <Content />
        <Footer />
    </div>
  );
}
export default AppMarket;