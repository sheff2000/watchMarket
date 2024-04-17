// центральный обработчик всех ошибок
// в случаи любой ошибки - попадем сюда и отправляем на фронт статус-код + инфу рпо ошибку
export const errorOperation = (err, req, res, next) => {
    console.error(err.debug); 
    if (process.env.NODE_ENV === 'production') {
        res.status(err.status || 500).json({ message: err.message || "Internal server error" });
    } else {
        res.status(err.status || 500).json({ message: err.message, stack: err.stack, debug: err.debug });
    }
};
