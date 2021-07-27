'use strict';
const newaddress = require('../../models/DeliveryAdressModels.js');

const PostNewAddress = async(req,res,next)=>{
    console.log(req);
try{
const address = new newaddress({
    "receiverName":req.body.receiverName,
    "addressline1":req.body.addressline1,
    "addressline2":req.body.addressline2,
    "city":req.body.city,
    "stateandcode":req.body.stateandcode,
    "emailidbyUser":req.body.emailidbyUser
});
await address.save();
const findAddress = await newaddress.find();
res.status(201).send(findAddress);
    }
    catch(error){
        res.status(400).send(error.message);
    }

}
module.exports={
    PostNewAddress,
}