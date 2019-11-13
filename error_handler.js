const errorHandler = (err, req, res, next) => {
    if (err.statusCode || err.statusCode != 500) {
        res.status(err.statusCode).send(err.message);
    } else  {
        res.status(500).send('Palvelimella tapahtui virhe');
        }
}

module.exports = errorHandler;