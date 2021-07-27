'use strict';

const express = require('express');
const {upload} = require('../helpers/filehelper');
const {GetProduct,PostProduct,DeleteProduct} = require('../controllers/addproductController');

const router = express.Router();


router.post('/PostProduct', upload.single('file'), PostProduct);


//router.get('/getSingleFiles', getallSingleFiles);
//http://localhost:8080/api/deletesinglefile/?id=60dc6fa8cf48d70f40be6d39

router.get('/GetProduct', GetProduct);


router.delete('/deleteProduct/:id', DeleteProduct);


module.exports = {
    routes: router
}