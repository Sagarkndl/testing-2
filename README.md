# hex-to-rgb-api

A small JavaScript library and Express REST API that converts hex colors to RGB, with unit and integration tests.

## Usage

    npm install
    npm start
    npm test

## API

GET /api/hex-to-rgb?hex=ff5733

Returns: { "hex": "ff5733", "rgb": { "r": 255, "g": 87, "b": 51 } }

Use %23 for the # character, for example ?hex=%23fff
