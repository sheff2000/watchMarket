import React from 'react';
import './NavBar.css';

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Watch Market</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">Главная</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admin">Админ-панель</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
