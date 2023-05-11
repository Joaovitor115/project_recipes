const express = require('express');
const userController = require('../controller/userController');

const userRouter = express.Router();

userRouter.post('/', userController.create);
userRouter.get('/sellers', userController.getAll);
userRouter.get('/:id', userController.getById);

module.exports = userRouter;