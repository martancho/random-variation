const sequenceGenerator = require('../noteGenerators/sequenceGenerator');
const scaleRouter = require('./scaleRouter');

const sequenceRouter = (startMidi, options, selections) => {
  const generatedSequence = sequenceGenerator(options.interval);

  if (!selections.length) {
    return generatedSequence;
  }

  const { type, value } = selections[0];
  let results = [];

  for (let i = 0; i < generatedSequence.length; i++) {
    switch (type) {
      case 'scale':
        results = results.concat(
          scaleRouter(startMidi + generatedSequence[i], value, selections.slice(1));
        );
        break;

      default:
        return generatedSequence;
    }
  }

  return results;
};

module.exports = sequenceRouter;
