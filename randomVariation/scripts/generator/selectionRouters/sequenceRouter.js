const selectionRouter = require('./index');
const sequenceGenerator = require('../noteGenerators/sequenceGenerator');

const sequenceRouter = (startMidi, options, selections) => {
  const generatedSequence = sequenceGenerator(options.interval);

  if (!selections.length) {
    return generatedSequence;
  }

  const { type, value } = selections[0];
  let results = [];

  for (let i = 0; i < generatedSequence.length; i++) {
    results = results.concat(
      selectionRouter[type](startMidi + generatedSequence[i], value, selections.slice(1))
    );
  }

  return results;
};

module.exports = sequenceRouter;
