import React, { useEffect, useState } from 'react';
import BrandForm from "../FormComponent/BrandForm/BrandForm";
import BrandList from "../ListComponent/BrandList/BrandList";
import marketApi from "../../../api/watchServerApi";

function BrandControl() {
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

    const handleAddBrand = async () => {
        const brandsData = await marketApi.brandApi.getBrandList();
        setBrands(brandsData);
    };

    const handleDeleteBrand = async (brandId) => {
        try {
            await marketApi.brandApi.deleteBrand(brandId);
            setBrands(prevBrands => prevBrands.filter(brand => brand._id !== brandId));
        } catch (error) {
            console.error('Failed to delete brand:', error);
        }
    };


    return(
        <div className="container container-box">
            <h3>Управление Брендами</h3>
            <div className="row">
                <div className="col-md-6">
                    <h4>Добавить бренд</h4>
                    <div className="alert alert-secondary">
                        <BrandForm  onAddBrandEvent={handleAddBrand}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Список брендов</h4>
                    <div>
                        <BrandList brands={brands} onDeleteBrand={handleDeleteBrand} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandControl;