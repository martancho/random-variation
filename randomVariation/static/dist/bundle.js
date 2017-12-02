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
  const startMidi = noteToMidi[value];

  switch (type) {
    case 'single note':
      generatedNotes = singleNoteRouter(startMidi, value, selections.slice(1));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInN0YXRpYy9zY3JpcHRzL2NvbnZlcnNpb25UYWJsZXMvY3JlYXRlTWlkaVRvTm90ZVRhYmxlLmpzIiwic3RhdGljL3NjcmlwdHMvY29udmVyc2lvblRhYmxlcy9taWRpVG9Ob3RlVGFibGVzLmpzIiwic3RhdGljL3NjcmlwdHMvY29udmVyc2lvblRhYmxlcy9ub3RlVG9NaWRpLmpzIiwic3RhdGljL3NjcmlwdHMvZGF0YS9jaG9yZHMuanMiLCJzdGF0aWMvc2NyaXB0cy9kYXRhL3NjYWxlcy5qcyIsInN0YXRpYy9zY3JpcHRzL2dlbmVyYXRvci9pbmRleC5qcyIsInN0YXRpYy9zY3JpcHRzL2dlbmVyYXRvci9ub3RlR2VuZXJhdG9ycy9jaG9yZEdlbmVyYXRvci5qcyIsInN0YXRpYy9zY3JpcHRzL2dlbmVyYXRvci9ub3RlR2VuZXJhdG9ycy9zY2FsZUdlbmVyYXRvci5qcyIsInN0YXRpYy9zY3JpcHRzL2dlbmVyYXRvci9ub3RlR2VuZXJhdG9ycy9zZXF1ZW5jZUdlbmVyYXRvci5qcyIsInN0YXRpYy9zY3JpcHRzL2dlbmVyYXRvci9ub3RlR2VuZXJhdG9ycy90b25lUm93R2VuZXJhdG9yLmpzIiwic3RhdGljL3NjcmlwdHMvZ2VuZXJhdG9yL3NlbGVjdGlvblJvdXRlcnMvY2hvcmRSb3V0ZXIuanMiLCJzdGF0aWMvc2NyaXB0cy9nZW5lcmF0b3Ivc2VsZWN0aW9uUm91dGVycy9zY2FsZVJvdXRlci5qcyIsInN0YXRpYy9zY3JpcHRzL2dlbmVyYXRvci9zZWxlY3Rpb25Sb3V0ZXJzL3NlcXVlbmNlUm91dGVyLmpzIiwic3RhdGljL3NjcmlwdHMvZ2VuZXJhdG9yL3NlbGVjdGlvblJvdXRlcnMvc2luZ2xlTm90ZVJvdXRlci5qcyIsInN0YXRpYy9zY3JpcHRzL2dlbmVyYXRvci9zZWxlY3Rpb25Sb3V0ZXJzL3RvbmVSb3dSb3V0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBjcmVhdGVNaWRpVG9Ob3RlVGFibGUgPSBub3RlcyA9PiB7XG4gIGNvbnN0IG1pZGlUb05vdGVUYWJsZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGxldCBtaWRpSW5kZXggPSAyMTtcbiAgbGV0IG5vdGVJbmRleCA9IDA7XG4gIGxldCBvY3RhdmUgPSAtMTtcblxuICB3aGlsZSAobWlkaUluZGV4IDwgMTA5KSB7XG4gICAgbWlkaVRvTm90ZVRhYmxlW21pZGlJbmRleF0gPSBub3Rlc1tub3RlSW5kZXhdICsgb2N0YXZlO1xuICAgIG1pZGlJbmRleCArPSAxO1xuICAgIG5vdGVJbmRleCA9IChub3RlSW5kZXggKyAxKSAlIG5vdGVzLmxlbmd0aDtcblxuICAgIGlmIChub3Rlc1tub3RlSW5kZXhdID09PSAnQycpIHtcbiAgICAgIG9jdGF2ZSArPSAxO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtaWRpVG9Ob3RlVGFibGU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZU1pZGlUb05vdGVUYWJsZTtcbiIsImNvbnN0IGNyZWF0ZU1pZGlUb05vdGVUYWJsZSA9IHJlcXVpcmUoJy4vY3JlYXRlTWlkaVRvTm90ZVRhYmxlLmpzJyk7XG5cbmNvbnN0IHNoYXJwTm90ZXMgPSBbJ0EnLCAnQSMnLCAnQicsICdDJywgJ0MjJywgJ0QnLCAnRCMnLCAnRScsICdGJywgJ0YjJywgJ0cnLCAnRyMnXTtcbmNvbnN0IG1pZGlUb1NoYXJwID0gY3JlYXRlTWlkaVRvTm90ZVRhYmxlKHNoYXJwTm90ZXMpO1xuXG5jb25zdCBmbGF0Tm90ZXMgPSBbJ0EnLCAnQmInLCAnQicsICdDJywgJ0RiJywgJ0QnLCAnRWInLCAnRScsICdGJywgJ0diJywgJ0cnLCAnQWInXTtcbmNvbnN0IG1pZGlUb0ZsYXQgPSBjcmVhdGVNaWRpVG9Ob3RlVGFibGUoZmxhdE5vdGVzKTtcblxuLy8gY291bGQgYWRkIHNldCBmb3IgZWFjaCBrZXk/IEEgbWlub3IsIEMgbHlkaWFuLi4uXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWlkaVRvU2hhcnAsXG4gIG1pZGlUb0ZsYXQsXG59O1xuIiwiY29uc3Qgbm90ZVRvTWlkaSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5jb25zdCBub3RlcyA9IFtcbiAgWydBJ10sXG4gIFsnQSMnLCAnQmInXSxcbiAgWydCJywgJ0NiJ10sXG4gIFsnQiMnLCAnQyddLFxuICBbJ0MjJywgJ0RiJ10sXG4gIFsnRCddLFxuICBbJ0QjJywgJ0ViJ10sXG4gIFsnRScsICdGYiddLFxuICBbJ0UjJywgJ0YnXSxcbiAgWydGIycsICdHYiddLFxuICBbJ0cnXSxcbiAgWydHIycsICdBYiddXG5dO1xuXG5sZXQgbWlkaUluZGV4ID0gMjE7XG5sZXQgbm90ZUluZGV4ID0gMDtcbmxldCBvY3RhdmUgPSAtMTtcblxud2hpbGUgKG1pZGlJbmRleCA8IDEwOSkge1xuICBmb3IgKGxldCBub3RlIG9mIG5vdGVzW25vdGVJbmRleF0pIHtcbiAgICBub3RlVG9NaWRpW25vdGUgKyBvY3RhdmVdID0gbWlkaUluZGV4O1xuICB9XG5cbiAgbWlkaUluZGV4ICs9IDE7XG4gIG5vdGVJbmRleCA9IChub3RlSW5kZXggKyAxKSAlIG5vdGVzLmxlbmd0aDtcblxuICBpZiAobm90ZXNbbm90ZUluZGV4XVswXSA9PT0gJ0IjJykge1xuICAgIG9jdGF2ZSArPSAxO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbm90ZVRvTWlkaTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAnTWFqJzogWzAsIDQsIDddLFxuICAnTWluJzogWzAsIDMsIDddLFxuICAnQXVnJzogWzAsIDQsIDhdLFxuICAnRGltJzogWzAsIDMsIDZdLFxuICAnU3VzJzogWzAsIDUsIDddLFxuICAnUXVhcnRhbCAoUDQsIFA0KSc6IFswLCA1LCAxMF0sXG4gICdNYWoyJzogWzAsIDIsIDQsIDddLFxuICAnTWluMic6IFswLCAyLCAzLCA3XSxcbiAgJ01hajcnOiBbMCwgNCwgNywgMTFdLFxuICAnNyc6IFswLCA0LCA3LCAxMF0sXG4gICdNaW43JzogWzAsIDMsIDcsIDEwXSxcbiAgJ0hhbGYgZGltJzogWzAsIDMsIDYsIDEwXSxcbiAgJ0RpbTcnOiBbMCwgMywgNiwgOV0sXG4gICc3c3VzJzogWzAsIDUsIDcsIDEwXSxcbiAgJ01hajdiNSc6IFswLCA0LCA2LCAxMV0sXG4gICc3KCM5LCM1KSc6IFswLCA0LCA4LCAxMCwgMTVdLFxuICAnNyhiOSknOiBbMCwgNCwgNywgMTAsIDEzXSxcbiAgJ01hajEzKCMxMSknOiBbMCwgNCwgNywgMTEsIDE0LCAxOCwgMjFdLFxuICAnMTMoIzExKSc6IFswLCA0LCA3LCAxMCwgMTQsIDE4LCAyMV0sXG4gICdNaW4xMSc6IFswLCAzLCA3LCAxMCwgMTQsIDE3XSxcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICdNYWpvcic6IFswLCAyLCA0LCA1LCA3LCA5LCAxMSwgMTJdLFxuICAnTWVsb2RpYyBtaW5vciBBU0MnOiBbMCwgMiwgMywgNSwgNywgOSwgMTEsIDEyXSxcbiAgJ01lbG9kaWMgbWlub3IgREVTQyc6IFswLCAyLCAzLCA1LCA3LCA4LCAxMCwgMTJdLFxuICAnRG9yaWFuJzogWzAsIDIsIDMsIDUsIDcsIDksIDEwLCAxMl0sXG4gICdNaXhvbHlkaWFuJzogWzAsIDIsIDQsIDUsIDcsIDksIDEwLCAxMl0sXG4gICdMeWRpYW4gZG9taW5hbnQnOiBbMCwgMiwgNCwgNiwgNywgOSwgMTAsIDEyXSxcbiAgJ0FsdGVyZWQnOiBbMCwgMSwgMywgNCwgNiwgOCwgMTAsIDEyXSxcbiAgJ0hhcm1vbmljIG1pbm9yJzogWzAsIDIsIDMsIDUsIDcsIDgsIDExLCAxMl0sXG4gICdNYWpvciBwZW50YXRvbmljJzogWzAsIDIsIDQsIDcsIDksIDEyXSxcbiAgJ01pbm9yIHBlbnRhdG9uaWMnOiBbMCwgMywgNSwgNywgMTAsIDEyXSxcbiAgJ1dob2xlIGhhbGYgZGltaW5pc2hlZCc6IFswLCAyLCAzLCA1LCA2LCA4LCA5LCAxMSwgMTJdLFxuICAnV2hvbGUgdG9uZSc6IFswLCAyLCA0LCA2LCA4LCAxMCwgMTJdLFxuICAnTHlkaWFuJzogWzAsIDIsIDQsIDYsIDcsIDksIDExLCAxMl0sXG4gICdBZW9saWFuJzogWzAsIDIsIDMsIDUsIDcsIDgsIDEwLCAxMl0sXG4gICdLYW5zYXMgQ2l0eSc6IFswLCAyLCAzLCA3LCA5LCAxMl0sXG4gICdCbHVlcyc6IFswLCAzLCA1LCA2LCA3LCAxMCwgMTJdLFxuICAnTWFqb3IgYmx1ZXMnOiBbMCwgNCwgNSwgNiwgNywgMTAsIDEyXSxcbiAgJ0F1Z21lbnRlZCc6IFswLCAzLCA0LCA3LCA4LCAxMSwgMTJdLFxuICAnUGhyeWdpYW4nOiBbMCwgMSwgMywgNSwgNywgOCwgMTAsIDEyXSxcbiAgJ0xvY3JpYW4nOiBbMCwgMSwgMywgNSwgNiwgOCwgMTAsIDEyXSxcbiAgJ0hhcm1vbmljIG1ham9yJzogWzAsIDIsIDQsIDUsIDcsIDgsIDExLCAxMl0sXG59OyIsImNvbnN0IHNpbmdsZU5vdGVSb3V0ZXIgPSByZXF1aXJlKCcuL3NlbGVjdGlvblJvdXRlcnMvc2luZ2xlTm90ZVJvdXRlcicpO1xuY29uc3QgdG9uZVJvd1JvdXRlciA9IHJlcXVpcmUoJy4vc2VsZWN0aW9uUm91dGVycy90b25lUm93Um91dGVyJyk7XG5jb25zdCBub3RlVG9NaWRpID0gcmVxdWlyZSgnLi4vY29udmVyc2lvblRhYmxlcy9ub3RlVG9NaWRpJyk7XG5cbi8vIHNlbGVjdGlvbnMgaXMgYXJyYXkgb2Ygb2JqZWN0IHdpdGggdHlwZSBhbmQgdmFsdWVcbmNvbnN0IGdlbmVyYXRlID0gc2VsZWN0aW9ucyA9PiB7XG4gIGxldCBnZW5lcmF0ZWROb3RlcyA9IFtdO1xuICBjb25zdCB7IHR5cGUsIHZhbHVlIH0gPSBzZWxlY3Rpb25zWzBdO1xuICBjb25zdCBzdGFydE1pZGkgPSBub3RlVG9NaWRpW3ZhbHVlXTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdzaW5nbGUgbm90ZSc6XG4gICAgICBnZW5lcmF0ZWROb3RlcyA9IHNpbmdsZU5vdGVSb3V0ZXIoc3RhcnRNaWRpLCB2YWx1ZSwgc2VsZWN0aW9ucy5zbGljZSgxKSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3RvbmUgcm93JzpcbiAgICAgIC8vIGZvciBub3cganVzdCB0YWtlcyBhIHN0YXJ0aW5nIG5vdGUgYW5kIGdlbmVyYXRlcyBhIHJhbmRvbSByb3dcbiAgICAgIGdlbmVyYXRlZE5vdGVzID0gdG9uZVJvd1JvdXRlcihzdGFydE1pZGksIHNlbGVjdGlvbnMuc2xpY2UoMSkpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBnZW5lcmF0ZWROb3RlcztcbiAgfVxuXG4gIC8vZm9ybWF0IHRoZSBnZW5lcmF0ZWQgbm90ZXMgLi4uIGhhdmUgdGhlc2UgYmUgc2VwZXJhdGUgZnVuY3Rpb25zXG4gIHJldHVybiBnZW5lcmF0ZWROb3Rlcztcbn07XG5cbi8vIG5lZWQgdG8gcGFzcyBpbiBhIHJhbmdlLi4uIHBsYXllciBjb3VsZCBldmVudHVhbGx5IGNoYW5nZSB0aGlzXG4vLyBzaG91bGQgY2hlY2sgcmFuZ2UgaW4gZ2VuZXJhdGUgZnVuY3Rpb25zXG5cbi8vIHNob3VsZCBoYXZlIGEgc2NhbGUgb3IgY2hvcmQgdHlwZSBtYXAgdG8gYSBwaXRjaCBzZXQgZm9yICMgYW5kIGJcblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZTtcblxuXG4vL1RFU1RTXG4vLyBjb25zb2xlLmxvZyhcbi8vICAgZ2VuZXJhdGUoW1xuLy8gICAgIC8vU1RBUlRJTkcgTk9URVxuLy8gICAgIHt0eXBlOiAndG9uZSByb3cnLCB2YWx1ZTogJ0MzJ30sXG5cbi8vICAgICAvL1NFUVVFTkNFXG4vLyAgICAgLy8ge3R5cGU6ICdzZXF1ZW5jZScsIHZhbHVlOiB7aW50ZXJ2YWw6IDMsIGRpcmVjdGlvbjogJ0RFU0MnfX0sIFxuXG4vLyAgICAgLy9TQ0FMRVxuLy8gICAgIHt0eXBlOiAnY2hvcmQnLCB2YWx1ZToge25hbWU6ICdNaW4xMScsIGRpcmVjdGlvbnM6IFsnQVNDJywgJ0RFU0MnXX19LFxuLy8gICBdKVxuLy8gKTtcbiIsImNvbnN0IGNob3JkcyA9IHJlcXVpcmUoJy4uLy4uL2RhdGEvY2hvcmRzJyk7XG5cbi8vIGltcG9ydCBtaWRpIHRvIG5vdGUgY29udmVydGVycyAobmVlZCB0byBpbXByb3ZlIHRoaXMgc3lzdGVtKVxuY29uc3QgeyBtaWRpVG9GbGF0IH0gPSByZXF1aXJlKCcuLi8uLi9jb252ZXJzaW9uVGFibGVzL21pZGlUb05vdGVUYWJsZXMnKTtcblxuY29uc3QgZ2V0QXNjQ2hvcmQgPSAoc3RhcnRNaWRpLCBjaG9yZCkgPT4ge1xuICAvLyBkZWZhdWx0IHRvIG1pZGlUb0ZsYXQgZm9yIG5vd1xuICByZXR1cm4gY2hvcmQubWFwKGludGVydmFsID0+IG1pZGlUb0ZsYXRbc3RhcnRNaWRpICsgaW50ZXJ2YWxdKTtcbn07XG5cbmNvbnN0IGdldERlc2NDaG9yZCA9IChzdGFydE1pZGksIGNob3JkKSA9PiB7XG4gIC8vIGRlZmF1bHQgdG8gbWlkaVRvRmxhdCBmb3Igbm93XG4gIHJldHVybiBjaG9yZC5tYXAoaW50ZXJ2YWwgPT4gbWlkaVRvRmxhdFtzdGFydE1pZGkgKyBpbnRlcnZhbF0pLnJldmVyc2UoKTtcbn07XG5cbmNvbnN0IGNob3JkR2VuZXJhdG9yID0gKHN0YXJ0TWlkaSwgb3B0aW9ucykgPT4ge1xuICAvLyBnZXQgY2hvcmQgZnJvbSB0YWJsZVxuICBjb25zdCBjaG9yZCA9IGNob3Jkc1tvcHRpb25zLm5hbWVdO1xuXG4gIGNvbnN0IGdlbmVyYXRlZENob3JkID0gW107XG4gIGZvciAobGV0IGRpcmVjdGlvbiBvZiBvcHRpb25zLmRpcmVjdGlvbnMpIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnQVNDJykge1xuICAgICAgZ2VuZXJhdGVkQ2hvcmQucHVzaChnZXRBc2NDaG9yZChzdGFydE1pZGksIGNob3JkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbmVyYXRlZENob3JkLnB1c2goZ2V0RGVzY0Nob3JkKHN0YXJ0TWlkaSwgY2hvcmQpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2VuZXJhdGVkQ2hvcmQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNob3JkR2VuZXJhdG9yO1xuIiwiLy8gaW1wb3J0IHNjYWxlc1xuY29uc3Qgc2NhbGVzID0gcmVxdWlyZSgnLi4vLi4vZGF0YS9zY2FsZXMnKTtcblxuLy8gaW1wb3J0IG1pZGkgdG8gbm90ZSBjb252ZXJ0ZXJzIChuZWVkIHRvIGltcHJvdmUgdGhpcyBzeXN0ZW0pXG5jb25zdCB7IG1pZGlUb0ZsYXQgfSA9IHJlcXVpcmUoJy4uLy4uL2NvbnZlcnNpb25UYWJsZXMvbWlkaVRvTm90ZVRhYmxlcycpO1xuXG5jb25zdCBnZXRBc2NTY2FsZSA9IChzdGFydE1pZGksIHNjYWxlKSA9PiB7XG4gIC8vIGRlZmF1bHQgdG8gbWlkaVRvRmxhdCBmb3Igbm93XG4gIHJldHVybiBzY2FsZS5tYXAoaW50ZXJ2YWwgPT4gbWlkaVRvRmxhdFtzdGFydE1pZGkgKyBpbnRlcnZhbF0pO1xufTtcblxuY29uc3QgZ2V0RGVzY1NjYWxlID0gKHN0YXJ0TWlkaSwgc2NhbGUpID0+IHtcbiAgLy8gZGVmYXVsdCB0byBtaWRpVG9GbGF0IGZvciBub3dcbiAgcmV0dXJuIHNjYWxlLm1hcChpbnRlcnZhbCA9PiBtaWRpVG9GbGF0W3N0YXJ0TWlkaSArIGludGVydmFsXSkucmV2ZXJzZSgpO1xufTtcblxuY29uc3Qgc2NhbGVHZW5lcmF0b3IgPSAoc3RhcnRNaWRpLCBvcHRpb25zKSA9PiB7XG4gIC8vIGdldCBzY2FsZSBmcm9tIHRhYmxlXG4gIGNvbnN0IHNjYWxlID0gc2NhbGVzW29wdGlvbnMubmFtZV07XG5cbiAgY29uc3QgZ2VuZXJhdGVkU2NhbGUgPSBbXTtcbiAgZm9yIChsZXQgZGlyZWN0aW9uIG9mIG9wdGlvbnMuZGlyZWN0aW9ucykge1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICdBU0MnKSB7XG4gICAgICBnZW5lcmF0ZWRTY2FsZS5wdXNoKGdldEFzY1NjYWxlKHN0YXJ0TWlkaSwgc2NhbGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuZXJhdGVkU2NhbGUucHVzaChnZXREZXNjU2NhbGUoc3RhcnRNaWRpLCBzY2FsZSkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZW5lcmF0ZWRTY2FsZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2NhbGVHZW5lcmF0b3I7XG4iLCJjb25zdCBzZXF1ZW5jZUdlbmVyYXRvciA9IChzdGFydE1pZGksIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgeyBpbnRlcnZhbCwgZGlyZWN0aW9uIH0gPSBvcHRpb25zO1xuICBjb25zdCBnZW5lcmF0ZWRTZXF1ZW5jZSA9IFtdO1xuXG4gIC8vIGtlZXAgZ29pbmcgaWYgbm90ZSBpcyAwIG9yIG5vdCBhbiBpbnRlcnZhbCB0aGF0IGlzIG11bHRpcGxlIG9mIDEyXG4gIC8vIHNpbmNlIHNlcXVlbmNlcyBjYW4gZ28gcGFzdCBhbiBvY3RhdmUgYnV0IHN0aWxsIGdldCBiYWNrIHRvIHJvb3RcbiAgZm9yIChsZXQgbm90ZSA9IDA7ICFub3RlIHx8IG5vdGUgJSAxMiAhPT0gMDsgbm90ZSArPSBpbnRlcnZhbCkge1xuICAgIGxldCBkaWZmZXJlbmNlID0gZGlyZWN0aW9uID09PSAnQVNDJyA/IG5vdGUgOiBub3RlICogLTE7XG4gICAgZ2VuZXJhdGVkU2VxdWVuY2UucHVzaChzdGFydE1pZGkgKyBkaWZmZXJlbmNlKTtcbiAgfVxuXG4gIHJldHVybiBnZW5lcmF0ZWRTZXF1ZW5jZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2VxdWVuY2VHZW5lcmF0b3I7XG4iLCJjb25zdCBzaHVmZmxlID0gKGFycmF5KSA9PiB7XG4gIGZvciAobGV0IGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgIFthcnJheVtqXSwgYXJyYXlbaV1dID0gW2FycmF5W2ldLCBhcnJheVtqXV07XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59O1xuXG5jb25zdCB0b25lUm93R2VuZXJhdG9yID0gKHN0YXJ0TWlkaSkgPT4ge1xuICBsZXQgcm93ID0gW3N0YXJ0TWlkaV07XG4gIGxldCByYW5kb21BcnJheSA9IHNodWZmbGUoWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMV0pO1xuXG4gIGZvciAobGV0IG51bSBvZiByYW5kb21BcnJheSkge1xuICAgIHJvdy5wdXNoKHN0YXJ0TWlkaSArIG51bSk7XG4gIH1cblxuICByZXR1cm4gcm93O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0b25lUm93R2VuZXJhdG9yOyIsImNvbnN0IGNob3JkR2VuZXJhdG9yID0gcmVxdWlyZSgnLi4vbm90ZUdlbmVyYXRvcnMvY2hvcmRHZW5lcmF0b3InKTtcbi8vIGFkZCByb3V0ZXJzIGhlcmVcblxuY29uc3QgY2hvcmRSb3V0ZXIgPSAoc3RhcnRNaWRpLCBvcHRpb25zLCBzZWxlY3Rpb25zKSA9PiB7XG4gIGNvbnN0IGdlbmVyYXRlZENob3JkID0gY2hvcmRHZW5lcmF0b3Ioc3RhcnRNaWRpLCBvcHRpb25zKTtcbiAgXG4gIGlmICghc2VsZWN0aW9ucy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZ2VuZXJhdGVkQ2hvcmQ7XG4gIH1cblxuICBjb25zdCB7IHR5cGUsIHZhbHVlIH0gPSBzZWxlY3Rpb25zWzBdO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIC8vIGFkZCBjYXNlcyBoZXJlLCB3aWxsIG5lZWQgdG8gcnVuIG5leHQgb3BlcmF0aW9uIG9uIGFsbCBhcnBlZ2lvcy4uLlxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBnZW5lcmF0ZWRDaG9yZDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjaG9yZFJvdXRlcjtcbiIsImNvbnN0IHNjYWxlR2VuZXJhdG9yID0gcmVxdWlyZSgnLi4vbm90ZUdlbmVyYXRvcnMvc2NhbGVHZW5lcmF0b3InKTtcbi8vIGFkZCByb3V0ZXJzIGhlcmVcblxuY29uc3Qgc2NhbGVSb3V0ZXIgPSAoc3RhcnRNaWRpLCBvcHRpb25zLCBzZWxlY3Rpb25zKSA9PiB7XG4gIGNvbnN0IGdlbmVyYXRyZWRTY2FsZSA9IHNjYWxlR2VuZXJhdG9yKHN0YXJ0TWlkaSwgb3B0aW9ucyk7XG4gIFxuICBpZiAoIXNlbGVjdGlvbnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGdlbmVyYXRyZWRTY2FsZTtcbiAgfVxuXG4gIGNvbnN0IHsgdHlwZSwgdmFsdWUgfSA9IHNlbGVjdGlvbnNbMF07XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgLy8gYWRkIGNhc2VzIGhlcmUsIHdpbGwgbmVlZCB0byBydW4gbmV4dCBvcGVyYXRpb24gb24gYWxsIHNjYWxlcy4uLlxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBnZW5lcmF0cmVkU2NhbGU7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2NhbGVSb3V0ZXI7XG4iLCJjb25zdCBzZXF1ZW5jZUdlbmVyYXRvciA9IHJlcXVpcmUoJy4uL25vdGVHZW5lcmF0b3JzL3NlcXVlbmNlR2VuZXJhdG9yJyk7XG5jb25zdCBzY2FsZVJvdXRlciA9IHJlcXVpcmUoJy4vc2NhbGVSb3V0ZXInKTtcbmNvbnN0IGNob3JkUm91dGVyID0gcmVxdWlyZSgnLi9jaG9yZFJvdXRlcicpO1xuXG5jb25zdCB7IG1pZGlUb0ZsYXQgfSA9IHJlcXVpcmUoJy4uLy4uL2NvbnZlcnNpb25UYWJsZXMvbWlkaVRvTm90ZVRhYmxlcycpO1xuXG5jb25zdCBzZXF1ZW5jZVJvdXRlciA9IChzdGFydE1pZGksIG9wdGlvbnMsIHNlbGVjdGlvbnMpID0+IHtcbiAgY29uc3QgZ2VuZXJhdGVkU2VxdWVuY2UgPSBzZXF1ZW5jZUdlbmVyYXRvcihzdGFydE1pZGksIG9wdGlvbnMpO1xuXG4gIGlmICghc2VsZWN0aW9ucy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZ2VuZXJhdGVkU2VxdWVuY2UubWFwKG1pZGlOb3RlID0+IG1pZGlUb0ZsYXRbbWlkaU5vdGVdKTtcbiAgfVxuXG4gIGNvbnN0IHsgdHlwZSwgdmFsdWUgfSA9IHNlbGVjdGlvbnNbMF07XG4gIGxldCByZXN1bHRzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZW5lcmF0ZWRTZXF1ZW5jZS5sZW5ndGg7IGkrKykge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc2NhbGUnOlxuICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoXG4gICAgICAgICAgc2NhbGVSb3V0ZXIoZ2VuZXJhdGVkU2VxdWVuY2VbaV0sIHZhbHVlLCBzZWxlY3Rpb25zLnNsaWNlKDEpKVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnY2hvcmQnOlxuICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoXG4gICAgICAgICAgY2hvcmRSb3V0ZXIoZ2VuZXJhdGVkU2VxdWVuY2VbaV0sIHZhbHVlLCBzZWxlY3Rpb25zLnNsaWNlKDEpKVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlZFNlcXVlbmNlLm1hcChtaWRpTm90ZSA9PiBtaWRpVG9GbGF0W21pZGlOb3RlXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNlcXVlbmNlUm91dGVyO1xuIiwiY29uc3Qgc2NhbGVSb3V0ZXIgPSByZXF1aXJlKCcuL3NjYWxlUm91dGVyJyk7XG5jb25zdCBjaG9yZFJvdXRlciA9IHJlcXVpcmUoJy4vY2hvcmRSb3V0ZXInKTtcbmNvbnN0IHNlcXVlbmNlUm91dGVyID0gcmVxdWlyZSgnLi9zZXF1ZW5jZVJvdXRlcicpO1xuXG5jb25zdCBzaW5nbGVOb3RlUm91dGVyID0gKHN0YXJ0TWlkaSwgbm90ZSwgc2VsZWN0aW9ucykgPT4ge1xuICBpZiAoIXNlbGVjdGlvbnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtub3RlXTtcbiAgfVxuXG4gIGNvbnN0IHsgdHlwZSwgdmFsdWUgfSA9IHNlbGVjdGlvbnNbMF07XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnc2NhbGUnOlxuICAgICAgcmV0dXJuIHNjYWxlUm91dGVyKHN0YXJ0TWlkaSwgdmFsdWUsIHNlbGVjdGlvbnMuc2xpY2UoMSkpO1xuXG4gICAgY2FzZSAnY2hvcmQnOlxuICAgICAgcmV0dXJuIGNob3JkUm91dGVyKHN0YXJ0TWlkaSwgdmFsdWUsIHNlbGVjdGlvbnMuc2xpY2UoMSkpO1xuXG4gICAgY2FzZSAnc2VxdWVuY2UnOlxuICAgICAgcmV0dXJuIHNlcXVlbmNlUm91dGVyKHN0YXJ0TWlkaSwgdmFsdWUsIHNlbGVjdGlvbnMuc2xpY2UoMSkpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBbbm90ZV07XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2luZ2xlTm90ZVJvdXRlcjtcbiIsImNvbnN0IHRvbmVSb3dHZW5lcmF0b3IgPSByZXF1aXJlKCcuLi9ub3RlR2VuZXJhdG9ycy90b25lUm93R2VuZXJhdG9yJyk7XG5jb25zdCBzY2FsZVJvdXRlciA9IHJlcXVpcmUoJy4vc2NhbGVSb3V0ZXInKTtcbmNvbnN0IGNob3JkUm91dGVyID0gcmVxdWlyZSgnLi9jaG9yZFJvdXRlcicpO1xuXG5jb25zdCB7IG1pZGlUb0ZsYXQgfSA9IHJlcXVpcmUoJy4uLy4uL2NvbnZlcnNpb25UYWJsZXMvbWlkaVRvTm90ZVRhYmxlcycpO1xuXG5cbmNvbnN0IHRvbmVSb3dSb3V0ZXIgPSAoc3RhcnRNaWRpLCBzZWxlY3Rpb25zKSA9PiB7XG4gIGNvbnN0IGdlbmVyYXRlZFJvdyA9IHRvbmVSb3dHZW5lcmF0b3Ioc3RhcnRNaWRpKTtcblxuICBpZiAoIXNlbGVjdGlvbnNbMF0pIHtcbiAgICByZXR1cm4gZ2VuZXJhdGVkUm93Lm1hcChtaWRpTm90ZSA9PiBtaWRpVG9GbGF0W21pZGlOb3RlXSk7XG4gIH1cblxuICBjb25zdCB7IHR5cGUsIHZhbHVlIH0gPSBzZWxlY3Rpb25zWzBdO1xuICBsZXQgcmVzdWx0cyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ2VuZXJhdGVkUm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdzY2FsZSc6XG4gICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChcbiAgICAgICAgICBzY2FsZVJvdXRlcihnZW5lcmF0ZWRSb3dbaV0sIHZhbHVlLCBzZWxlY3Rpb25zLnNsaWNlKDEpKVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnY2hvcmQnOlxuICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoXG4gICAgICAgICAgY2hvcmRSb3V0ZXIoZ2VuZXJhdGVkUm93W2ldLCB2YWx1ZSwgc2VsZWN0aW9ucy5zbGljZSgxKSlcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZWRSb3cubWFwKG1pZGlOb3RlID0+IG1pZGlUb0ZsYXRbbWlkaU5vdGVdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0cztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdG9uZVJvd1JvdXRlcjsiXX0=
