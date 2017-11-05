// const noteToMidi = require('./noteToMidi.js');
// const { midiToSharp, midiToFlat } = require('./midiToNoteTables.js');
// const scales = require('./scales.js');

// const getAscScale = (startMidi, scale) => {
//   // default to midiToFlat for now
//   return scale.map(interval => midiToFlat[startMidi + interval]);
// };

// const getDescScale = (startMidi, scale) => {
//   // default to midiToFlat for now
//   return scale.map(interval => midiToFlat[startMidi + interval]).reverse();
// };

// const generateScale = (startMidi, options) => {
//   // get scale from table
//   const scale = scales[options.name];

//   const generatedScale = [];
//   for (let direction of options.directions) {
//     if (direction === 'ASC') {
//       generatedScale.push(getAscScale(startMidi, scale));
//     } else {
//       generatedScale.push(getDescScale(startMidi, scale));
//     }
//   }

//   return generatedScale;
// };

// options has name and direction array ex: ['ASC'] or ['ASC', 'DESC']
// const scale = (startMidi, options, selections) => {
//   if (!selections.length) {
//     return generateScale(startMidi, options);
//   }
// };

// options has interval and direction ex {interval: 3, direction: 'ASC'}
// const sequence = (startMidi, options, selections) => {
//   let generatedSequence = [];

//   // if no further selections then return array of the sequence

//   // need to seperate in func and check for ASC or DESC
//   //ASC
//   //also need to handle for 4th and 5th,/ dont let range out of whack

//   //while check here to stop sequence not at 12, but when it gets back to start (4th or 5ths)
//   for (let interval = 0; !interval || interval % 12 !== 0; interval += options.interval) {
//     if (selections[0].type === 'scale') {
//       generatedSequence = generatedSequence.concat(
//         generateScale(startMidi + interval, selections[0].value)
//       );
//     }
//   }

//   return generatedSequence;
// };

// const singleNote = (note, selections) => {
//   const startMidi = noteToMidi[note];

//   if (!selections.length) {
//     return [note];
//   }

//   if (selections[0].type === 'scale') {
//     return scale(startMidi, selections[0].value, selections.slice(1));
//   }

//   if (selections[0].type === 'sequence') {
//     return sequence(startMidi, selections[0].value, selections.slice(1));
//   }
// };

const selectionRouter = require('./selectionRouters');
const noteToMidi = require('../conversionTables/noteToMidi');

//selections is array of object with type and value
const generate = selections => {
  let generatedNotes = [];
  const { type, value } = selections[0];

  if (type === 'single note') {
    const startMidi = noteToMidi[value];
    generatedNotes = selectionRouter[type](startMidi, value, selections.slice(1));
  }

  // tone row here...
  

  //format the generated notes ... have these be seperate functions
  return generatedNotes;
};


// could have all routing functions like scale or sequence on an object
// then instead of if statements all the time, just call the next
// appropriate route by getting the function off the object

// then another object that holds all the generate funcs ewith keys?

// need to pass in a range... player could eventually change this
// should check range in generate functions

// should have a scale or chord type map to a pitch set for # and b

//TESTS
console.log(
  generate([
    //STARTING NOTE
    {type: 'single note', value: 'Ab2'},

    //SEQUENCE
    {type: 'sequence', value: {interval: 3, direction: 'ASC'}},

    //SCALE
    {type: 'scale', value: {name: 'major', directions: ['ASC', 'DESC']}},
  ])
);
