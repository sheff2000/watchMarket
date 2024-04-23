import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderLight.css';

const NavigationBar = () => {
  return (
    <div className='container nav-container'>
        <div className='left-item'>
            <Link to="/" className="nav-main-link">
                Watch Market
            </Link>
        </div>
        <div className='right-item'>
            <Link to="/admin" className="btn btn-outline-dark">Admin</Link>
        </div>
    </div>
  );
};

export default NavigationBar;
