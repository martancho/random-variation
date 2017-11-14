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
