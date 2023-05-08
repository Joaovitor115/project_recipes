const express = require('express');
const cors = require('cors');
const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/login', loginRouter);
app.use('/register', userRouter);
app.use('/product', productRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
