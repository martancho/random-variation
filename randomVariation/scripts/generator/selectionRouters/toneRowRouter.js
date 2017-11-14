const toneRowGenerator = require('../noteGenerators/toneRowGenerator');
const scaleRouter = require('./scaleRouter');
const chordRouter = require('./chordRouter');

const { midiToFlat } = require('../../conversionTables/midiToNoteTables');


const toneRowRouter = (startMidi, selections) => {
  const generatedRow = toneRowGenerator(startMidi);

  if (!selections[0]) {
    return generatedRow.map(midiNote => midiToFlat[midiNote]);
  }

  const { type, value } = selections[0];
  let results = [];

  for (let i = 0; i < generatedRow.length; i++) {
    switch (type) {
      case 'scale':
        results = results.concat(
          scaleRouter(generatedRow[i], value, selections.slice(1))
        );
        break;

      case 'chord':
        results = results.concat(
          chordRouter(generatedRow[i], value, selections.slice(1))
        );
        break;

      default:
        return generatedRow.map(midiNote => midiToFlat[midiNote]);
    }
  }

  return results;
};

module.exports = toneRowRouter;