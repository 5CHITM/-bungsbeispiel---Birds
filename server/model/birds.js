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
  const { bird, observedBy } = body;

  bird['count'] += 1;
  bird['observer'].push(observedBy);

  console.log('observed bird:', bird);
  console.log('observed by: ', observedBy);

  const foundIndex = birds.findIndex((el) => el.id == id);
  birds[foundIndex] = bird;

  return birds;
};

module.exports = { getBirds, updateBird };
