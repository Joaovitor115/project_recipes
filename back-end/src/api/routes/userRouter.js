const express = require('express');
const userController = require('../controller/userController');
const validateToken = require('../middlewares/validateToken');

const userRouter = express.Router();

userRouter.post('/', userController.create);
userRouter.post('/admin', validateToken, userController.create);
userRouter.get('/sellers', userController.getAll);
userRouter.get('/withoutAdm', userController.withoutAdm);
userRouter.get('/:id', userController.getById);

module.exports = userRouter;