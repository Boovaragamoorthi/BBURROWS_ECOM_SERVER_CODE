const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RegisterModels = new Schema({
    name: {
        type: String,
        required: true
    },
    emailid: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    }
   
}, {timestamps: true});

module.exports = mongoose.model('LoginAuth', RegisterModels);