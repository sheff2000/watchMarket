import BrandForm from "../FormComponent/BrandForm/BrandForm";

function BrandControl() {

    return(
        <div className="container container-box">
            <h3>Управление Брендами</h3>
            <div className="row">
                <div className="col-md-6">
                    <h4>Добавить бренд</h4>
                    <div className="alert alert-secondary">
                        <BrandForm />
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