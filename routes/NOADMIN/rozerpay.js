'use strict';

const express = require('express');
const {OrdersControll,OrdersControllpost} = require('../../controllers/NOADMIN/ordersController.js');

const router = express.Router();



router.get('/order', OrdersControll);
router.post('/capture/:paymentId', OrdersControllpost);


module.exports = {
    routes: router,
}