const express = require('express');
const { getBirds, updateBird } = require('../controllers/birds.js');

const router = express.Router();

router.get('/birds', getBirds);

router.patch('/bird/:id', updateBird);

module.exports = router;
