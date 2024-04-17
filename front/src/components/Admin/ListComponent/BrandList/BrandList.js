import React from 'react';

function BrandList({ brands, onDeleteBrand }) {
    
    console.log(brands);
    return (
        <ul>
            {brands.map((brand, index) => (
                <li key={index}>
                    {brand.name} <br/>
                    <img src={brand.imageUrl} alt={brand.name} style={{ width: '100px' }} />
                    <span className='btn btn-outline-danger' onClick={() => onDeleteBrand(brand._id)}>Удалить</span>
                </li>
            ))}
        </ul>
    );
}


export default BrandList;