const sequenceGenerator = require('../noteGenerators/sequenceGenerator');
const scaleRouter = require('./scaleRouter');
const chordRouter = require('./chordRouter');

const { midiToFlat } = require('../../conversionTables/midiToNoteTables');

const sequenceRouter = (startMidi, options, selections) => {
  const generatedSequence = sequenceGenerator(startMidi, options);

  if (!selections.length) {
    return generatedSequence.map(midiNote => midiToFlat[midiNote]);
  }

  const { type, value } = selections[0];
  let results = [];

  for (let i = 0; i < generatedSequence.length; i++) {
    switch (type) {
      case 'scale':
        results = results.concat(
          scaleRouter(generatedSequence[i], value, selections.slice(1))
        );
        break;

      case 'chord':
        results = results.concat(
          chordRouter(generatedSequence[i], value, selections.slice(1))
        );
        break;

      default:
        return generatedSequence.map(midiNote => midiToFlat[midiNote]);
    }
  }

  return results;
};

module.exports = sequenceRouter;
