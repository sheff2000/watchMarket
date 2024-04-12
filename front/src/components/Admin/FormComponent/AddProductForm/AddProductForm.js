
function AddProductForm(){

    return(
        <form className="row g-3 needs-validation" novalidate>
            <div className="col-12">
                <label for="validationCustom01" className="form-label">Название модели</label>
                <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    value="" 
                    placeholder="Годинник Casio G-SHOCK Classic GA-110-1BER"    
                    required 
                />
                <div className="valid-feedback">
                good
                </div>
            </div>
            <div className="col-4">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                <label className="form-check-label" for="invalidCheck">
                    В наличии на складе
                </label>
                </div>
            </div>
            <div className="col-md-8">
                <label for="validationCustom10" className="form-label">Цена (грн)</label>
                <input type="text" className="form-control" id="validationCustom10" placeholder="99999" required />
                <div className="valid-feedback">
                Looks good!
                </div>
            </div>
            <div className="col-12">
                <label for="formFileMultiple" class="form-label">Загрузка фотографий</label>
                <input class="form-control" type="file" id="formFileMultiple" multiple required/>
                <div className="valid-feedback">
                file selected
                </div>
            </div>
            <div className="col-md-4">
                <label for="validationCustom08" className="form-label">Бренд</label>
                <select className="form-select" id="validationCustom08" required>
                    <option selected disabled value="">выбрать...</option>
                </select>
                <div className="valid-feedback">
                Looks good!
                </div>
            </div>
            <div className="col-md-8">
                <label for="validationCustom09" className="form-label">Коллекция</label>
                <input type="text" className="form-control" id="validationCustom09" placeholder="G-Shock" required />
                <div className="valid-feedback">
                Looks good!
                </div>
            </div>
            <div className="col-md-4">
                <label for="validationCustom02" className="form-label">Страна производитель</label>
                <select className="form-select" id="validationCustom02" required>
                    <option selected disabled value="">выбрать...</option>
                </select>
                <div className="valid-feedback">
                Looks good!
                </div>
            </div>
            <div className="col-md-8">
                <label for="validationCustom03" className="form-label">Добавить новую страну</label>
                <input type="text" className="form-control" id="validationCustom03" placeholder="Япония" required />
                <div className="valid-feedback">
                Looks good!
                </div>
            </div>
            <div className="col-md-4">
                <label for="validationCustom04" className="form-label">Пол</label>
                <select className="form-select" id="validationCustom04" required>
                    <option selected disabled value="">выбрать...</option>
                    <option value="man">Мужской</option>
                    <option value="girl">Женский</option>
                    <option value="uni">Унисекс</option>
                </select>
                <div className="valid-feedback">
                Looks good!
                </div>
            </div>
            <div className="col-md-8">
                <label for="validationCustom05" className="form-label">Цвет корпуса</label>
                <input type="text" className="form-control" id="validationCustom05" placeholder="Красный" required />
                <div className="valid-feedback">
                Looks good!
                </div>
            </div>
            <div className="col-md-4">
                <label for="validationCustom06" className="form-label">Механизм</label>
                <select className="form-select" id="validationCustom06" required>
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
                <select className="form-select" id="validationCustom07" required>
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
            <br/><br/>
            <div className="col-12">
                <button className="btn btn-outline-success" type="submit">Создать товар</button>
            </div>
            <br/>
            <hr/>
        </form>
    );
};

export default AddProductForm;