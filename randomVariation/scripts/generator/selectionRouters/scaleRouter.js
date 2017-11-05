const selectionRouter = require('./index');
const scaleGenerator = require('../noteGenerators/scaleGenerator');

const scaleRouter = (startMidi, options, selections) => {
  const generatredScale = scaleGenerator(startMidi, options);
  
  if (!selections.length) {
    return generatredScale;
  }

  // will need to run next operation on all scales...
  const { type, value } = selections[0];
  return selectionRouter[type](startMidi, value, selections.slice(1));
};

module.exports = scaleRouter;
