function BrandControl() {

    return(
        <div className="container container-box">
            <h3>Управление Брендами</h3>
            <div className="row">
                <div className="col-md-6">
                    <h4>Добавить бренд</h4>
                    <div className="alert alert-secondary">
                        <form className="row g-3 needs-validation">
                            <div className="col-12">
                                <label for="validationCustom01" className="form-label">Название бренда</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationCustom01"
                                    value="" 
                                    placeholder="CASIO"    
                                    required 
                                />
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-success" type="submit">Создать</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Список брендов</h4>
                    <div>
                        List categories
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandControl;