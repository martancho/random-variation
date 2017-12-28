(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.generate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const createMidiToNoteTable = notes => {
  const midiToNoteTable = Object.create(null);
  let midiIndex = 21;
  let noteIndex = 0;
  let octave = -1;

  while (midiIndex < 109) {
    midiToNoteTable[midiIndex] = notes[noteIndex] + octave;
    midiIndex += 1;
    noteIndex = (noteIndex + 1) % notes.length;

    if (notes[noteIndex] === 'C') {
      octave += 1;
    }
  }

  return midiToNoteTable;
};

module.exports = createMidiToNoteTable;

},{}],2:[function(require,module,exports){
const createMidiToNoteTable = require('./createMidiToNoteTable.js');

const sharpNotes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const midiToSharp = createMidiToNoteTable(sharpNotes);

const flatNotes = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
const midiToFlat = createMidiToNoteTable(flatNotes);

// could add set for each key? A minor, C lydian...
module.exports = {
  midiToSharp,
  midiToFlat,
};

},{"./createMidiToNoteTable.js":1}],3:[function(require,module,exports){
const noteToMidi = Object.create(null);
const notes = [
  ['A'],
  ['A#', 'Bb'],
  ['B', 'Cb'],
  ['B#', 'C'],
  ['C#', 'Db'],
  ['D'],
  ['D#', 'Eb'],
  ['E', 'Fb'],
  ['E#', 'F'],
  ['F#', 'Gb'],
  ['G'],
  ['G#', 'Ab']
];

let midiIndex = 21;
let noteIndex = 0;
let octave = -1;

while (midiIndex < 109) {
  for (let note of notes[noteIndex]) {
    noteToMidi[note + octave] = midiIndex;
  }

  midiIndex += 1;
  noteIndex = (noteIndex + 1) % notes.length;

  if (notes[noteIndex][0] === 'B#') {
    octave += 1;
  }
}

module.exports = noteToMidi;

},{}],4:[function(require,module,exports){
module.exports = {
  'Maj': [0, 4, 7],
  'Min': [0, 3, 7],
  'Aug': [0, 4, 8],
  'Dim': [0, 3, 6],
  'Sus': [0, 5, 7],
  'Quartal (P4, P4)': [0, 5, 10],
  'Maj2': [0, 2, 4, 7],
  'Min2': [0, 2, 3, 7],
  'Maj7': [0, 4, 7, 11],
  '7': [0, 4, 7, 10],
  'Min7': [0, 3, 7, 10],
  'Half dim': [0, 3, 6, 10],
  'Dim7': [0, 3, 6, 9],
  '7sus': [0, 5, 7, 10],
  'Maj7b5': [0, 4, 6, 11],
  '7(#9,#5)': [0, 4, 8, 10, 15],
  '7(b9)': [0, 4, 7, 10, 13],
  'Maj13(#11)': [0, 4, 7, 11, 14, 18, 21],
  '13(#11)': [0, 4, 7, 10, 14, 18, 21],
  'Min11': [0, 3, 7, 10, 14, 17],
};
},{}],5:[function(require,module,exports){
module.exports = {
  'Major': [0, 2, 4, 5, 7, 9, 11, 12],
  'Melodic minor ASC': [0, 2, 3, 5, 7, 9, 11, 12],
  'Melodic minor DESC': [0, 2, 3, 5, 7, 8, 10, 12],
  'Dorian': [0, 2, 3, 5, 7, 9, 10, 12],
  'Mixolydian': [0, 2, 4, 5, 7, 9, 10, 12],
  'Lydian dominant': [0, 2, 4, 6, 7, 9, 10, 12],
  'Altered': [0, 1, 3, 4, 6, 8, 10, 12],
  'Harmonic minor': [0, 2, 3, 5, 7, 8, 11, 12],
  'Major pentatonic': [0, 2, 4, 7, 9, 12],
  'Minor pentatonic': [0, 3, 5, 7, 10, 12],
  'Whole half diminished': [0, 2, 3, 5, 6, 8, 9, 11, 12],
  'Whole tone': [0, 2, 4, 6, 8, 10, 12],
  'Lydian': [0, 2, 4, 6, 7, 9, 11, 12],
  'Aeolian': [0, 2, 3, 5, 7, 8, 10, 12],
  'Kansas City': [0, 2, 3, 7, 9, 12],
  'Blues': [0, 3, 5, 6, 7, 10, 12],
  'Major blues': [0, 4, 5, 6, 7, 10, 12],
  'Augmented': [0, 3, 4, 7, 8, 11, 12],
  'Phrygian': [0, 1, 3, 5, 7, 8, 10, 12],
  'Locrian': [0, 1, 3, 5, 6, 8, 10, 12],
  'Harmonic major': [0, 2, 4, 5, 7, 8, 11, 12],
};
},{}],6:[function(require,module,exports){
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

},{"../conversionTables/noteToMidi":3,"./selectionRouters/singleNoteRouter":14,"./selectionRouters/toneRowRouter":15}],7:[function(require,module,exports){
const chords = require('../../data/chords');

// import midi to note converters (need to improve this system)
const { midiToFlat } = require('../../conversionTables/midiToNoteTables');

const getAscChord = (startMidi, chord) => {
  // default to midiToFlat for now
  return chord.map(interval => midiToFlat[startMidi + interval]);
};

const getDescChord = (startMidi, chord) => {
  // default to midiToFlat for now
  return chord.map(interval => midiToFlat[startMidi + interval]).reverse();
};

const chordGenerator = (startMidi, options) => {
  // get chord from table
  const chord = chords[options.name];

  const generatedChord = [];
  for (let direction of options.directions) {
    if (direction === 'ASC') {
      generatedChord.push(getAscChord(startMidi, chord));
    } else {
      generatedChord.push(getDescChord(startMidi, chord));
    }
  }

  return generatedChord;
};

module.exports = chordGenerator;

},{"../../conversionTables/midiToNoteTables":2,"../../data/chords":4}],8:[function(require,module,exports){
// import scales
const scales = require('../../data/scales');

// import midi to note converters (need to improve this system)
const { midiToFlat } = require('../../conversionTables/midiToNoteTables');

const getAscScale = (startMidi, scale) => {
  // default to midiToFlat for now
  return scale.map(interval => midiToFlat[startMidi + interval]);
};

const getDescScale = (startMidi, scale) => {
  // default to midiToFlat for now
  return scale.map(interval => midiToFlat[startMidi + interval]).reverse();
};

const scaleGenerator = (startMidi, options) => {
  // get scale from table
  const scale = scales[options.name];

  const generatedScale = [];
  for (let direction of options.directions) {
    if (direction === 'ASC') {
      generatedScale.push(getAscScale(startMidi, scale));
    } else {
      generatedScale.push(getDescScale(startMidi, scale));
    }
  }

  return generatedScale;
};

module.exports = scaleGenerator;

},{"../../conversionTables/midiToNoteTables":2,"../../data/scales":5}],9:[function(require,module,exports){
const sequenceGenerator = (startMidi, options) => {
  const { interval, direction } = options;
  const generatedSequence = [];

  // keep going if note is 0 or not an interval that is multiple of 12
  // since sequences can go past an octave but still get back to root
  for (let note = 0; !note || note % 12 !== 0; note += interval) {
    let difference = direction === 'ASC' ? note : note * -1;
    generatedSequence.push(startMidi + difference);
  }

  return generatedSequence;
};

module.exports = sequenceGenerator;

},{}],10:[function(require,module,exports){
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[j], array[i]] = [array[i], array[j]];
  }

  return array;
};

const toneRowGenerator = (startMidi) => {
  let row = [startMidi];
  let randomArray = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  for (let num of randomArray) {
    row.push(startMidi + num);
  }

  return row;
};

module.exports = toneRowGenerator;
},{}],11:[function(require,module,exports){
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

},{"../noteGenerators/chordGenerator":7}],12:[function(require,module,exports){
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

},{"../noteGenerators/scaleGenerator":8}],13:[function(require,module,exports){
const sequenceGenerator = require('../noteGenerators/sequenceGenerator');
const scaleRouter = require('./scaleRouter');
const chordRouter = require('./chordRouter');

const { midiToFlat } = require('../../conversionTables/midiToNoteTables');

const sequenceRouter = (startMidi, options, selections) => {
  const generatedSequence = sequenceGenerator(startMidi, options);

  if (!selections.length) {
    return generatedSequence.map(midiNote => midiToFlat[midiNote]);
  }

  const { type, value } = selections[0];
  let results = [];

  for (let i = 0; i < generatedSequence.length; i++) {
    switch (type) {
      case 'scale':
        results = results.concat(
          scaleRouter(generatedSequence[i], value, selections.slice(1))
        );
        break;

      case 'chord':
        results = results.concat(
          chordRouter(generatedSequence[i], value, selections.slice(1))
        );
        break;

      default:
        return generatedSequence.map(midiNote => midiToFlat[midiNote]);
    }
  }

  return results;
};

module.exports = sequenceRouter;

},{"../../conversionTables/midiToNoteTables":2,"../noteGenerators/sequenceGenerator":9,"./chordRouter":11,"./scaleRouter":12}],14:[function(require,module,exports){
const scaleRouter = require('./scaleRouter');
const chordRouter = require('./chordRouter');
const sequenceRouter = require('./sequenceRouter');

const singleNoteRouter = (startMidi, note, selections) => {
  if (!selections.length) {
    return [note];
  }

  const { type, value } = selections[0];

  switch (type) {
    case 'scale':
      return scaleRouter(startMidi, value, selections.slice(1));

    case 'chord':
      return chordRouter(startMidi, value, selections.slice(1));

    case 'sequence':
      return sequenceRouter(startMidi, value, selections.slice(1));

    default:
      return [note];
  }
};

module.exports = singleNoteRouter;

},{"./chordRouter":11,"./scaleRouter":12,"./sequenceRouter":13}],15:[function(require,module,exports){
const toneRowGenerator = require('../noteGenerators/toneRowGenerator');
const scaleRouter = require('./scaleRouter');
const chordRouter = require('./chordRouter');

const { midiToFlat } = require('../../conversionTables/midiToNoteTables');


const toneRowRouter = (startMidi, selections) => {
  const generatedRow = toneRowGenerator(startMidi);

  if (!selections[0]) {
    return generatedRow.map(midiNote => midiToFlat[midiNote]);
  }

  const { type, value } = selections[0];
  let results = [];

  for (let i = 0; i < generatedRow.length; i++) {
    switch (type) {
      case 'scale':
        results = results.concat(
          scaleRouter(generatedRow[i], value, selections.slice(1))
        );
        break;

      case 'chord':
        results = results.concat(
          chordRouter(generatedRow[i], value, selections.slice(1))
        );
        break;

      default:
        return generatedRow.map(midiNote => midiToFlat[midiNote]);
    }
  }

  return results;
};

module.exports = toneRowRouter;
},{"../../conversionTables/midiToNoteTables":2,"../noteGenerators/toneRowGenerator":10,"./chordRouter":11,"./scaleRouter":12}]},{},[6])(6)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInN0YXRpYy9zY3JpcHRzL2NvbnZlcnNpb25UYWJsZXMvY3JlYXRlTWlkaVRvTm90ZVRhYmxlLmpzIiwic3RhdGljL3NjcmlwdHMvY29udmVyc2lvblRhYmxlcy9taWRpVG9Ob3RlVGFibGVzLmpzIiwic3RhdGljL3NjcmlwdHMvY29udmVyc2lvblRhYmxlcy9ub3RlVG9NaWRpLmpzIiwic3RhdGljL3NjcmlwdHMvZGF0YS9jaG9yZHMuanMiLCJzdGF0aWMvc2NyaXB0cy9kYXRhL3NjYWxlcy5qcyIsInN0YXRpYy9zY3JpcHRzL2dlbmVyYXRvci9pbmRleC5qcyIsInN0YXRpYy9zY3JpcHRzL2dlbmVyYXRvci9ub3RlR2VuZXJhdG9ycy9jaG9yZEdlbmVyYXRvci5qcyIsInN0YXRpYy9zY3JpcHRzL2dlbmVyYXRvci9ub3RlR2VuZXJhdG9ycy9zY2FsZUdlbmVyYXRvci5qcyIsInN0YXRpYy9zY3JpcHRzL2dlbmVyYXRvci9ub3RlR2VuZXJhdG9ycy9zZXF1ZW5jZUdlbmVyYXRvci5qcyIsInN0YXRpYy9zY3JpcHRzL2dlbmVyYXRvci9ub3RlR2VuZXJhdG9ycy90b25lUm93R2VuZXJhdG9yLmpzIiwic3RhdGljL3NjcmlwdHMvZ2VuZXJhdG9yL3NlbGVjdGlvblJvdXRlcnMvY2hvcmRSb3V0ZXIuanMiLCJzdGF0aWMvc2NyaXB0cy9nZW5lcmF0b3Ivc2VsZWN0aW9uUm91dGVycy9zY2FsZVJvdXRlci5qcyIsInN0YXRpYy9zY3JpcHRzL2dlbmVyYXRvci9zZWxlY3Rpb25Sb3V0ZXJzL3NlcXVlbmNlUm91dGVyLmpzIiwic3RhdGljL3NjcmlwdHMvZ2VuZXJhdG9yL3NlbGVjdGlvblJvdXRlcnMvc2luZ2xlTm90ZVJvdXRlci5qcyIsInN0YXRpYy9zY3JpcHRzL2dlbmVyYXRvci9zZWxlY3Rpb25Sb3V0ZXJzL3RvbmVSb3dSb3V0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBjcmVhdGVNaWRpVG9Ob3RlVGFibGUgPSBub3RlcyA9PiB7XHJcbiAgY29uc3QgbWlkaVRvTm90ZVRhYmxlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICBsZXQgbWlkaUluZGV4ID0gMjE7XHJcbiAgbGV0IG5vdGVJbmRleCA9IDA7XHJcbiAgbGV0IG9jdGF2ZSA9IC0xO1xyXG5cclxuICB3aGlsZSAobWlkaUluZGV4IDwgMTA5KSB7XHJcbiAgICBtaWRpVG9Ob3RlVGFibGVbbWlkaUluZGV4XSA9IG5vdGVzW25vdGVJbmRleF0gKyBvY3RhdmU7XHJcbiAgICBtaWRpSW5kZXggKz0gMTtcclxuICAgIG5vdGVJbmRleCA9IChub3RlSW5kZXggKyAxKSAlIG5vdGVzLmxlbmd0aDtcclxuXHJcbiAgICBpZiAobm90ZXNbbm90ZUluZGV4XSA9PT0gJ0MnKSB7XHJcbiAgICAgIG9jdGF2ZSArPSAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1pZGlUb05vdGVUYWJsZTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlTWlkaVRvTm90ZVRhYmxlO1xyXG4iLCJjb25zdCBjcmVhdGVNaWRpVG9Ob3RlVGFibGUgPSByZXF1aXJlKCcuL2NyZWF0ZU1pZGlUb05vdGVUYWJsZS5qcycpO1xyXG5cclxuY29uc3Qgc2hhcnBOb3RlcyA9IFsnQScsICdBIycsICdCJywgJ0MnLCAnQyMnLCAnRCcsICdEIycsICdFJywgJ0YnLCAnRiMnLCAnRycsICdHIyddO1xyXG5jb25zdCBtaWRpVG9TaGFycCA9IGNyZWF0ZU1pZGlUb05vdGVUYWJsZShzaGFycE5vdGVzKTtcclxuXHJcbmNvbnN0IGZsYXROb3RlcyA9IFsnQScsICdCYicsICdCJywgJ0MnLCAnRGInLCAnRCcsICdFYicsICdFJywgJ0YnLCAnR2InLCAnRycsICdBYiddO1xyXG5jb25zdCBtaWRpVG9GbGF0ID0gY3JlYXRlTWlkaVRvTm90ZVRhYmxlKGZsYXROb3Rlcyk7XHJcblxyXG4vLyBjb3VsZCBhZGQgc2V0IGZvciBlYWNoIGtleT8gQSBtaW5vciwgQyBseWRpYW4uLi5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgbWlkaVRvU2hhcnAsXHJcbiAgbWlkaVRvRmxhdCxcclxufTtcclxuIiwiY29uc3Qgbm90ZVRvTWlkaSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbmNvbnN0IG5vdGVzID0gW1xyXG4gIFsnQSddLFxyXG4gIFsnQSMnLCAnQmInXSxcclxuICBbJ0InLCAnQ2InXSxcclxuICBbJ0IjJywgJ0MnXSxcclxuICBbJ0MjJywgJ0RiJ10sXHJcbiAgWydEJ10sXHJcbiAgWydEIycsICdFYiddLFxyXG4gIFsnRScsICdGYiddLFxyXG4gIFsnRSMnLCAnRiddLFxyXG4gIFsnRiMnLCAnR2InXSxcclxuICBbJ0cnXSxcclxuICBbJ0cjJywgJ0FiJ11cclxuXTtcclxuXHJcbmxldCBtaWRpSW5kZXggPSAyMTtcclxubGV0IG5vdGVJbmRleCA9IDA7XHJcbmxldCBvY3RhdmUgPSAtMTtcclxuXHJcbndoaWxlIChtaWRpSW5kZXggPCAxMDkpIHtcclxuICBmb3IgKGxldCBub3RlIG9mIG5vdGVzW25vdGVJbmRleF0pIHtcclxuICAgIG5vdGVUb01pZGlbbm90ZSArIG9jdGF2ZV0gPSBtaWRpSW5kZXg7XHJcbiAgfVxyXG5cclxuICBtaWRpSW5kZXggKz0gMTtcclxuICBub3RlSW5kZXggPSAobm90ZUluZGV4ICsgMSkgJSBub3Rlcy5sZW5ndGg7XHJcblxyXG4gIGlmIChub3Rlc1tub3RlSW5kZXhdWzBdID09PSAnQiMnKSB7XHJcbiAgICBvY3RhdmUgKz0gMTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbm90ZVRvTWlkaTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgJ01haic6IFswLCA0LCA3XSxcclxuICAnTWluJzogWzAsIDMsIDddLFxyXG4gICdBdWcnOiBbMCwgNCwgOF0sXHJcbiAgJ0RpbSc6IFswLCAzLCA2XSxcclxuICAnU3VzJzogWzAsIDUsIDddLFxyXG4gICdRdWFydGFsIChQNCwgUDQpJzogWzAsIDUsIDEwXSxcclxuICAnTWFqMic6IFswLCAyLCA0LCA3XSxcclxuICAnTWluMic6IFswLCAyLCAzLCA3XSxcclxuICAnTWFqNyc6IFswLCA0LCA3LCAxMV0sXHJcbiAgJzcnOiBbMCwgNCwgNywgMTBdLFxyXG4gICdNaW43JzogWzAsIDMsIDcsIDEwXSxcclxuICAnSGFsZiBkaW0nOiBbMCwgMywgNiwgMTBdLFxyXG4gICdEaW03JzogWzAsIDMsIDYsIDldLFxyXG4gICc3c3VzJzogWzAsIDUsIDcsIDEwXSxcclxuICAnTWFqN2I1JzogWzAsIDQsIDYsIDExXSxcclxuICAnNygjOSwjNSknOiBbMCwgNCwgOCwgMTAsIDE1XSxcclxuICAnNyhiOSknOiBbMCwgNCwgNywgMTAsIDEzXSxcclxuICAnTWFqMTMoIzExKSc6IFswLCA0LCA3LCAxMSwgMTQsIDE4LCAyMV0sXHJcbiAgJzEzKCMxMSknOiBbMCwgNCwgNywgMTAsIDE0LCAxOCwgMjFdLFxyXG4gICdNaW4xMSc6IFswLCAzLCA3LCAxMCwgMTQsIDE3XSxcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAnTWFqb3InOiBbMCwgMiwgNCwgNSwgNywgOSwgMTEsIDEyXSxcclxuICAnTWVsb2RpYyBtaW5vciBBU0MnOiBbMCwgMiwgMywgNSwgNywgOSwgMTEsIDEyXSxcclxuICAnTWVsb2RpYyBtaW5vciBERVNDJzogWzAsIDIsIDMsIDUsIDcsIDgsIDEwLCAxMl0sXHJcbiAgJ0Rvcmlhbic6IFswLCAyLCAzLCA1LCA3LCA5LCAxMCwgMTJdLFxyXG4gICdNaXhvbHlkaWFuJzogWzAsIDIsIDQsIDUsIDcsIDksIDEwLCAxMl0sXHJcbiAgJ0x5ZGlhbiBkb21pbmFudCc6IFswLCAyLCA0LCA2LCA3LCA5LCAxMCwgMTJdLFxyXG4gICdBbHRlcmVkJzogWzAsIDEsIDMsIDQsIDYsIDgsIDEwLCAxMl0sXHJcbiAgJ0hhcm1vbmljIG1pbm9yJzogWzAsIDIsIDMsIDUsIDcsIDgsIDExLCAxMl0sXHJcbiAgJ01ham9yIHBlbnRhdG9uaWMnOiBbMCwgMiwgNCwgNywgOSwgMTJdLFxyXG4gICdNaW5vciBwZW50YXRvbmljJzogWzAsIDMsIDUsIDcsIDEwLCAxMl0sXHJcbiAgJ1dob2xlIGhhbGYgZGltaW5pc2hlZCc6IFswLCAyLCAzLCA1LCA2LCA4LCA5LCAxMSwgMTJdLFxyXG4gICdXaG9sZSB0b25lJzogWzAsIDIsIDQsIDYsIDgsIDEwLCAxMl0sXHJcbiAgJ0x5ZGlhbic6IFswLCAyLCA0LCA2LCA3LCA5LCAxMSwgMTJdLFxyXG4gICdBZW9saWFuJzogWzAsIDIsIDMsIDUsIDcsIDgsIDEwLCAxMl0sXHJcbiAgJ0thbnNhcyBDaXR5JzogWzAsIDIsIDMsIDcsIDksIDEyXSxcclxuICAnQmx1ZXMnOiBbMCwgMywgNSwgNiwgNywgMTAsIDEyXSxcclxuICAnTWFqb3IgYmx1ZXMnOiBbMCwgNCwgNSwgNiwgNywgMTAsIDEyXSxcclxuICAnQXVnbWVudGVkJzogWzAsIDMsIDQsIDcsIDgsIDExLCAxMl0sXHJcbiAgJ1BocnlnaWFuJzogWzAsIDEsIDMsIDUsIDcsIDgsIDEwLCAxMl0sXHJcbiAgJ0xvY3JpYW4nOiBbMCwgMSwgMywgNSwgNiwgOCwgMTAsIDEyXSxcclxuICAnSGFybW9uaWMgbWFqb3InOiBbMCwgMiwgNCwgNSwgNywgOCwgMTEsIDEyXSxcclxufTsiLCJjb25zdCBzaW5nbGVOb3RlUm91dGVyID0gcmVxdWlyZSgnLi9zZWxlY3Rpb25Sb3V0ZXJzL3NpbmdsZU5vdGVSb3V0ZXInKTtcclxuY29uc3QgdG9uZVJvd1JvdXRlciA9IHJlcXVpcmUoJy4vc2VsZWN0aW9uUm91dGVycy90b25lUm93Um91dGVyJyk7XHJcbmNvbnN0IG5vdGVUb01pZGkgPSByZXF1aXJlKCcuLi9jb252ZXJzaW9uVGFibGVzL25vdGVUb01pZGknKTtcclxuXHJcbi8vIHNlbGVjdGlvbnMgaXMgYXJyYXkgb2Ygb2JqZWN0IHdpdGggdHlwZSBhbmQgdmFsdWVcclxuY29uc3QgZ2VuZXJhdGUgPSBzZWxlY3Rpb25zID0+IHtcclxuICBsZXQgZ2VuZXJhdGVkTm90ZXMgPSBbXTtcclxuICBjb25zdCB7IHR5cGUsIHZhbHVlIH0gPSBzZWxlY3Rpb25zWzBdO1xyXG4gIGNvbnN0IHN0YXJ0TWlkaSA9IG5vdGVUb01pZGlbdmFsdWUubm90ZV07XHJcblxyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSAnc2luZ2xlIG5vdGUnOlxyXG4gICAgICBnZW5lcmF0ZWROb3RlcyA9IHNpbmdsZU5vdGVSb3V0ZXIoc3RhcnRNaWRpLCB2YWx1ZS5ub3RlLCBzZWxlY3Rpb25zLnNsaWNlKDEpKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAndG9uZSByb3cnOlxyXG4gICAgICAvLyBmb3Igbm93IGp1c3QgdGFrZXMgYSBzdGFydGluZyBub3RlIGFuZCBnZW5lcmF0ZXMgYSByYW5kb20gcm93XHJcbiAgICAgIGdlbmVyYXRlZE5vdGVzID0gdG9uZVJvd1JvdXRlcihzdGFydE1pZGksIHNlbGVjdGlvbnMuc2xpY2UoMSkpO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBnZW5lcmF0ZWROb3RlcztcclxuICB9XHJcblxyXG4gIC8vZm9ybWF0IHRoZSBnZW5lcmF0ZWQgbm90ZXMgLi4uIGhhdmUgdGhlc2UgYmUgc2VwZXJhdGUgZnVuY3Rpb25zXHJcbiAgcmV0dXJuIGdlbmVyYXRlZE5vdGVzO1xyXG59O1xyXG5cclxuLy8gbmVlZCB0byBwYXNzIGluIGEgcmFuZ2UuLi4gcGxheWVyIGNvdWxkIGV2ZW50dWFsbHkgY2hhbmdlIHRoaXNcclxuLy8gc2hvdWxkIGNoZWNrIHJhbmdlIGluIGdlbmVyYXRlIGZ1bmN0aW9uc1xyXG5cclxuLy8gc2hvdWxkIGhhdmUgYSBzY2FsZSBvciBjaG9yZCB0eXBlIG1hcCB0byBhIHBpdGNoIHNldCBmb3IgIyBhbmQgYlxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZTtcclxuXHJcblxyXG4vL1RFU1RTXHJcbi8vIGNvbnNvbGUubG9nKFxyXG4vLyAgIGdlbmVyYXRlKFtcclxuLy8gICAgIC8vU1RBUlRJTkcgTk9URVxyXG4vLyAgICAge3R5cGU6ICd0b25lIHJvdycsIHZhbHVlOiAnQzMnfSxcclxuXHJcbi8vICAgICAvL1NFUVVFTkNFXHJcbi8vICAgICAvLyB7dHlwZTogJ3NlcXVlbmNlJywgdmFsdWU6IHtpbnRlcnZhbDogMywgZGlyZWN0aW9uOiAnREVTQyd9fSwgXHJcblxyXG4vLyAgICAgLy9TQ0FMRVxyXG4vLyAgICAge3R5cGU6ICdjaG9yZCcsIHZhbHVlOiB7bmFtZTogJ01pbjExJywgZGlyZWN0aW9uczogWydBU0MnLCAnREVTQyddfX0sXHJcbi8vICAgXSlcclxuLy8gKTtcclxuIiwiY29uc3QgY2hvcmRzID0gcmVxdWlyZSgnLi4vLi4vZGF0YS9jaG9yZHMnKTtcclxuXHJcbi8vIGltcG9ydCBtaWRpIHRvIG5vdGUgY29udmVydGVycyAobmVlZCB0byBpbXByb3ZlIHRoaXMgc3lzdGVtKVxyXG5jb25zdCB7IG1pZGlUb0ZsYXQgfSA9IHJlcXVpcmUoJy4uLy4uL2NvbnZlcnNpb25UYWJsZXMvbWlkaVRvTm90ZVRhYmxlcycpO1xyXG5cclxuY29uc3QgZ2V0QXNjQ2hvcmQgPSAoc3RhcnRNaWRpLCBjaG9yZCkgPT4ge1xyXG4gIC8vIGRlZmF1bHQgdG8gbWlkaVRvRmxhdCBmb3Igbm93XHJcbiAgcmV0dXJuIGNob3JkLm1hcChpbnRlcnZhbCA9PiBtaWRpVG9GbGF0W3N0YXJ0TWlkaSArIGludGVydmFsXSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXREZXNjQ2hvcmQgPSAoc3RhcnRNaWRpLCBjaG9yZCkgPT4ge1xyXG4gIC8vIGRlZmF1bHQgdG8gbWlkaVRvRmxhdCBmb3Igbm93XHJcbiAgcmV0dXJuIGNob3JkLm1hcChpbnRlcnZhbCA9PiBtaWRpVG9GbGF0W3N0YXJ0TWlkaSArIGludGVydmFsXSkucmV2ZXJzZSgpO1xyXG59O1xyXG5cclxuY29uc3QgY2hvcmRHZW5lcmF0b3IgPSAoc3RhcnRNaWRpLCBvcHRpb25zKSA9PiB7XHJcbiAgLy8gZ2V0IGNob3JkIGZyb20gdGFibGVcclxuICBjb25zdCBjaG9yZCA9IGNob3Jkc1tvcHRpb25zLm5hbWVdO1xyXG5cclxuICBjb25zdCBnZW5lcmF0ZWRDaG9yZCA9IFtdO1xyXG4gIGZvciAobGV0IGRpcmVjdGlvbiBvZiBvcHRpb25zLmRpcmVjdGlvbnMpIHtcclxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdBU0MnKSB7XHJcbiAgICAgIGdlbmVyYXRlZENob3JkLnB1c2goZ2V0QXNjQ2hvcmQoc3RhcnRNaWRpLCBjaG9yZCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ2VuZXJhdGVkQ2hvcmQucHVzaChnZXREZXNjQ2hvcmQoc3RhcnRNaWRpLCBjaG9yZCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGdlbmVyYXRlZENob3JkO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjaG9yZEdlbmVyYXRvcjtcclxuIiwiLy8gaW1wb3J0IHNjYWxlc1xyXG5jb25zdCBzY2FsZXMgPSByZXF1aXJlKCcuLi8uLi9kYXRhL3NjYWxlcycpO1xyXG5cclxuLy8gaW1wb3J0IG1pZGkgdG8gbm90ZSBjb252ZXJ0ZXJzIChuZWVkIHRvIGltcHJvdmUgdGhpcyBzeXN0ZW0pXHJcbmNvbnN0IHsgbWlkaVRvRmxhdCB9ID0gcmVxdWlyZSgnLi4vLi4vY29udmVyc2lvblRhYmxlcy9taWRpVG9Ob3RlVGFibGVzJyk7XHJcblxyXG5jb25zdCBnZXRBc2NTY2FsZSA9IChzdGFydE1pZGksIHNjYWxlKSA9PiB7XHJcbiAgLy8gZGVmYXVsdCB0byBtaWRpVG9GbGF0IGZvciBub3dcclxuICByZXR1cm4gc2NhbGUubWFwKGludGVydmFsID0+IG1pZGlUb0ZsYXRbc3RhcnRNaWRpICsgaW50ZXJ2YWxdKTtcclxufTtcclxuXHJcbmNvbnN0IGdldERlc2NTY2FsZSA9IChzdGFydE1pZGksIHNjYWxlKSA9PiB7XHJcbiAgLy8gZGVmYXVsdCB0byBtaWRpVG9GbGF0IGZvciBub3dcclxuICByZXR1cm4gc2NhbGUubWFwKGludGVydmFsID0+IG1pZGlUb0ZsYXRbc3RhcnRNaWRpICsgaW50ZXJ2YWxdKS5yZXZlcnNlKCk7XHJcbn07XHJcblxyXG5jb25zdCBzY2FsZUdlbmVyYXRvciA9IChzdGFydE1pZGksIG9wdGlvbnMpID0+IHtcclxuICAvLyBnZXQgc2NhbGUgZnJvbSB0YWJsZVxyXG4gIGNvbnN0IHNjYWxlID0gc2NhbGVzW29wdGlvbnMubmFtZV07XHJcblxyXG4gIGNvbnN0IGdlbmVyYXRlZFNjYWxlID0gW107XHJcbiAgZm9yIChsZXQgZGlyZWN0aW9uIG9mIG9wdGlvbnMuZGlyZWN0aW9ucykge1xyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ0FTQycpIHtcclxuICAgICAgZ2VuZXJhdGVkU2NhbGUucHVzaChnZXRBc2NTY2FsZShzdGFydE1pZGksIHNjYWxlKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBnZW5lcmF0ZWRTY2FsZS5wdXNoKGdldERlc2NTY2FsZShzdGFydE1pZGksIHNjYWxlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZ2VuZXJhdGVkU2NhbGU7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNjYWxlR2VuZXJhdG9yO1xyXG4iLCJjb25zdCBzZXF1ZW5jZUdlbmVyYXRvciA9IChzdGFydE1pZGksIG9wdGlvbnMpID0+IHtcclxuICBjb25zdCB7IGludGVydmFsLCBkaXJlY3Rpb24gfSA9IG9wdGlvbnM7XHJcbiAgY29uc3QgZ2VuZXJhdGVkU2VxdWVuY2UgPSBbXTtcclxuXHJcbiAgLy8ga2VlcCBnb2luZyBpZiBub3RlIGlzIDAgb3Igbm90IGFuIGludGVydmFsIHRoYXQgaXMgbXVsdGlwbGUgb2YgMTJcclxuICAvLyBzaW5jZSBzZXF1ZW5jZXMgY2FuIGdvIHBhc3QgYW4gb2N0YXZlIGJ1dCBzdGlsbCBnZXQgYmFjayB0byByb290XHJcbiAgZm9yIChsZXQgbm90ZSA9IDA7ICFub3RlIHx8IG5vdGUgJSAxMiAhPT0gMDsgbm90ZSArPSBpbnRlcnZhbCkge1xyXG4gICAgbGV0IGRpZmZlcmVuY2UgPSBkaXJlY3Rpb24gPT09ICdBU0MnID8gbm90ZSA6IG5vdGUgKiAtMTtcclxuICAgIGdlbmVyYXRlZFNlcXVlbmNlLnB1c2goc3RhcnRNaWRpICsgZGlmZmVyZW5jZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZ2VuZXJhdGVkU2VxdWVuY2U7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNlcXVlbmNlR2VuZXJhdG9yO1xyXG4iLCJjb25zdCBzaHVmZmxlID0gKGFycmF5KSA9PiB7XHJcbiAgZm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcclxuICAgIFthcnJheVtqXSwgYXJyYXlbaV1dID0gW2FycmF5W2ldLCBhcnJheVtqXV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXJyYXk7XHJcbn07XHJcblxyXG5jb25zdCB0b25lUm93R2VuZXJhdG9yID0gKHN0YXJ0TWlkaSkgPT4ge1xyXG4gIGxldCByb3cgPSBbc3RhcnRNaWRpXTtcclxuICBsZXQgcmFuZG9tQXJyYXkgPSBzaHVmZmxlKFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTFdKTtcclxuXHJcbiAgZm9yIChsZXQgbnVtIG9mIHJhbmRvbUFycmF5KSB7XHJcbiAgICByb3cucHVzaChzdGFydE1pZGkgKyBudW0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvdztcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdG9uZVJvd0dlbmVyYXRvcjsiLCJjb25zdCBjaG9yZEdlbmVyYXRvciA9IHJlcXVpcmUoJy4uL25vdGVHZW5lcmF0b3JzL2Nob3JkR2VuZXJhdG9yJyk7XHJcbi8vIGFkZCByb3V0ZXJzIGhlcmVcclxuXHJcbmNvbnN0IGNob3JkUm91dGVyID0gKHN0YXJ0TWlkaSwgb3B0aW9ucywgc2VsZWN0aW9ucykgPT4ge1xyXG4gIGNvbnN0IGdlbmVyYXRlZENob3JkID0gY2hvcmRHZW5lcmF0b3Ioc3RhcnRNaWRpLCBvcHRpb25zKTtcclxuICBcclxuICBpZiAoIXNlbGVjdGlvbnMubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gZ2VuZXJhdGVkQ2hvcmQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IHR5cGUsIHZhbHVlIH0gPSBzZWxlY3Rpb25zWzBdO1xyXG5cclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIC8vIGFkZCBjYXNlcyBoZXJlLCB3aWxsIG5lZWQgdG8gcnVuIG5leHQgb3BlcmF0aW9uIG9uIGFsbCBhcnBlZ2lvcy4uLlxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBnZW5lcmF0ZWRDaG9yZDtcclxuICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNob3JkUm91dGVyO1xyXG4iLCJjb25zdCBzY2FsZUdlbmVyYXRvciA9IHJlcXVpcmUoJy4uL25vdGVHZW5lcmF0b3JzL3NjYWxlR2VuZXJhdG9yJyk7XHJcbi8vIGFkZCByb3V0ZXJzIGhlcmVcclxuXHJcbmNvbnN0IHNjYWxlUm91dGVyID0gKHN0YXJ0TWlkaSwgb3B0aW9ucywgc2VsZWN0aW9ucykgPT4ge1xyXG4gIGNvbnN0IGdlbmVyYXRyZWRTY2FsZSA9IHNjYWxlR2VuZXJhdG9yKHN0YXJ0TWlkaSwgb3B0aW9ucyk7XHJcbiAgXHJcbiAgaWYgKCFzZWxlY3Rpb25zLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIGdlbmVyYXRyZWRTY2FsZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgdHlwZSwgdmFsdWUgfSA9IHNlbGVjdGlvbnNbMF07XHJcblxyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgLy8gYWRkIGNhc2VzIGhlcmUsIHdpbGwgbmVlZCB0byBydW4gbmV4dCBvcGVyYXRpb24gb24gYWxsIHNjYWxlcy4uLlxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBnZW5lcmF0cmVkU2NhbGU7XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzY2FsZVJvdXRlcjtcclxuIiwiY29uc3Qgc2VxdWVuY2VHZW5lcmF0b3IgPSByZXF1aXJlKCcuLi9ub3RlR2VuZXJhdG9ycy9zZXF1ZW5jZUdlbmVyYXRvcicpO1xyXG5jb25zdCBzY2FsZVJvdXRlciA9IHJlcXVpcmUoJy4vc2NhbGVSb3V0ZXInKTtcclxuY29uc3QgY2hvcmRSb3V0ZXIgPSByZXF1aXJlKCcuL2Nob3JkUm91dGVyJyk7XHJcblxyXG5jb25zdCB7IG1pZGlUb0ZsYXQgfSA9IHJlcXVpcmUoJy4uLy4uL2NvbnZlcnNpb25UYWJsZXMvbWlkaVRvTm90ZVRhYmxlcycpO1xyXG5cclxuY29uc3Qgc2VxdWVuY2VSb3V0ZXIgPSAoc3RhcnRNaWRpLCBvcHRpb25zLCBzZWxlY3Rpb25zKSA9PiB7XHJcbiAgY29uc3QgZ2VuZXJhdGVkU2VxdWVuY2UgPSBzZXF1ZW5jZUdlbmVyYXRvcihzdGFydE1pZGksIG9wdGlvbnMpO1xyXG5cclxuICBpZiAoIXNlbGVjdGlvbnMubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gZ2VuZXJhdGVkU2VxdWVuY2UubWFwKG1pZGlOb3RlID0+IG1pZGlUb0ZsYXRbbWlkaU5vdGVdKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgdHlwZSwgdmFsdWUgfSA9IHNlbGVjdGlvbnNbMF07XHJcbiAgbGV0IHJlc3VsdHMgPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZW5lcmF0ZWRTZXF1ZW5jZS5sZW5ndGg7IGkrKykge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ3NjYWxlJzpcclxuICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoXHJcbiAgICAgICAgICBzY2FsZVJvdXRlcihnZW5lcmF0ZWRTZXF1ZW5jZVtpXSwgdmFsdWUsIHNlbGVjdGlvbnMuc2xpY2UoMSkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2Nob3JkJzpcclxuICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoXHJcbiAgICAgICAgICBjaG9yZFJvdXRlcihnZW5lcmF0ZWRTZXF1ZW5jZVtpXSwgdmFsdWUsIHNlbGVjdGlvbnMuc2xpY2UoMSkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlZFNlcXVlbmNlLm1hcChtaWRpTm90ZSA9PiBtaWRpVG9GbGF0W21pZGlOb3RlXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0cztcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc2VxdWVuY2VSb3V0ZXI7XHJcbiIsImNvbnN0IHNjYWxlUm91dGVyID0gcmVxdWlyZSgnLi9zY2FsZVJvdXRlcicpO1xyXG5jb25zdCBjaG9yZFJvdXRlciA9IHJlcXVpcmUoJy4vY2hvcmRSb3V0ZXInKTtcclxuY29uc3Qgc2VxdWVuY2VSb3V0ZXIgPSByZXF1aXJlKCcuL3NlcXVlbmNlUm91dGVyJyk7XHJcblxyXG5jb25zdCBzaW5nbGVOb3RlUm91dGVyID0gKHN0YXJ0TWlkaSwgbm90ZSwgc2VsZWN0aW9ucykgPT4ge1xyXG4gIGlmICghc2VsZWN0aW9ucy5sZW5ndGgpIHtcclxuICAgIHJldHVybiBbbm90ZV07XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IHR5cGUsIHZhbHVlIH0gPSBzZWxlY3Rpb25zWzBdO1xyXG5cclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgJ3NjYWxlJzpcclxuICAgICAgcmV0dXJuIHNjYWxlUm91dGVyKHN0YXJ0TWlkaSwgdmFsdWUsIHNlbGVjdGlvbnMuc2xpY2UoMSkpO1xyXG5cclxuICAgIGNhc2UgJ2Nob3JkJzpcclxuICAgICAgcmV0dXJuIGNob3JkUm91dGVyKHN0YXJ0TWlkaSwgdmFsdWUsIHNlbGVjdGlvbnMuc2xpY2UoMSkpO1xyXG5cclxuICAgIGNhc2UgJ3NlcXVlbmNlJzpcclxuICAgICAgcmV0dXJuIHNlcXVlbmNlUm91dGVyKHN0YXJ0TWlkaSwgdmFsdWUsIHNlbGVjdGlvbnMuc2xpY2UoMSkpO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBbbm90ZV07XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzaW5nbGVOb3RlUm91dGVyO1xyXG4iLCJjb25zdCB0b25lUm93R2VuZXJhdG9yID0gcmVxdWlyZSgnLi4vbm90ZUdlbmVyYXRvcnMvdG9uZVJvd0dlbmVyYXRvcicpO1xyXG5jb25zdCBzY2FsZVJvdXRlciA9IHJlcXVpcmUoJy4vc2NhbGVSb3V0ZXInKTtcclxuY29uc3QgY2hvcmRSb3V0ZXIgPSByZXF1aXJlKCcuL2Nob3JkUm91dGVyJyk7XHJcblxyXG5jb25zdCB7IG1pZGlUb0ZsYXQgfSA9IHJlcXVpcmUoJy4uLy4uL2NvbnZlcnNpb25UYWJsZXMvbWlkaVRvTm90ZVRhYmxlcycpO1xyXG5cclxuXHJcbmNvbnN0IHRvbmVSb3dSb3V0ZXIgPSAoc3RhcnRNaWRpLCBzZWxlY3Rpb25zKSA9PiB7XHJcbiAgY29uc3QgZ2VuZXJhdGVkUm93ID0gdG9uZVJvd0dlbmVyYXRvcihzdGFydE1pZGkpO1xyXG5cclxuICBpZiAoIXNlbGVjdGlvbnNbMF0pIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZWRSb3cubWFwKG1pZGlOb3RlID0+IG1pZGlUb0ZsYXRbbWlkaU5vdGVdKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgdHlwZSwgdmFsdWUgfSA9IHNlbGVjdGlvbnNbMF07XHJcbiAgbGV0IHJlc3VsdHMgPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZW5lcmF0ZWRSb3cubGVuZ3RoOyBpKyspIHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdzY2FsZSc6XHJcbiAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KFxyXG4gICAgICAgICAgc2NhbGVSb3V0ZXIoZ2VuZXJhdGVkUm93W2ldLCB2YWx1ZSwgc2VsZWN0aW9ucy5zbGljZSgxKSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnY2hvcmQnOlxyXG4gICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChcclxuICAgICAgICAgIGNob3JkUm91dGVyKGdlbmVyYXRlZFJvd1tpXSwgdmFsdWUsIHNlbGVjdGlvbnMuc2xpY2UoMSkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlZFJvdy5tYXAobWlkaU5vdGUgPT4gbWlkaVRvRmxhdFttaWRpTm90ZV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdHM7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHRvbmVSb3dSb3V0ZXI7Il19
