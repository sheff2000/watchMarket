import './NewProducts.css';

function NewProducts({watches}) {
    return (
        <div className='watch-list-main-box'>
            <div className='container watch-list-section'>
                {watches.map((watch, index) => (
                    <div key={index} className='brand-card sections-watch-card'>
                        <div className='row'>
                            <span className='title-watch'>
                                {watch.nameWatch}
                            </span>
                            <div className='col-6'>
                                <img src={watch.imageUrl} alt={watch.name} />
                            </div>
                            <div className='col-6 options-watch'>
                                <span>Гендер:</span> <span>{watch.gender}</span> 
                                <span>Цвет корпуса:</span> <span>{watch.caseColor}</span>
                                <span>Механизм:</span> <span>{watch.mechanism}</span>
                                <span>Материал:</span> <span>{watch.material}</span>
                                <div className='price-watch'>
                                    <span>Цена </span><span>{watch.price} грн.</span>
                                </div>
                            </div>
                        </div>   
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewProducts;