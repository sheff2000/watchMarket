import Watch from "../models/watchModel.js";

const addWatch = async (data) => {
    try {
        const result = await Watch.addWatch(data);
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

const getWatchList = async () => {
    try {
        const result = await Watch.getAllWatch();
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

const deleteWatch = async (id) => {
    try {
        const result = await Watch.deleteWatch(id);
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


const watchService = {
    addWatch,
    getWatchList,
    deleteWatch,
};

export default watchService;