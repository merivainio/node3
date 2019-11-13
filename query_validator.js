
const validateQuery = (req, res, next) => {
    const action = req.query.action;
    if (action && !(action === 'today' || action === 'tomorrow')) {
        //res.status(400).send('virheellinen action');
        const error = new Error();
        error.statusCode = 400;
        next(error);
    } 

    next();
}
 
module.exports = validateQuery;