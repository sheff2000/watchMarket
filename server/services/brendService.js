import BrandWatch from '../models/brandModel.js';

const addBrand = async (data) => {
    try {
        const result = await BrandWatch.addBrand(data);
        console.log('add result - ', result);
        return result;
    }
    catch(err) {
        const error = new Error(err.message || `Internal server error`);
        error.debug = `Error catch in add Brand Service. stack err - ${err.stack}`;
        error.status = err.status || 500;
        throw (error);
    }
};


const brandService = {
    addBrand,
};

export default brandService;