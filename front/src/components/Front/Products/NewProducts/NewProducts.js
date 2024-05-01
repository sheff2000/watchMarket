import { useNavigate } from 'react-router-dom';
import './NewProducts.css';

function NewProducts({watches}) {
    const navigate = useNavigate();

    const handleClickCardWatch = (productId) => {
       navigate(`/product/${productId}`);
    };  

    return (
        <div className='watch-list-main-box'>
            <div className='container watch-list-section'>
                {watches.map((watch, index) => (
                    <div key={index} className='brand-card sections-watch-card' onClick={() => handleClickCardWatch(watch._id)}>
                        <div className='row'>
                            <span className='title-watch'>
                                {watch.nameWatch}
                            </span>
                            <div className='col-6'>
                                <img src={watch.imageUrl} alt={watch.name} />
                            </div>
                            <div className='col-6'>
                                <div className='options-watch'>
                                    <span className='type-option'>Гендер:</span>
                                    <span className='value-option'>{watch.gender}</span> <br/>
                                    <span className='type-option'>Цвет корпуса:</span>
                                    <span className='value-option'>{watch.caseColor}</span> <br/>
                                    <span className='type-option'>Механизм:</span>
                                    <span className='value-option'>{watch.mechanism}</span><br/>
                                    <span className='type-option'>Материал:</span>
                                    <span className='value-option'>{watch.material}</span><br/>
                                </div>
                                <div className='price-watch'>
                                    <span>Цена </span>
                                    <span className='value-price'>{watch.price} грн.</span>
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