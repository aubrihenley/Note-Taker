const express = require('express');
const notes = require('./routes/notes.js');
const htmlRoute = require('./routes/htmlRoute.js');
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', htmlRoute); 
app.use('/', notes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
