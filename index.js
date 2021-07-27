'use strict';
const express = require('express');
const path = require('path');
const cors = require('cors');
require("dotenv").config({path:"./config.env"});
const bodyParser = require('body-parser');
const categories = require('./routes/categories');
const addproduct = require('./routes/addproduct-routes');
const showproduct = require('./routes/NOADMIN/showpeoduct-routes')
const LoginAuth = require('./routes/NoADMIN/LoginAuth-routes')
const RazerPay = require('./routes/NOADMIN/rozerpay')
const DeliveryAddress = require('./routes/NOADMIN/deliveryAddress-routes.js')


const port = process.env.PORT || 8080;
const app = express();
app.use(cors());

require('./database')();

app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', categories.routes);
app.use('/api', addproduct.routes);
app.use('/api', showproduct.routes);
app.use('/api', LoginAuth.routes);
app.use('/api', RazerPay.routes);
app.use('/api', DeliveryAddress.routes);

app.listen(port, () => console.log(`server is listening on url`,port));