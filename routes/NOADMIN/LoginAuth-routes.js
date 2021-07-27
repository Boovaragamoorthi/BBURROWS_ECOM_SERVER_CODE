'use strict';

const express = require('express');
const {Register,Login} = require('../../controllers/NOADMIN/LoginAuthController.js');

const router = express.Router();



router.post('/register', Register);
router.post('/login', Login);


module.exports = {
    routes: router,
}