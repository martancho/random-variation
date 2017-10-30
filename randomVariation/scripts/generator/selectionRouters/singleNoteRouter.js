const selectionRouter = require('./index.js');

const singleNoteRouter = (startMidi, note, selections) => {

  if (!selections.length) {
    return [note];
  }

  const { type, value } = selections[0];
  console.log(selectionRouter);
  console.log(selectionRouter[type]);
  return selectionRouter[type](startMidi, value, selections.slice(1));
};

module.exports = singleNoteRouter;
