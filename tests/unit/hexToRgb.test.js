/**
 * @file Unit tests for the hexToRgb library function.
 */
const { hexToRgb } = require('../../src/hexToRgb');

describe('hexToRgb', () => {
  test('converts 6-digit hex with #', () => {
    expect(hexToRgb('#ff5733')).toEqual({ r: 255, g: 87, b: 51 });
  });

  test('converts 6-digit hex without #', () => {
    expect(hexToRgb('00ff00')).toEqual({ r: 0, g: 255, b: 0 });
  });

  test('converts 3-digit shorthand hex', () => {
    expect(hexToRgb('#fff')).toEqual({ r: 255, g: 255, b: 255 });
  });

  test('is case-insensitive', () => {
    expect(hexToRgb('#FFaa00')).toEqual(hexToRgb('#ffAA00'));
  });

  test('handles boundary values (black)', () => {
    expect(hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 });
  });

  test('throws on invalid characters', () => {
    expect(() => hexToRgb('#gggggg')).toThrow('Invalid hex color');
  });

  test('throws on wrong length', () => {
    expect(() => hexToRgb('#12345')).toThrow('Invalid hex color');
  });

  test('throws TypeError on non-string input', () => {
    expect(() => hexToRgb(123456)).toThrow(TypeError);
  });
});
