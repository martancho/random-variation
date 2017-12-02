const chords = require('../../data/chords');

// import midi to note converters (need to improve this system)
const { midiToFlat } = require('../../conversionTables/midiToNoteTables');

const getAscChord = (startMidi, chord) => {
  // default to midiToFlat for now
  return chord.map(interval => midiToFlat[startMidi + interval]);
};

const getDescChord = (startMidi, chord) => {
  // default to midiToFlat for now
  return chord.map(interval => midiToFlat[startMidi + interval]).reverse();
};

const chordGenerator = (startMidi, options) => {
  // get chord from table
  const chord = chords[options.name];

  const generatedChord = [];
  for (let direction of options.directions) {
    if (direction === 'ASC') {
      generatedChord.push(getAscChord(startMidi, chord));
    } else {
      generatedChord.push(getDescChord(startMidi, chord));
    }
  }

  return generatedChord;
};

module.exports = chordGenerator;
