/**
 * @file Library for converting hex color values to RGB values.
 */

/**
 * Converts a hex color string to an RGB object.
 * Accepts 3-digit (#abc) or 6-digit (#aabbcc) hex, with or without '#'.
 *
 * @param {string} hex - The hex color value, e.g. "#ff5733".
 * @returns {{r: number, g: number, b: number}} RGB values (0-255).
 * @throws {TypeError} If the input is not a string.
 * @throws {Error} If the input is not a valid hex color.
 */
function hexToRgb(hex) {
  if (typeof hex !== 'string') {
    throw new TypeError('Hex value must be a string');
  }

  let value = hex.trim().replace(/^#/, '');

  if (!/^([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value)) {
    throw new Error('Invalid hex color');
  }

  // Expand shorthand: "abc" -> "aabbcc"
  if (value.length === 3) {
    value = value.split('').map((c) => c + c).join('');
  }

  const num = parseInt(value, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

module.exports = { hexToRgb };
