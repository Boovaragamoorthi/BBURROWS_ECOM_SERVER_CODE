'use strict';

const express = require('express');
const {ShowProduct,ShowProductBYID} = require('../../controllers/NOADMIN/showproductController');

const router = express.Router();



router.get('/showProduct/:name', ShowProduct);
router.post('/showProducts/:id', ShowProductBYID);


module.exports = {
    routes: router
}