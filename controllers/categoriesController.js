'use strict';
const Categories = require('../models/CategoriesModels');

const PostCategories = async(req,res,next)=>{
try{
const postCtrl = new Categories({
    name:req.body.name
});
await postCtrl.save();
res.status(201).send('Categories saved ');
    }
    catch(error){
        res.status(400).send(error.message);
    }

}

const GetCategories = async (req,res,next)=>{
    try{
        const findCategories = await Categories.find();

        res.status(201).send(findCategories);
    }
    catch(error){
        res.status(400).send(error.message);
    }

}

const DeleteCategories = async (req,res,next)=>{
    try{
        console.log(req.params.id);
       var Deletecate = await Categories.findOne({ _id:req.params.id },async(error,datas)=>{
        const removedID = await datas.remove();
       })
       res.status(200).send(Deletecate);
    }
    catch(error){
        res.status(400).send(error.message);
    }
}

module.exports={
    PostCategories,
    GetCategories,
    DeleteCategories
}