// const asyncHandler = require('express-async-handler');
const model = require('../model/birds.js');

const getBirds = (req, res) => {
  const birds = model.getBirds(req.params.id);
  res.status(200).json(birds);
};

module.exports = { getBirds };