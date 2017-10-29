const noteToMidi = Object.create(null);
const notes = [
  ['A'],
  ['A#', 'Bb'],
  ['B', 'Cb'],
  ['B#', 'C'],
  ['C#', 'Db'],
  ['D'],
  ['D#', 'Eb'],
  ['E', 'Fb'],
  ['E#', 'F'],
  ['F#', 'Gb'],
  ['G'],
  ['G#', 'Ab']
];

let midiIndex = 21;
let noteIndex = 0;
let octave = -1;

while (midiIndex < 109) {
  for (let note of notes[noteIndex]) {
    noteToMidi[note + octave] = midiIndex;
  }

  midiIndex += 1;
  noteIndex = (noteIndex + 1) % notes.length;

  if (notes[noteIndex][0] === 'B#') {
    octave += 1;
  }
}

module.exports = noteToMidi;
