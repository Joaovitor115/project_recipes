const express = require('express');
const userController = require('../controller/userController');

const userRouter = express.Router();

userRouter.post('/', userController.create);
userRouter.get('/sellers', userController.getAll);

module.exports = userRouter;