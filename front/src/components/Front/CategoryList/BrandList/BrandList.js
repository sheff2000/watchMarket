import './BrandList.css';

function BrandList({ brands, onClickBrand}) {
    return (
        <div className='brand-list-main-box'>
            <div className='brand-list-section'>
                {brands.map((brand, index) => (
                    <div key={index} className='brand-card sections-brands-card'>   
                        <img src={brand.imageUrl} alt={brand.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandList;