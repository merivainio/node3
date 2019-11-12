const express = require('express');
const app = express();
const port = 3000;
const morgan= require('morgan');
const validate = require('./query_validator.js');
const errorHandler = require('./error_handler.js');

app.use(morgan('dev '));

val = validate.validateQuery();

app.get('/menus', (req, res, val) => {
    val;
}, (req, res) => {
    res.send('Hello from B!')

    consterr = new Error(`Invalidaction`);
    err.statusCode= 400;
    next(err);
})
app.use(errorHandler.errorHandler());


app.listen(3000, () => 
console.log(`Server listening on ${port}!`))