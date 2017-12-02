// import scales
const scales = require('../../data/scales');

// import midi to note converters (need to improve this system)
const { midiToFlat } = require('../../conversionTables/midiToNoteTables');

const getAscScale = (startMidi, scale) => {
  // default to midiToFlat for now
  return scale.map(interval => midiToFlat[startMidi + interval]);
};

const getDescScale = (startMidi, scale) => {
  // default to midiToFlat for now
  return scale.map(interval => midiToFlat[startMidi + interval]).reverse();
};

const scaleGenerator = (startMidi, options) => {
  // get scale from table
  const scale = scales[options.name];

  const generatedScale = [];
  for (let direction of options.directions) {
    if (direction === 'ASC') {
      generatedScale.push(getAscScale(startMidi, scale));
    } else {
      generatedScale.push(getDescScale(startMidi, scale));
    }
  }

  return generatedScale;
};

module.exports = scaleGenerator;
