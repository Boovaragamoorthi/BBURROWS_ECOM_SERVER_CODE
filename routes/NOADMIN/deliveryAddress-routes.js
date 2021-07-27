'use strict'

const express = require('express');
const router = express.Router();
const {PostNewAddress,} = require('../../controllers/NOADMIN/deliverycontrollers.js');

router.post('/PostNewAddress', PostNewAddress);
// router.get('/getCategories', GetCategories);
// router.delete('/deletecategories/:id', DeleteCategories);

module.exports ={
    routes:router
}