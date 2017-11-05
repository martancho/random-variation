const singleNoteRouter = require('./singleNoteRouter');
const sequenceRouter = require('./sequenceRouter');
const scaleRouter = require('./scaleRouter');

const selectionRouters = {
  'single note': singleNoteRouter,
  'sequence': sequenceRouter,
  'scale': scaleRouter,
};

module.exports = selectionRouters;
