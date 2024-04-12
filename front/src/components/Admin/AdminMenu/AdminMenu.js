import React, { useState } from 'react';
import './AdminMenu.css';

function AdminMenu() {

    const [activeButton, setActiveButton] = useState('1');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return(
       <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
            <button
                type="button"
                className={`btn btn-outline-light ${activeButton === '1' ? 'active' : ''}`}
                onClick={() => handleButtonClick('1')}
            >
                Управление товарами
            </button>
            <button
                type="button"
                className={`btn btn-outline-light ${activeButton === '2' ? 'active' : ''}`}
                onClick={() => handleButtonClick('2')}
            >
                Список категорий
            </button>
            <button
                type="button"
                className={`btn btn-outline-light ${activeButton === '3' ? 'active' : ''}`}
                onClick={() => handleButtonClick('3')}
            >
                Список Брендов
            </button>
            <button
                type="button"
                className={`btn btn-outline-light ${activeButton === '4' ? 'active' : ''}`}
                onClick={() => handleButtonClick('4')}
            >
                Список типов часов
            </button>
        </div>
    );
}

export default AdminMenu;