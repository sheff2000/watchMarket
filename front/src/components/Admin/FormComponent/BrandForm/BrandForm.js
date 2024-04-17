import React, { useState } from 'react';
import marketApi from '../../../../api/watchServerApi';

function BrandForm({onAddBrandEvent}) {

    const [formData, setFormData] = useState({
        name: '',
        imageUrl: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const result = await marketApi.brandApi.addBrand(formData);
            onAddBrandEvent();
            console.log('Success:', result);
            setFormData({
                name: '',
                imageUrl: ''
            });
        } catch (error) {
            console.error('Failed to add brand:', error);
        }
    };


    return (
        <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-12">
                <label className="form-label">Название бренда</label>
                <input
                    type="text"
                    className='form-control'
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Brand Name"
                    required
                />
            </div>
            <div className="col-12">
                <label className="form-label">ссылка на фото</label>
                <input
                    type="text"
                    className='form-control'
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    placeholder="Image URL"
                />
            </div>
            <div className="col-12">
                <button type="submit" className='btn btn-outline-success'>Add Brand</button>
            </div>
            
        </form>
    );
}

export default BrandForm;