import React, { useState } from 'react';
import AddProductForm from '../FormComponent/AddProductForm/AddProductForm';
import ProductList from '../ListComponent/ProductList/ProductList';

function ProductControl() {

    const [activeList, setActiveList] = useState('product_add');

    const handleButtonClick = (buttonName) => {
        setActiveList(buttonName);
    };

    const getActiveComponent = () => {
        switch (activeList) {
            case 'product_add':
                return <AddProductForm />;
            case 'product_list':
                return <ProductList />;
            default:
                return <AddProductForm />;
        }
      };

    return(
        <div className="container container-box ">
            <h3>Управление товарами</h3>
            <div>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button
                        type="button"
                        className={`btn btn-outline-primary ${activeList === 'product_list' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('product_list')}
                    >
                        Список часов
                    </button>
                    <button
                        type="button"
                        className={`btn btn-outline-primary ${activeList === 'product_add' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('product_add')}
                    >
                        Добавить часы
                    </button>
                </div>
            </div>
            <hr/>
            <div>
                {getActiveComponent()}
            </div>
        </div>
    );
}

export default ProductControl;