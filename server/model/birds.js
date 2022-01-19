const fs = require('fs');
const path = require('path');

const f = path.resolve(__dirname, 'birds.json');
const data = fs.readFileSync(f);

const getBirds = (id) => {
  if (id !== undefined) {
    return data;
  }
  return data;
};

module.exports = { getBirds };
