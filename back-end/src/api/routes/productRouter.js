const express = require('express');
const productController = require('../controller/productController');

const productRouter = express.Router();

productRouter.get('/', productController.getAll);

module.exports = productRouter;