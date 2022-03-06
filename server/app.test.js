/* eslint-disable no-undef */

const supertest = require('supertest');
const app = require('./app');

describe('test people REST Service', () => {
  it('should return the birds endpoint', async () => {
    const request = supertest.agent(app);
    const res = await request.get('/birds');
    expect(res.status).toBe(200);
    expect(res).toHaveProperty('body');
    // expect(res.body[2]).toEqual(expect.objectContaining({ commonName: 'Swift Parrot' }));
    expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining({ commonName: 'Swift Parrot' })]));
  });
});
