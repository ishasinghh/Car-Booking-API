const express = require('express');
const Users = require('../models/user');

const router = express.Router();
router.get('/', async (req, res) => {
  const { id } = req.query;
  const { fullName } = req.query;

  if (id) {
    const pokemons = await Users.findByPk(id);
    res.json(pokemons);
  } else if (fullName) {
    const pokemons = await Users.findAll({
      where: {
        fullName,
      },
    });
    res.json(pokemons);
  } else {
    const pokemons = await Users.findAll();
    res.json(pokemons);
  }
});

module.exports = router;
