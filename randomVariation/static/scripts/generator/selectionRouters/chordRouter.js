const chordGenerator = require('../noteGenerators/chordGenerator');
// add routers here

const chordRouter = (startMidi, options, selections) => {
  const generatedChord = chordGenerator(startMidi, options);
  
  if (!selections.length) {
    return generatedChord;
  }

  const { type, value } = selections[0];

  switch (type) {
    // add cases here, will need to run next operation on all arpegios...

    default:
      return generatedChord;
  }
};

module.exports = chordRouter;
