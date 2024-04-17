import brandService from '../services/brendService.js';

// контроллеры для маршрутов по работе с брендами
const addBrend = async (req, res, next) => {
    console.log('controll add');
    try {

        const data = req.body.formData;
        // валидация еще        
        const result = await brandService.addBrand(data);
        
        return res.status(200).json(result);
    } catch (err) {
        console.log('Error  - ', err);
        const error = new Error(err.debug || "Internal server error");
        error.status = error.status || 500;
        return next(error);
    };
};

const getBrendList = async (req, res, next) => {
    console.log('controll add');
    try {

        const result = await brandService.getBrendList();
        
        return res.status(200).json(result);
    } catch (err) {
        console.log('Error  - ', err);
        const error = new Error(err.debug || "Internal server error");
        error.status = error.status || 500;
        return next(error);
    };
};


const brandController = {
    addBrend,
    getBrendList,
};

export default brandController;