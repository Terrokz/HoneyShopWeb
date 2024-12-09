const express = require('express');

productController = require('./controllers/productController');

const router = express.Router();
const customerController = require('./controllers/customerController');

//Customers routes
router.get('/customers', customerController.getCustomersByFilters);

//Product routes
router.get('/products/:id', productController.getProductById);

//Home page routes
router.get('/home', productController.getHomePageProducts);
 
module.exports = router;