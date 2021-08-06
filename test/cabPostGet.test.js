const request = require('supertest');
const app = require('../src/app');

const baseUrl = 'http://localhost:5000/api/v1';

it('Cab book', async () => {
  request(app)
    .post(`${baseUrl}/CabBook`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send({ source: 'heaven', destination: 'hell' })
    .expect(200)
    .expect('Content-Type', /json/)
    .expect((response) => {
      expect(response.body);
      expect(response.body).to.be.an('object');
    });
});

describe('GET all past booking', () => {
  it('GET all cabs ', async () => {
    request(app)
      .get(`${baseUrl}/cabs`)
      .expect()
      .expect(200)
      .expect((response) => {
        expect(response.body);
        expect(response.body).to.be.an('object');
      });
  });
});
