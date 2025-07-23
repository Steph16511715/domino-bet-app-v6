const request = require('supertest');
const express = require('express');
const app = require('./server');

describe('API endpoints', () => {
  it('GET /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/Domino Bet API/);
  });

  it('POST /auth/send-code', async () => {
    const res = await request(app).post('/auth/send-code').send({ phone: '+50912345678' });
    expect(res.body.success).toBe(true);
  });

  it('POST /auth/verify-code - valid', async () => {
    const res = await request(app).post('/auth/verify-code').send({ phone: '+50912345678', code: '1234' });
    expect(res.body.success).toBe(true);
    expect(res.body.token).toBeDefined();
  });

  it('POST /auth/verify-code - invalid', async () => {
    const res = await request(app).post('/auth/verify-code').send({ phone: '+50912345678', code: '9999' });
    expect(res.body.success).toBe(false);
  });

  it('POST /payment/validate', async () => {
    const res = await request(app).post('/payment/validate').send({ method: 'Zelle', info: 'zelle@demo.com' });
    expect(res.body.success).toBe(true);
  });
});
