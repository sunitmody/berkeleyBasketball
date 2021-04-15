const express = require('express');
const app = express();
const compression = require('compression');
const controller = require('../controller/index.js');

app.use(compression());
app.use(express.json());
app.use(express.static('public'));

// CREATE (POST)
app.post('/images', controller.post);

// READ (GET)
app.get('/images', controller.get);

// UPDATE (PUT)
app.put('/images', controller.put);

// DELETE (DELETE)
app.delete('/images', controller.delete);

module.exports = app;