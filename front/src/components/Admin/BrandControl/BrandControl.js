import BrandForm from "../FormComponent/BrandForm/BrandForm";
import BrandList from "../ListComponent/BrandList/BrandList";
import marketApi from "../../../api/watchServerApi";

function BrandControl() {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const brandsData = await getApiBrandList();
                setBrands(brandsData);
            } catch (error) {
                console.error('Failed to load brands:', error);
            }
        };

        marketApi.brandApi.getBrandList();
    }, []); 


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
                        <BrandList brands={brands} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandControl;