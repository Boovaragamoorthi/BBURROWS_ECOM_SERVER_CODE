'use strict'

const express = require('express');
const router = express.Router();
const {PostCategories,GetCategories,DeleteCategories} = require('../controllers/categoriesController');

router.post('/Postcategories', PostCategories);
router.get('/getCategories', GetCategories);
router.delete('/deletecategories/:id', DeleteCategories);

module.exports ={
    routes:router
}