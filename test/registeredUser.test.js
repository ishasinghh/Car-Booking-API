const request = require('supertest');

const baseUrl = 'http://localhost:5000/api/v1';
const app = require('../src/app');

describe('Register route gives OK when all required information provided', () => {
  it('Register route gives OK when all required information provided', async () => {
    request(app)
      .post(`${baseUrl}/register`)
      .send({
        fullName: 'Ish',
        email: 'ish@gmail.com',
        password: 'isha'
      }).expect(200);
  });
});

describe('Register user failed when partial information provided', () => {
  it('Register user failed when partial information provided', async () => {
    request(app)
      .post(`${baseUrl}/register`)
      .send({
        fullName: 'Ish',
        password: 'isha'
      }).expect(400);
  });
});

describe('GET registered user by id', () => {
  it('GET registered user by id', async () => {
    request(app)
      .get(`${baseUrl}/?id=8`)
      .expect(200)
      .expect((response) => {
        expect(response.body);
        expect(response.body).to.be.an('object');
      });
  });
});

describe('GET registered user by name', () => {
  it('GET registered user by name', async () => {
    request(app)
      .get(`${baseUrl}/?fullName=isha`)
      .expect(200)
      .expect((response) => {
        expect(response.body);
        expect(response.body).to.be.an('object');
      });
  });
});
describe('GET all registered users', () => {
  it('GET all registered users', async () => {
    request(app)
      .get(`${baseUrl}/`)
      .expect()
      .expect(200)
      .expect((response) => {
        expect(response.body);
        expect(response.body).to.be.an('object');
      });
  });
});
