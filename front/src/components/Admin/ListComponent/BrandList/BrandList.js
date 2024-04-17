import React from 'react';

function BrandList({ brands }) {
    return (
        <ul>
            {brands.map((brand, index) => (
                <li key={index}>
                    {brand.name} - <img src={brand.imageUrl} alt={brand.name} style={{ width: '50px', height: '50px' }} />
                </li>
            ))}
        </ul>
    );
}


export default BrandList;