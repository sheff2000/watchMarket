import './BrandList.css';

function BrandList({ brands, onClickBrand}) {
    //brand-list-main-box
    // brand-list-section
    return (
       
            <div className='container text-center'>
                <div className='row brand-list-section'>
                    {brands.map((brand, index) => (
                        <div key={index} className='col-md-2 col-sm-4 brand-card sections-brands-card' onClick={() => onClickBrand(brand._id)}>   
                            <img src={brand.imageUrl} alt={brand.name} />
                        </div>
                    ))}
                </div>
            </div>
        
    );
};

export default BrandList;