import './NewProducts.css';

function NewProducts({watches}) {
    return (
        <div className='brand-list-main-box'>
            <div className='brand-list-section'>
                {watches.map((watch, index) => (
                    <div key={index} className='brand-card sections-brands-card'>   
                        <img src={watch.imageUrl} alt={watch.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewProducts;