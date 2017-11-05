const createMidiToNoteTable = notes => {
  const midiToNoteTable = Object.create(null);
  let midiIndex = 21;
  let noteIndex = 0;
  let octave = -1;

  while (midiIndex < 109) {
    midiToNoteTable[midiIndex] = notes[noteIndex] + octave;
    midiIndex += 1;
    noteIndex = (noteIndex + 1) % notes.length;

    if (notes[noteIndex] === 'C') {
      octave += 1;
    }
  }

  return midiToNoteTable;
};

module.exports = createMidiToNoteTable;
