import React, { useState } from 'react';
import './AdminMenu.css';

// основное админ-меню
// с родителя получаем какое меню будет активно на старте
// по клику на меню - передаем родителю на какой пункт нажали
function AdminMenu({nowActiveBtn, onActiveBtnChange}) {

    const [activeButton, setActiveButton] = useState(nowActiveBtn);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        onActiveBtnChange(buttonName);
    };

    return(
       <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
            <button
                type="button"
                className={`btn btn-outline-light ${activeButton === 'control_product' ? 'active' : ''}`}
                onClick={() => handleButtonClick('control_product')}
            >
                Управление товарами
            </button>
            <button
                type="button"
                className={`btn btn-outline-light ${activeButton === 'control_category' ? 'active' : ''}`}
                onClick={() => handleButtonClick('control_category')}
            >
                Список категорий
            </button>
            <button
                type="button"
                className={`btn btn-outline-light ${activeButton === 'control_brand' ? 'active' : ''}`}
                onClick={() => handleButtonClick('control_brand')}
            >
                Список Брендов
            </button>
            <button
                type="button"
                className={`btn btn-outline-light ${activeButton === 'control_type' ? 'active' : ''}`}
                onClick={() => handleButtonClick('control_type')}
            >
                Список типов часов
            </button>
        </div>
    );
}

export default AdminMenu;