const createMidiToNoteTable = require('./createMidiToNoteTable.js');

const sharpNotes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const midiToSharp = createMidiToNoteTable(sharpNotes);

const flatNotes = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
const midiToFlat = createMidiToNoteTable(flatNotes);

// could add set for each key? A minor, C lydian...
module.exports = {
  midiToSharp,
  midiToFlat,
};
