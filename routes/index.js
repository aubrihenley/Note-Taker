const express = require('express');

// Import our modular routers for /tips and /feedback
const notesRouter = require('./notesRoute');
const htmlRouter = require('./htmlRoute');

const app = express();

app.use('/tips', tipsRouter);
app.use('/feedback', feedbackRouter);

module.exports = app;
