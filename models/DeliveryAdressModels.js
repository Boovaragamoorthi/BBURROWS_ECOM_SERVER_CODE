const mongoose = require('mongoose');
const schema = mongoose.Schema;

const deliveryaddress = new schema({
    receiverName: {
        type: String,
    },
    addressline1: {
        type: String,
    },
    addressline2: {
        type: String,
    },
    city: {
        type: String,
    },
    stateandcode: {
        type: String,
    },
    emailidbyUser: {
        type: String,
    },
})

module.exports = mongoose.model('newaddress', deliveryaddress);