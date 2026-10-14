/**
 * @file Integration tests for the /api/hex-to-rgb route.
 */
const request = require('supertest');
const app = require('../../src/app');

describe('GET /api/hex-to-rgb', () => {
  test('returns 200 and RGB for a valid hex', async () => {
    const res = await request(app).get('/api/hex-to-rgb').query({ hex: 'ff5733' });
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.body).toEqual({ hex: 'ff5733', rgb: { r: 255, g: 87, b: 51 } });
  });

  test('accepts a hex value with # (encoded)', async () => {
    const res = await request(app).get('/api/hex-to-rgb').query({ hex: '#fff' });
    expect(res.status).toBe(200);
    expect(res.body.rgb).toEqual({ r: 255, g: 255, b: 255 });
  });

  test('returns 400 for an invalid hex', async () => {
    const res = await request(app).get('/api/hex-to-rgb').query({ hex: 'zzzzzz' });
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error', 'Invalid hex color');
  });

  test('returns 400 when the hex parameter is missing', async () => {
    const res = await request(app).get('/api/hex-to-rgb');
    expect(res.status).toBe(400);
    expect(res.body.error).toMatch(/required/);
  });

  test('returns 404 for an unknown route', async () => {
    const res = await request(app).get('/api/unknown');
    expect(res.status).toBe(404);
  });
});
