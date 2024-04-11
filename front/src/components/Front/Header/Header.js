import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link из react-router-dom

function Header() {
    return (
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    {/* Используем Link вместо a для навигации */}
                    <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        Watch Market
                    </Link>
            
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/" className="nav-link px-2 text-secondary">Головна</Link></li>
                        <li><Link to="/features" className="nav-link px-2 text-white">Бренди</Link></li>
                        <li><Link to="/pricing" className="nav-link px-2 text-white">Типи</Link></li>
                    </ul>
            
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search"
                            className="form-control form-control-dark text-bg-dark"
                            placeholder="Search..." aria-label="Search" />
                    </form>
            
                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">Admin</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
