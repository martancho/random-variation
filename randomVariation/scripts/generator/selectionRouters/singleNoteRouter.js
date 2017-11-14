const scaleRouter = require('./scaleRouter');
const sequenceRouter = require('./sequenceRouter');

const singleNoteRouter = (startMidi, note, selections) => {
  if (!selections.length) {
    return [note];
  }

  const { type, value } = selections[0];

  switch (type) {
    case 'scale':
      return scaleRouter(startMidi, value, selections.slice(1));

    case 'sequence':
      return sequenceRouter(startMidi, value, selections.slice(1));

    default:
      return [note];
  }
};

module.exports = singleNoteRouter;
