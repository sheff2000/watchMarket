import React, { useState, useEffect } from 'react';
import marketApi from '../../../api/watchServerApi';
import AddProductForm from '../FormComponent/AddProductForm/AddProductForm';
import ProductList from '../ListComponent/ProductList/ProductList';

function ProductControl() {

    const [activeList, setActiveList] = useState('product_add');
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

    const fetchWatchs = async () => {
        try {
            const watchsData = await marketApi.watch.getWatchList();
            return watchsData;
        } catch (error) {
            console.error('Failed to load brands:', error);
        }
    };

    const handleButtonClick = (buttonName) => {
        setActiveList(buttonName);
    };

    const handleAddWatch = async (formData) => {
        try {
            await marketApi.watch.addWatch(formData);

        } catch (error) {
            console.error('Failed to delete brand:', error);
        }
    };

    const getActiveComponent = () => {
        switch (activeList) {
            case 'product_add':
                return <AddProductForm brands={brands} onSubmit={handleAddWatch}/>;
            case 'product_list':
                return <ProductList watchs={fetchWatchs} />;
            default:
                return <AddProductForm brands={brands} onSubmit={handleAddWatch}/>;
        }
      };

    return(
        <div className="container container-box ">
            <h3>Управление товарами</h3>
            <div>
                <div className="btn-group" role="group" aria-label="Basic outlined example">
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