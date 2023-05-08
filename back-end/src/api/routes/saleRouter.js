const express = require('express');
const saleController = require('../controller/saleController');

const saleRouter = express.Router();

saleRouter.get('/', saleController.getAll);
saleRouter.post('/', saleController.create);

module.exports = saleRouter;