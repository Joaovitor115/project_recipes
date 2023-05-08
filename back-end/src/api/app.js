const express = require('express');
const cors = require('cors');
const path = require('path');
const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
const saleRouter = require('./routes/saleRouter');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/login', loginRouter);
app.use('/register', userRouter);
app.use('/product', productRouter);
app.use('/sale', saleRouter);
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
