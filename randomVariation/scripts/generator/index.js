const singleNoteRouter = require('./selectionRouters/singleNoteRouter');
const noteToMidi = require('../conversionTables/noteToMidi');

// selections is array of object with type and value
const generate = selections => {
  let generatedNotes = [];
  const { type, value } = selections[0];
  const startMidi = noteToMidi[value];

  switch (type) {
    case 'single note':
      generatedNotes = singleNoteRouter(startMidi, value, selections.slice(1));
      break;

    // tone row here...

    default:
      return generatedNotes;
  }

  //format the generated notes ... have these be seperate functions
  return generatedNotes;
};

// need to pass in a range... player could eventually change this
// should check range in generate functions

// should have a scale or chord type map to a pitch set for # and b

//TESTS
console.log(
  generate([
    //STARTING NOTE
    {type: 'single note', value: 'C3'},

    //SEQUENCE
    {type: 'sequence', value: {interval: 2, direction: 'ASC'}},

    //SCALE
    {type: 'scale', value: {name: 'lydian dominant', directions: ['DESC']}},
  ])
);
