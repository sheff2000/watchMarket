const getAllWatchs = async (req, res, next) => {
    try {
        const result = [];// await service . func of service();
        return res.status(200).json(result);
    } catch (err) {
        const error = new Error(err.message || "Internal server error");
        error.status = error.status || 500;
        return next(error);
    };
};

const watchControllers = {
    getAllWatchs,
};

export default watchControllers;
