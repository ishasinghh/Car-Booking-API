/* eslint-disable no-console */
const express = require('express');
const Users = require('../models/user');

const router = express.Router();

// eslint-disable-next-line consistent-return
router.post('/register', async (req, res) => {
  const { fullName, email, password } = req.body;

  const alreadyExistsUser = await Users.findOne({ where: { email } }).catch(
    (err) => {
      // eslint-disable-next-line no-console
      console.log('Error: ', err);
    }
  );

  if (alreadyExistsUser) {
    return res.status(409).json({ message: 'User with email already exists!' });
  }

  const newUser = new Users({ fullName, email, password, });
  const savedUser = await newUser.save().catch((err) => {
    console.log('Error: ', err);
    res.status(500).json({ error: 'Cannot register user at the moment!' });
  });
  const x = savedUser.id;
  if (savedUser) res.json({ message: 'Thanks for registering', Details: { id: x, fullName: req.body.fullName, email: req.body.email } });
});

module.exports = router;
