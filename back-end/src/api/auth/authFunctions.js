const jwt = require('jsonwebtoken');

const secret = 'secret_key';

const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '10d',
};

const createToken = (data) => jwt.sign({ data }, secret, JWT_CONFIG);

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = { createToken, verifyToken };