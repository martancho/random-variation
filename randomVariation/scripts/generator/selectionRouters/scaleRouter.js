const scaleGenerator = require('../noteGenerators/scaleGenerator');
// add routers here

const scaleRouter = (startMidi, options, selections) => {
  const generatredScale = scaleGenerator(startMidi, options);
  
  if (!selections.length) {
    return generatredScale;
  }

  const { type, value } = selections[0];

  switch (type) {
    // add cases here, will need to run next operation on all scales...

    default:
      return generatredScale;
  }
};

module.exports = scaleRouter;
