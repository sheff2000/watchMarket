import watchService from "../services/watchsService.js";
import Watch from "../models/watchModel.js";

const getAllWatchs = async (req, res, next) => {
    try {
        const result = await watchService.getWatchList();// await service . func of service();
        return res.status(200).json(result);
    } catch (err) {
        const error = new Error(err.message || "Internal server error");
        error.status = error.status || 500;
        return next(error);
    };
};

const add = async (req, res, next) => {
    console.log('controll add');
    try {

        const data = req.body.formData;
        console.log('NEW PRODUCT  - ', data)
        // валидация еще        
        const result = await watchService.addWatch(data);
        
        return res.status(200).json(result);
    } catch (err) {
        console.log('Error  - ', err);
        const error = new Error(err.debug || "Internal server error");
        error.status = error.status || 500;
        return next(error);
    };
};

const getWatchesByBrand = async (req, res, next) => {
    try {
        const brandId = req.params.brandId; 
        const watches = await Watch.getWatchesByBrand(brandId);
        res.status(200).json(watches);
    } catch (err) {
        console.error('Error retrieving watches by brand:', err);
        const error = new Error(err.message || "Internal server error");
        error.status = error.status || 500;
        return next(error);
    }
};

const watchControllers = {
    getAllWatchs,
    add,
    getWatchesByBrand,
};

export default watchControllers;
