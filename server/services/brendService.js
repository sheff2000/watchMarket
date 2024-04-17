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

const getBrendList = async () => {
    try {
        const result = await BrandWatch.getAllBrand();
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

const deleteBrand = async (id) => {
    try {
        const result = await BrandWatch.deleteBrand(id);
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
    getBrendList,
    deleteBrand,
};

export default brandService;