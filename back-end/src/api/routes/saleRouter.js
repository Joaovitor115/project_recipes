const express = require('express');
const saleController = require('../controller/saleController');
const validateToken = require('../middlewares/validateToken');

const saleRouter = express.Router();

saleRouter.get('/', saleController.getAll);
saleRouter.get('/:id', saleController.getById);
saleRouter.post('/', validateToken, saleController.create);
saleRouter.patch('/:id', validateToken, saleController.updateStatus);

module.exports = saleRouter;