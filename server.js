const express = require('express');
const notesRoute = require('./routes/notesRoute.js');
const htmlRoute = require('./routes/htmlRoute');
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', htmlRoute); 
app.use('/', notesRoute);

app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
