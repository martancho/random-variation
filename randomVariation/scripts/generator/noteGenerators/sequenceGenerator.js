const sequenceGenerator = (startMidi, interval) => {
  const generatedSequence = [];

  for (let note = 0; !note || note % 12 !== 0; note += interval) {
    generatedSequence.push(startMidi + note);
  }

  return generatedSequence;
};

module.exports = sequenceGenerator;
