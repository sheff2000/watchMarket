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

const updateWatch = async (id, data) => {
    try {
        const result = await Watch.updateWatch(id, data);
        console.log('update result - ', result);
        return result;
    } catch (err) {
        console.error('Error updating watch:', err);
        const error = new Error(err.message || "Internal server error");
        error.debug = `Error catch in update Watch Service. stack err - ${err.stack}`;
        error.status = err.status || 500;
        throw error;
    }
};


const watchService = {
    addWatch,
    getWatchList,
    deleteWatch,
    updateWatch,
};

export default watchService;