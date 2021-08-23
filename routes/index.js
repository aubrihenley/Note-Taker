const express = require('express');

// Import our modular routers for /htmlRoute and /notes
const htmlRouter = require('./htmlRoute');
const notesRouter = require('./notes');

const app = express();

app.use('/html', htmlRouter);
app.use('/notes', notesRouter);

module.exports = app;
