const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the notes
notes.get('/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });
  
  // POST Route for a new note
  notes.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        note_id: uuid(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully 🚀`);
    } else {
      res.error('Error in adding Note');
    }
  });

  //DELETE Route to delete notes
  notes.delete("/notes/:id", async(req, res) =>{
    const { id } = req.params;
    const note = JSON.parse(await readFromFile("./db/db.json", "utf8"));
    const notesIndex = note.findIndex(note => note.note_id === id);
    console.log(notesIndex);
    note.splice(notesIndex, 1);
    await writeToFile("./db/db.json", note);
    return res.send();
  })



  module.exports = notes;
  