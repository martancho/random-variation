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