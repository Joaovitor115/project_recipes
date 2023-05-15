// integration.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../api/app');
const { returnPostLogin, returnGetProduct, returnUserSellers } = require('./mocks');
const sinon = require('sinon');
const jwt = require('jsonwebtoken');
const {User, Sale} = require('../database/models');
const { expect } = chai;

chai.use(chaiHttp);

describe('Integration Tests', () => {

  describe('POST /login', () => {
    it('should return name, email, role and a token', (done) => {
      const token = 'mocked-jwt-token';
      const signStub = sinon.stub(jwt, 'sign').returns(token);
      chai.request(app)
        .post('/login').
        send({ email: "zebirita@email.com", password: "$#zebirita#$"})
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('token', token);
          expect(res.body).to.have.property('name', returnPostLogin.name);
          expect(res.body).to.have.property('role', returnPostLogin.role);
          expect(res.body).to.have.property('email', returnPostLogin.email);
          done();
        });
    });
    it('should return not authorized', (done) => {
      chai.request(app)
        .post('/login').
        send({ email: "zebirita@email.com", password: "$#zebirit"})
        .end((err, res) => {
          expect(res).to.have.status(401);
          expect(res.body).to.deep.equal({message: "Not authorized"});
          done();
        });
    });
  });

  describe('GET /product', () => {
    it('should return all products', (done) => {
      chai.request(app)
        .get('/product')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.deep.equal(returnGetProduct);
          
          done();
        });
    });
  });

  describe('GET /sale', () => {
    it('should return all sales', (done) => {
      chai.request(app)
        .get('/sale')
        .set('Authorization', `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJuYW1lIjoiQ2xpZW50ZSBaw6kgQmlyaXRhIiwiZW1haWwiOiJ6ZWJpcml0YUBlbWFpbC5jb20iLCJwYXNzd29yZCI6IjFjMzc0NjZjMTU5NzU1Y2UxZmExODFiZDI0N2NiOTI1Iiwicm9sZSI6ImN1c3RvbWVyIn0sImlhdCI6MTY4NDE4NDQ1NywiZXhwIjoxNjg1MDQ4NDU3fQ.OrmPVg7DVbEjlA8b9FQzcaI1IDlJgzNP1nsnfFEKN30"}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.deep.equal([]);
          
          done();
        });
    });
    it('should fail without token', (done) => {
      chai.request(app)
        .post('/sale')
        .end((err, res) => {
          expect(res).to.have.status(401);
          expect(res.body).to.be.deep.equal({ message: 'Token not found' });
          
          done();
        });
    });
  });

  describe('GET /user', () => {
    it('should return all user seller', (done) => {
      chai.request(app)
        .get('/user/sellers')
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.deep.equal(returnUserSellers);
          done();
        });
    });
  });
  it('should return a user by id', (done) => {
    chai.request(app)
      .get('/user/2')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.deep.equal(returnUserSellers[0]);
        done();
      });
  });

  describe('POST /user', () => {
    it('should Create a user', (done) => {
      const userStub = sinon.stub(User, 'create').resolves({ });
      chai.request(app)
        .post('/user')
        .send({
          name: "josiel",
          email: "josiel.jcc@htmail.com",
          role: "seller",
          password: "$#zebirita#$",
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.deep.equal({
            "type": 201,
            "message": null
          });
          userStub.restore();
          done();
        });
    });
  });
  
  
});
