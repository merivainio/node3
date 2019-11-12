const express = require('express');

const validateQuery = function(req, res, next) {
    const action = req.action;
    if (!action) {
        next();
    } else if (action != 'today' || 'tomorrow') {
        res.status(400).send();
    }

}
 
module.exports = validateQuery;