const express = require('express');
const saleController = require('../controller/saleController');

const saleRouter = express.Router();

saleRouter.get('/', saleController.getAll);
saleRouter.get('/:id', saleController.getById);
saleRouter.post('/', saleController.create);

module.exports = saleRouter;