/* eslint-disable no-underscore-dangle */
const request = require('supertest');
const app = require('../app');

describe('DATABASE, all CRUD operations', () => {
  it('POST /grudges ---> Create a new grudge', async () => {
    const response = await request(app).post('/grudges').send({
      name: 'test',
      offense: 'test',
      forgiven: false,
    });
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({
      _id: expect.any(String),
      name: 'test',
      offense: 'test',
      forgiven: false,
    });
  });

  it('GET /grudges ---> Get all grudges on', async () => {
    const response = await request(app).get('/grudges');
    expect(response.statusCode).toBe(200);
    // * more test here
    // expect(response.body).toEqual([]);
  });

  it('GET /grudges/:id ---> Get a single grudge', async () => {
    // add a grudge
    const tmpGrudge = await request(app)
      .post('/grudges')
      .send({ name: 'test', offense: 'test', forgiven: false })
      .then((res) => res.body);
    const id = tmpGrudge._id;
    const response = await request(app).get(`/grudges/${id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(tmpGrudge);
  });
  it('GET /grudges/:id ---> single grudge not found', async () => {
    const response = await request(app).get('/grudges/1000');
    expect(response.statusCode).toBe(404);
  });

  it.skip('PUT /grudges/:id ---> Update a single grudge', async () => {
    const tmpGrudge = await request(app)
      .post('/grudges')
      .send({ name: 'test', offense: 'test', forgiven: false })
      .then((res) => res.body);
    const id = tmpGrudge._id;

    const response = await request(app).put(`/grudges/${id}`).send({
      name: 'renamed test',
      offense: 'renamed offense',
      forgiven: true,
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      _id: expect.any(String),
      name: 'renamed test',
      offense: 'renamed offense',
      forgiven: true,
    });
  });

  it('DELETE /grudges/:id ---> Delete a single grudge', async () => {
    const response = await request(app).delete('/grudges/1');
    expect(response.statusCode).toBe(200);
    // expect(response.body).toEqual([]);
  });

  it('DELETE /grudges ---> Delete all grudges', async () => {
    const response = await request(app).delete('/grudges');
    expect(response.statusCode).toBe(204);
  });
});
