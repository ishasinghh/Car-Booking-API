const request = require('supertest');

const app = require('../src/app');

const baseUrl = 'http://localhost:5000/api/v1';

describe('app', () => {
  it('responds with a not found message', (done) => {
    request(app)
      .get('/what-is-this-even')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });
});

it('login without email and password will give error', async () => {
  request(app)
    .post(`${baseUrl}/login`)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(400, 'No data provided!');
});

it('Success if credential is valid', async () => {
  request(app)
    .post(`${baseUrl}/login`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send({ username: 'username', password: 'password' })
    .expect(200)
    .expect('Content-Type', /json/)
    .expect((response) => {
      expect(response.body);
      expect(response.body).to.be.an('object');
    });
});
