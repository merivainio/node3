const express = require('express');
const app = express();
const port = 3000;
const morgan= require('morgan');
const fetch = require('node-fetch');
const validate = require('./query_validator');
const errorHandler = require('./error_handler');
const parser = require('./foodco_parser')
const url = 'https://www.fazerfoodco.fi/modules/json/json/Index?costNumber=0083&language=fi';

app.use(morgan('dev'));

app.get('/menus', validate, async (req, res) => {
    try {
    const APIresponse = await fetch(url);
    const data = await APIresponse.json();
    res.send(parser.parseData(data, req.query.action ));

    } catch (e) {
    e.statusCode = 503;
    next(e);
    }
});

app.use(errorHandler);


app.listen(3000, () => 
console.log(`Server listening on ${port}!`))