'use strict';
const AddProduct = require('../../models/AddProductModels');





const ShowProduct = async (req, res, next) => {
    console.log(req.params.name);
    try {
        console.log(req.params.name);
        // const files = await AddProduct.aggregate([
        //     { $match: { "categories": req.params.name } }
        // ])
        const files = await AddProduct.find(
            { "categories":req.params.name}
 
          );

        res.status(200).send(files);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

const ShowProductBYID = async (req, res, next) => {
    try {
        console.log(req.params.id);
        const files = await AddProduct.findById(req.params.id);
console.log(files);
res.status(200).send(files);
    }
    
    catch(error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    ShowProduct,
    ShowProductBYID
}