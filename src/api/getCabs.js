const express = require('express');
const CabBooK = require('../models/booking');

const router = express.Router();
router.get('/cabs', async (req, res) => {
  const pokemons = await CabBooK.findAll();
  res.json(pokemons);
});

module.exports = router;
