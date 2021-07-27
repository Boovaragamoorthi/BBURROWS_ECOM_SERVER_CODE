'use strict';
const LoginAuth = require('../../models/RegisterModels');


const Register = async (req, res, next) => {
    try{
        console.log(req.body);
        var findmailid = await LoginAuth.findOne({emailid:req.body.emailid});
        console.log(findmailid);
        if(findmailid){
            return res.status(400).json("Email already exist. Please enter another email id")
        }
        const file = await new LoginAuth({
            name:req.body.name,
            emailid:req.body.emailid,
            phonenumber:req.body.phonenumber,
            password:req.body.password,
            confirmpassword: req.body.confirmpassword,
        });
        await file.save();
        res.status(200).send('Registered Successfully');
    }catch(error) {
        res.status(400).send(error.message);
    }
}
const Login = async (req, res, next) => {
    try{
        // const file = await new LoginAuth({
        //     emailid:req.body.emailid,
        //     password:req.body.password,
        // });
        const reqpassword = req.body.password;
        const reqemailid = req.body.emailid;
       
        var findmailid = await LoginAuth.findOne({emailid:reqemailid});
      
        if(!findmailid){
            return res.status(400).send({msg:"Email not exist. Please enter valid email id"})
        }
        var findpassword = findmailid.password;
        if(findpassword !== reqpassword){
            return res.status(400).json("Wroung Password")
        }

        var successdata ={
            "emailid":findmailid.emailid,
            "username":findmailid.name
        }

        res.status(201).send(successdata);

    }catch(error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    Register,
    Login
}