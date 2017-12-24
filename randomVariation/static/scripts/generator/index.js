const singleNoteRouter = require('./selectionRouters/singleNoteRouter');
const toneRowRouter = require('./selectionRouters/toneRowRouter');
const noteToMidi = require('../conversionTables/noteToMidi');

// selections is array of object with type and value
const generate = selections => {
  let generatedNotes = [];
  const { type, value } = selections[0];
  const startMidi = noteToMidi[value.note];

  switch (type) {
    case 'single note':
      generatedNotes = singleNoteRouter(startMidi, value.note, selections.slice(1));
      break;

    case 'tone row':
      // for now just takes a starting note and generates a random row
      generatedNotes = toneRowRouter(startMidi, selections.slice(1));

    default:
      return generatedNotes;
  }

  //format the generated notes ... have these be seperate functions
  return generatedNotes;
};

// need to pass in a range... player could eventually change this
// should check range in generate functions

// should have a scale or chord type map to a pitch set for # and b

module.exports = generate;


//TESTS
// console.log(
//   generate([
//     //STARTING NOTE
//     {type: 'tone row', value: 'C3'},

//     //SEQUENCE
//     // {type: 'sequence', value: {interval: 3, direction: 'DESC'}}, 

//     //SCALE
//     {type: 'chord', value: {name: 'Min11', directions: ['ASC', 'DESC']}},
//   ])
// );
