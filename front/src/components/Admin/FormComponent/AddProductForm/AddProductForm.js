import React, { useState } from 'react';

function AddProductForm({ brands, onSubmit }) {
    const [formData, setFormData] = useState({
        nameWatch: '',
        inStock: false,
        price: '',
        imageUrl: '',
        gender: '',
        caseColor: '',
        mechanism: '',
        material: '',
        brand: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            nameWatch: '',
            inStock: false,
            price: '',
            imageUrl: '',
            gender: '',
            caseColor: '',
            mechanism: '',
            material: '',
            brand: ''
        });
    };

    return (
        <form className="row g-3" onSubmit={handleSubmit} noValidate>
            <div className="col-12">
                <label htmlFor="validationCustom01" className="form-label">Название модели</label>
                <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    name="nameWatch"
                    value={formData.modelName}
                    onChange={handleChange}
                    placeholder="Годинник Casio G-SHOCK Classic GA-110-1BER"
                    required 
                />
            </div>
            <div className="col-4">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="inStock" checked={formData.inStock} onChange={handleChange} id="invalidCheck" required />
                    <label className="form-check-label" htmlFor="invalidCheck">
                        В наличии на складе
                    </label>
                </div>
            </div>
            <div className="col-md-8">
                <label htmlFor="validationCustom10" className="form-label">Цена (грн)</label>
                <input type="text" className="form-control" id="validationCustom10" name="price" value={formData.price} onChange={handleChange} placeholder="99999" required />
            </div>
            <div className="col-12">
                <label htmlFor="formFileMultiple" className="form-label">Ссылки на фотографии (разделённые ';')</label>
                <textarea className="form-control" id="formFileMultiple" name="imageUrl" value={formData.photoUrls} onChange={handleChange} required></textarea>
            </div>
            <div className="col-md-6">
                <label for="validationCustom04" className="form-label">Пол</label>
                <select className="form-select" id="validationCustom04" name='gender' value={formData.gender} onChange={handleChange} required>
                    <option selected disabled value="">выбрать...</option>
                    <option value="man">Мужской</option>
                    <option value="girl">Женский</option>
                    <option value="uni">Унисекс</option>
                </select>
                <div className="valid-feedback">
                Looks good!
                </div>
            </div>
            <div className="col-md-6">
                <label for="validationCustom05" className="form-label">Цвет корпуса</label>
                <input type="text" className="form-control" id="validationCustom05" name="caseColor" value={formData.caseColor} onChange={handleChange} placeholder="Красный" required />

                <div className="valid-feedback">
                Looks good!
                </div>
            </div>
            <div className="col-md-4">
                <label htmlFor="validationCustom04" className="form-label">Бренд</label>
                <select className="form-select" id="validationCustom04" name="brand" value={formData.brand} onChange={handleChange} required>
                    <option selected disabled value="">выбрать...</option>
                    {brands.map(brand => (
                        <option key={brand._id} value={brand._id}>{brand.name}</option>
                    ))}
                </select>
            </div>
            <div className="col-md-4">
                <label for="validationCustom06" className="form-label">Механизм</label>
                <select className="form-select" id="validationCustom06" name="mechanism" value={formData.mechanism} onChange={handleChange} required>
                    <option selected disabled value="">выбрать...</option>
                    <option value="autokvarc">Автокварцевый</option>
                    <option value="kvarc">Кварц</option>
                    <option value="automanual">Механика с автоподзаводом</option>
                    <option value="manual">Механика</option>
                </select>
                <div className="valid-feedback">
                Looks good!
                </div>
            </div>
            <div className="col-md-8">
                <label for="validationCustom07" className="form-label">Материал</label>
                <select className="form-select" id="validationCustom07" name="material" value={formData.material} onChange={handleChange} required>
                    <option selected disabled value="">выбрать...</option>
                    <option value="autokvarc">Каучук</option>
                    <option value="kvarc">Керамика</option>
                    <option value="automanual">Нейлон</option>
                    <option value="manual">Титан</option>
                </select>
                <div className="valid-feedback">
                Looks good!
                </div>
            </div>
            <div className="col-12">
                <button className="btn btn-outline-success" type="submit">Создать товар</button>
            </div>
        </form>
    );
}

export default AddProductForm;
