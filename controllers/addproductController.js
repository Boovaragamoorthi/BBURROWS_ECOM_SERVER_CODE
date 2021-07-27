'use strict';
const AddProduct = require('../models/AddProductModels');


const PostProduct = async (req, res, next) => {
    try{
        const file = new AddProduct({
            title:req.body.title,
            price:req.body.price,
            quantity:req.body.quantity,
            categories:req.body.categories,
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2) // 0.00
        });
       
        await file.save();
        res.status(201).send('File Uploaded Successfully');
    }catch(error) {
        res.status(400).send(error.message);
    }
}

const GetProduct = async (req, res, next) => {
    try{
        const files = await AddProduct.find();
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }
}

const DeleteProduct = async (req,res,next) =>{
    try{
        console.log(req.params.id);
       var findByID = await AddProduct.findOne({ _id:req.params.id },async(error,datas)=>{
        const removedID = await datas.remove();
       })
       res.status(200).send(findByID);
    }
    catch(error){
        res.status(400).send(error.message);
    }
}

const fileSizeFormatter = (bytes, decimal) => {
    if(bytes === 0){
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}

module.exports = {
   PostProduct,
   GetProduct,
   DeleteProduct
}