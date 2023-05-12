// integration.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../api/app');
const { returnPostLogin } = require('./mocks');

const { expect } = chai;

chai.use(chaiHttp);

describe('Integration Tests', () => {
  describe('POST /login', () => {
    it('should return name, email, role and a token', (done) => {
      chai.request(app)
        .post('/login').
        send({ email: "zebirita@email.com", password: "$#zebirita#$"})
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.equal(returnPostLogin);
          done();
        });
    });
  });
});
