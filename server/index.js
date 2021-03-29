const express = require('express');
const app = express();
const compression = require('compression');

app.use(compression());
app.use(express.static('public'));
// CREATE (POST)

// READ (GET)

// UPDATE (PUT)

// DELETE (DELETE)

module.exports = app;