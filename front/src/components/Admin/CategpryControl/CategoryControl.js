function CategoryControl() {

    return(
        <div className="container container-box">
            <h3>Управление категориями</h3>
            <div className="row">
                <div className="col-md-6">
                    <h4>Добавить катгеорию</h4>
                    <div className="alert alert-secondary">
                        <form className="row g-3 needs-validation">
                            <div className="col-12">
                                <label for="validationCustom01" className="form-label">Название категории</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationCustom01"
                                    value="" 
                                    placeholder="Швейцарские часы"    
                                    required 
                                />
                            </div>
                            <div className="col-md-4">
                                <label for="validationCustom02" className="form-label">Выбрать опцию</label>
                                <select className="form-select" id="validationCustom02" required>
                                    <option selected disabled value="">выбрать...</option>
                                    <option value="country">Страна производитель</option>
                                    <option value="homan">Пол</option>
                                    <option value="typeRun">Mеханизм</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label for="validationCustom03" className="form-label">Значение опции</label>
                                <select className="form-select" id="validationCustom03" required>
                                    <option selected disabled value="">выбрать...</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-success" type="submit">Создать категорию</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Список созданных категорий</h4>
                    <div>
                        List categories
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryControl;