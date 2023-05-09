const jwt = require('jsonwebtoken');

const secret = 'secret_key';

const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '10d',
};

const createToken = (data) => jwt.sign({ data }, secret, JWT_CONFIG);

const verifyToken = (token) => jwt.verify(token, secret);

// console.log(!!verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJuYW1lIjoiQ2xpZW50ZSBaw6kgQmlyaXRhIiwiZW1haWwiOiJ6ZWJpcml0YUBlbWFpbC5jb20iLCJwYXNzd29yZCI6IjFjMzc0NjZjMTU5NzU1Y2UxZmExODFiZDI0N2NiOTI1Iiwicm9sZSI6ImN1c3RvbWVyIn0sImlhdCI6MTY4MzY1ODM4MSwiZXhwIjoxNjg0NTIyMzgxfQ.jVUCugXoBJrrx15HIIaFOXO6ucS_GbUW36Uaf_GG98o', 'secret_key'));

module.exports = { createToken, verifyToken };