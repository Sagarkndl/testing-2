/**
 * @file Express application with the hex-to-RGB route.
 */
const express = require('express');
const { hexToRgb } = require('./hexToRgb');

const app = express();

/**
 * GET /api/hex-to-rgb?hex=ff5733
 * Success (200): { "hex": "ff5733", "rgb": { "r": 255, "g": 87, "b": 51 } }
 * Error (400):   { "error": "message" }
 * Note: '#' must be URL-encoded as %23 in query strings.
 */
app.get('/api/hex-to-rgb', (req, res) => {
  const { hex } = req.query;

  if (!hex) {
    return res.status(400).json({ error: 'Query parameter "hex" is required' });
  }

  try {
    const rgb = hexToRgb(hex);
    return res.status(200).json({ hex, rgb });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

module.exports = app;
