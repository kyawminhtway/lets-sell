const globalErrorHandler = (err, req, res, next) => {
    res.status(400).send({
        message: 'Gloabl error occurred.'
    });
};

export default globalErrorHandler;