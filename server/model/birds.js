const fs = require('fs');
const path = require('path');

const f = path.resolve(__dirname, 'birds.json');
const data = fs.readFileSync(f);

let birds = JSON.parse(data);

const getBirds = (id) => {
  if (id !== undefined) {
    return birds;
  }
  return birds;
};

const updateBird = (id, body) => {
  const { bird } = body;
  bird['count'] += 1;

  const foundIndex = birds.findIndex((el) => el.id == id);
  birds[foundIndex] = bird;

  return birds;
};

module.exports = { getBirds, updateBird };
