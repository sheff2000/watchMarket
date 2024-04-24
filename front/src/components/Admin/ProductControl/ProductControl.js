import React, { useState, useEffect } from 'react';
import marketApi from '../../../api/watchServerApi';
import AddProductForm from '../FormComponent/AddProductForm/AddProductForm';
import ProductList from '../ListComponent/ProductList/ProductList';

function ProductControl() {
    const [activeList, setActiveList] = useState('product_add');
    const [brands, setBrands] = useState([]);
    const [watches, setWatches] = useState([]);
    const [editingWatch, setEditingWatch] = useState(null); // Новое состояние для хранения данных редактируемого товара

    // Загрузка брендов и часов
    useEffect(() => {
        const fetchData = async () => {
            try {
                const brandsData = await marketApi.brandApi.getBrandList();
                setBrands(brandsData);
                const watchesData = await marketApi.watch.getWatchList();
                setWatches(watchesData);
            } catch (error) {
                console.error('Failed to load data:', error);
            }
        };
        fetchData();
    }, []);

    const handleDeleteWatch = async (id) => {
        try {
            await marketApi.watch.deleteWatch(id);
            setWatches(watches.filter(watch => watch._id !== id));
        } catch (error) {
            console.error('Failed to delete watch:', error);
        }
    };

    const handleEditWatch = (watch) => {
        setEditingWatch(watch); 
        setActiveList('product_add'); 
    };

    const handleAddWatch = async (formData) => {
        try {
            if (editingWatch) {
                await marketApi.watch.updateWatch(editingWatch._id, formData);
            } else {
                await marketApi.watch.addWatch(formData);
            }
            setEditingWatch(null); 
            setActiveList('product_list'); 
            const watchesData = await marketApi.watch.getWatchList();
            setWatches(watchesData);
        } catch (error) {
            console.error('Failed to add/update watch:', error);
        }
    };

    const getActiveComponent = () => {
        switch (activeList) {
            case 'product_add':
                return <AddProductForm brands={brands} onSubmit={handleAddWatch} formData={editingWatch} />;
            case 'product_list':
                return <ProductList watches={watches} onDelete={handleDeleteWatch} onEdit={handleEditWatch} />;
            default:
                return <AddProductForm brands={brands} onSubmit={handleAddWatch} formData={editingWatch} />;
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
                        onClick={() => setActiveList('product_list')}
                    >
                        Список часов
                    </button>
                    <button
                        type="button"
                        className={`btn btn-outline-primary ${activeList === 'product_add' ? 'active' : ''}`}
                        onClick={() => setActiveList('product_add')}
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
